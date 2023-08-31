
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/UserInput/Form';
import Table from './components/Table/Table';


function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);}

  const yearlyData = []; 

  if(userInput) {
  
    console.log(userInput);
  let currentSavings = userInput['current-savings']; 
  const yearlyContribution = userInput['yearly-contribution'];  
  const expectedReturn = userInput['expected-return'] / 100;
  const duration = userInput['duration'];

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      totalSavings: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }
};

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} /> 

      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && <Table items={yearlyData} initialInvestment={userInput['current-savings']}/>}
     
    </div>
  );
}

export default App;
