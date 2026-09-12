import React, { useReducer, useState } from 'react';
import { useNavigate, Routes } from 'react-router-dom';
import '../styles/Main.css';

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPIFallback = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());
  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) result.push(i + ':00');
    if(random() < 0.5) result.push(i + ':30');
  }
  return result;
};

const getFetchAPI = (date) => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }
  return fetchAPIFallback(date);
};

export const initializeTimes = () => {
  const today = new Date();
  return getFetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.payload;
      if (!selectedDate) return state;
      const dateObj = new Date(selectedDate.replace(/-/g, '/'));
      return getFetchAPI(dateObj);
    }
    default:
      return state;
  }
};

const Main = ({ children }) => {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  const todayString = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(todayString);
  const [time, setTime] = useState('');

  const updateTimesForDate = (selectedDate) => {
    setDate(selectedDate);
    dispatch({
      type: 'UPDATE_TIMES',
      payload: selectedDate
    });
  };

  const submitForm = (formData) => {
    try {
      const success = window.submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      } else {
        alert('There was an error processing your reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <main className="main-content" role="main" aria-label="Main content">
      <div className="container">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (child.type === Routes) {
              const routesChildren = React.Children.map(child.props.children, (route) => {
                if (React.isValidElement(route) && route.props.element) {
                  const elementWithProps = React.cloneElement(route.props.element, {
                    availableTimes,
                    updateTimesForDate,
                    date,
                    time,
                    setTime,
                    setDate,
                    submitForm,
                  });
                  return React.cloneElement(route, {
                    element: elementWithProps,
                  });
                }
                return route;
              });
              return React.cloneElement(child, {
                children: routesChildren,
              });
            }
            return React.cloneElement(child, {
              availableTimes,
              updateTimesForDate,
              date,
              time,
              setTime,
              setDate,
              submitForm,
            });
          }
          return child;
        })}
      </div>
    </main>
  );
};

export default Main;