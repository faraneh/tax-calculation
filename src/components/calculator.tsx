import React, {useEffect, useState} from 'react';

interface CalculatorProps {
  salary: number;
  year: number;
}

// type resultProps = {
//   email: string;
//   gender: string;
// };

function Calculator({ salary }: CalculatorProps) {

  const calculateTax = (salary: number): number => {
    
    const taxRate = 0.2;
    return salary * taxRate;
  };

  const taxAmount = calculateTax(salary);


  // const [result, setResult] = useState<resultProps[]>([]);

  // useEffect(() => {
  //   const api = async () => {
  //     const data = await fetch("https://randomuser.me/api", {
  //       method: "GET"
  //     });
  //     const jsonData = await data.json();
  //     setResult(jsonData.results);
  //   };

  //   api();
  // }, []);




  return (
    <div>
      <h3>Calculation Result</h3>
      <p>Salary: ${salary}</p>
      <p>Tax Amount: ${taxAmount}</p>
    </div>
  );
}

export default Calculator;
