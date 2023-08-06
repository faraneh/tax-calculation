import React, {useEffect, useState} from 'react';

interface CalculatorProps {
  salary: number;
  year: number;
}

type resultProps = {
  email: string;
  gender: string;
};

function Calculator({ salary }: CalculatorProps) {

  // const calculateTax = (salary: number): number => {
    
  //   const taxRate = 0.2;
  //   return salary * taxRate;
  // };

  // const taxAmount = calculateTax(salary);


  const [result, setResult] = useState<resultProps[]>([]);


  function api<T>(): Promise<T> {
    return fetch('http://localhost:5000/tax-calculator/tax-year/2022')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
      .then(data => {
        console.log(data)
        return data
      })
      .catch((error: Error) => {
        console.log(error) 
        throw error
      })
  }

  api()


  return (
    <div>
      <h3>Calculation Result</h3>
      {/* <p>Salary: ${salary}</p>
      <p>Tax Amount: ${taxAmount}</p> */}
    </div>
  );
}

export default Calculator;
