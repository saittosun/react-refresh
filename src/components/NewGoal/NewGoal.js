// jshint esversion: 6
import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState('');
  // I like this naming of having handler at the end of my function name if it is a function that is triggered upon some event.
  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };
    setEnteredText('');
    props.onAddGoal(newGoal);
  };
  

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };
  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      {/* In regular HTML, this doesn't have to be self closing, in jsx this does have to be self closing */}
      {/* we are using state management to create something which is also sometimes called two-way binding. We're binding the value of the input and on every keystroke, we're updating to value which we then bind back to the input, so that we always reflect the latest value inside of the input but we also are able to manage this in a state-driven way so that we also have a chance of manipulating the value from inside our code up here and reflect this back into the input in this case. */}
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button type="submit">Add Goal</button>
    </form>
  )
}

export default NewGoal;