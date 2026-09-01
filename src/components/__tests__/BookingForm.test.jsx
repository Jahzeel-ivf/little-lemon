// src/components/__tests__/BookingForm.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../BookingForm';

test('Renders the BookingForm date label', () => {
  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      updateTimesForDate={jest.fn()}
      date=""
      time="17:00"
      setTime={jest.fn()}
      setDate={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});