// src/components/Main.jsx
import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api.js'; // <-- Importar desde api.js
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

// Función para obtener horarios (usa fetchAPI del wrapper)
const getFetchAPI = (date) => {
  try {
    return fetchAPI(date);
  } catch (error) {
    console.warn('Error usando fetchAPI, usando fallback:', error);
    return fetchAPIFallback(date);
  }
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

  // Función para enviar el formulario
  const submitForm = (formData) => {
    try {
      const success = submitAPI(formData);
      
      if (success) {
        navigate('/confirmed');
      } else {
        alert('Hubo un error al procesar la reserva. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar la reserva:', error);
      alert('Ocurrió un error inesperado. Por favor, intenta de nuevo.');
    }
  };

  return (
    <main className="main-content">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
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
    </main>
  );
};

export default Main;