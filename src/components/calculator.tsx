import { useEffect, useState } from 'react';
import { Formatter } from '../utility/formatter';

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


const Calculator = ({ salary, year }: CalculatorProps) => {
const [result, setResult] = useState<TaxData | null>(null);
const [errorMsg, setErrorMsg] = useState<string | null>()

useEffect(() => {
  const fetchTaxData = async () => {
    await fetch(`http://localhost:5000/tax-calculator/tax-year/${year}`)
      .then (response => {
        if (response && !response.ok) {
          setErrorMsg('Something wrong happened, please try again later.')
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setErrorMsg(null);
        console.log("Received data successfully.")
        setResult(data);
      })
      .catch( async (error)  => {
        await setErrorMsg("Something went wrong with data, please try again later.")
        console.error('Error fetching tax data:', error); 
      });
  }

  fetchTaxData();
},[]);


const CalculateTaxAmount = (salary: number, tax_brackets: TaxBracket[]): number => {
  
  let remainingSalary = salary;
  let totalTax: number = 0;

  for (const bracket of tax_brackets) {
    const { min, max, rate } = bracket;

    if (remainingSalary === 0) break;

    const taxableIncome = typeof max === "number" ? Math.min(remainingSalary, max - min + 1) : Math.min(remainingSalary);
    totalTax += taxableIncome * rate;
    remainingSalary -= taxableIncome;

    console.log({"min: ": min,"max: ": max,"rate: ": rate,"tax: ": taxableIncome * rate})
  }

  console.log('Tax calculation completed.')
  return totalTax;
};





return (
  <div className="calculator">
    <h3>Calculation Result</h3>
    {result ? (
      <>
        <p>Salary: {Formatter(salary)}</p>
        <p>Tax Amount: <span data-testid="contentinfo">{Formatter((CalculateTaxAmount(salary, result.tax_brackets)))}</span></p>
      </>
      ) : ( !errorMsg ? (
        <>
          <p>Loading tax data...</p>
        </> 
        ) : (
        <>
          <p>{errorMsg}</p>
        </>
      )
    )}
  </div>
);
}

export default Calculator;
