//jshint esversion: 6
import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  // return React.createElement('h1', {title: 'this works'}, 'hi sait');
  // return <h1 title="this works">A React App!</h1>;

  // in the end you have to tell React when it should re-render and you do so by using a concept called state. 
  // use state also returns something, it returns an array of exactly two elements; the first element always is our latest state snapshot, so either our initial state or once we changed it,the updated state and the second element of that array returned by use state is a function that allows us to update that state, replace it with a new value and tell React that it should re-render.
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ]);
  // const courseGoals = [
  //   {id: 'cg1', text: 'Finish the Course'},
  //   {id: 'cg2', text: 'Learn all about the Course Main Topic'},
  //   {id: 'cg3', text: 'Help other students in the Course Q&A'},
  // ];

  // You can also pass data back and you still do this with props. The idea just is that instead of having props that pass in data, like a string or an array or an object to the lower level, to the child component as it's also called, you pass a callback function from the parent component to the child component, so no array or anything like that but a callback function.

  const addNewGoalHandler = (newGoal) => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
    // use my old course goals and call concat here, not push because push modifies the existing item, instead set course goals wants a brand new array which will replace the old array and concat will also add an item to an array but it will return a new array to which this item was added. So it gives us a brand new array, doesn't touch the old one and we then pass the brand new array to set course goals and React will then use that brand new array to under the hood replace the old array in its internally managed state and it will re-render this component once it did so and therefore update this course goals constant with the new array in the next render cycle, which in the end means that React will execute this function here and therefore when it does so, it will reflect that new data in our jsx code.

    // setCourseGoals(courseGoals.concat(newGoal));

    // That means that actually maybe if a user clicks add goals multiple times, the course goals which are currently rendered on the screen might not be our latest state because not all state updates might have been processed yet, therefore there is a better form of updating this, instead of passing our new state data to set course goals, you can pass a function to set course goals, a function which receives the latest state, pref course goals and has to return a new state snapshot and React will then schedule all these function calls and guarantee you that they are executed in the right order so that even if a state update was deferred, by the time the update thereafter executes, it guarantees you the first one executed as well and then here you would simply date for return pref course goals which still is an array concat new goal. It will yield the same result as before in this app and in this simple app, this approach would have been fine.
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      {/* it's a convention to name props which the end pass functions to lower level components like event handlers because the functions you pass down to components in the end will be called by these components upon certain events, that is how it typically works*/}
      {/* we just use props to parse a function that is then called by the child components instead of passing data directly from parent to child, this gives us a way to communicate back from the child to the parent with help of such a function. */}
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
