import React, { useState, useEffect } from 'react';
import Calculator from '../components/calculator';

import './mainPage.css'

function MainPage() {
  const [salary, setSalary] = useState<number>(0);
  const [year, setYear] = useState<number>(2012);
  const [formStatus, setFormStatus] = useState<boolean>(false)
  const [formTrigger, setFormTrigger] = useState<boolean>(false)

  //I kept this "current year" for scaleability, so if we add new years rate to API, it will work.
  const currentYear = new Date().getFullYear();


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setFormTrigger(false)

    event.target.id === 'year' ? setYear(value) : 
    event.target.id === 'salary' ? setSalary(value) : 
    console.log('Dev comment: Undefined input!');
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormTrigger(true)
  }

  // Why useEffect: I put condition on input "onChange", instead of "formSubmit". initially I wanted to make it dynamic calculator!!
  useEffect(() => {
    year < 2012 || year > currentYear ? setFormStatus(false) : 
    salary < 0 ? setFormStatus(false) : 
    setFormStatus(true);
  }, [salary, year, currentYear])


  return (
    <div className="mainPage">
      <h2>TAX Calculator</h2>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="salary">Enter Salary:
        <input
          type="number"
          id="salary"
          value={salary}
          onChange={handleInputChange}
          style={{outline: salary < 0 ? "1px solid red" : 'none'}}
        /></label>
        <label htmlFor="year">Enter Year:
        <input
          type="number"
          id="year"
          value={year}
          onChange={handleInputChange}
          style={{outline: year < 2012 || year > currentYear ? "1px solid red" : 'none'}}
        /></label>
        <button type="submit">CALCULATE NOW</button>
      </form>
      {formStatus && formTrigger ? <Calculator salary={salary} year={year} /> : 
      !formStatus && formTrigger ? <p style={{marginTop: 50}}>Please enter valid values.</p> : 
      <p style={{marginTop: 50}}>Waiting...</p>}
    </div>
  );
}

export default MainPage;