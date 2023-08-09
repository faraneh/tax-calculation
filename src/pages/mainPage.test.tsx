import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MainPage from './mainPage'; // Make sure to import the correct path

describe('MainPage Component', () => {
  test('renders the component', () => {
    render(<MainPage />);
    const headerElement = screen.getByText(/TAX Calculator/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('displays error messages for invalid input', () => {
    render(<MainPage />);
    
    const salaryInput = screen.getByLabelText('Enter Salary:');
    const yearInput = screen.getByLabelText('Enter Year:');
    const calculateButton = screen.getByText('CALCULATE NOW');
    
    fireEvent.change(salaryInput, { target: { value: -1000 } });
    fireEvent.change(yearInput, { target: { value: 2025 } });
    fireEvent.click(calculateButton);
    
    const errorMessage = screen.getByText(/Please enter valid values/);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays the calculator when form is submitted with valid input', () => {
    render(<MainPage />);
    
    const salaryInput = screen.getByLabelText('Enter Salary:');
    const yearInput = screen.getByLabelText('Enter Year:');
    const calculateButton = screen.getByText('CALCULATE NOW');
    
    fireEvent.change(salaryInput, { target: { value: 50000 } });
    fireEvent.change(yearInput, { target: { value: 2022 } });
    fireEvent.click(calculateButton);
    
    const calculatorComponent = screen.getByTestId('calculator-component');
    expect(calculatorComponent).toBeInTheDocument();
  });
});