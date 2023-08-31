import React, { useState}  from "react";
import classes from './Form.module.css';

const initialUserInput = {
  'current-savings': 1000,
  'yearly-contribution': 1200,
  'expected-return': 5,
  duration: 10,
};

function Form(props) {

  const[ userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input,value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      }
    })
  }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
      };

      const resetHandler= () => {
        setUserInput(initialUserInput);
    
      }

    
    return (
        <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(event) => inputChangeHandler('current-savings',event.target.value)} value={userInput['current-savings']}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event) => inputChangeHandler('yearly-contribution',event.target.value)} value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) => inputChangeHandler('expected-return',event.target.value)} value={userInput['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) => inputChangeHandler('duration',event.target.value)} value={userInput['duration']}/>
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default Form;