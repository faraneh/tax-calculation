import React, { useEffect, useState } from 'react';

interface CalculatorProps {
  salary: number;
  year: number;
}

interface TaxBracket {
  min: number;
  max?: number;
  rate: number;
}

interface TaxData {
  tax_brackets: TaxBracket[];
}


function Calculator({ salary, year }: CalculatorProps) {
  const [result, setResult] = useState<TaxData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>()

  useEffect(() => {
    async function fetchTaxData() {
      await fetch(`http://localhost:5000/tax-calculator/tax-year/${year}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setErrorMsg(null);
          return response.json();
        })
        .then((data) => {
          setErrorMsg(null);
          setResult(data);
        })
        .catch((error) => {
          setErrorMsg('error');
          console.error('Error fetching tax data:', error);
        });
    }
  
    fetchTaxData();
  }, [salary ,year]);




  const calculateTaxAmount = (salary: number, tax_brackets: TaxBracket[]): number => {
    let remainingSalary = salary;
    let totalTax: number = 0;

    for (const bracket of tax_brackets) {
      const { min, max, rate } = bracket;

      if (max && remainingSalary > max) {
        totalTax += (max - min) * rate;
      } else {
        totalTax += (remainingSalary - min) * rate;
        break;
      }
    }
    return totalTax;
  };





  return (
    <div>
      <h3>Calculation Result</h3>
      {result ? (
        <>
          <p>Salary: ${salary}</p>
          <p>Tax Amount: ${calculateTaxAmount(salary, result.tax_brackets)}</p>
        </>
      ) :
      errorMsg ? (
        <>
          <p>Something wrong happened, please try again later.</p>
        </>
      ) :
      (
        <>
          <p>Loading tax data...</p>
        </>
      )}
    </div>
  );
}

export default Calculator;
