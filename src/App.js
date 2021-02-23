import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


function App() {
  // local state
  // const [clickCount, setClickCount] = useState(0);

  // gives us acess to the redux dispatch() function
  const dispatch = useDispatch();

  // track new element
  const[newElement, setNewElement] = useState('');

  const clickCount = useSelector((store) => { 
    // console.log('store is: ', store);
    return store.clickCount; 
  })
  // console.log('clickCount is: ', clickCount);

  const elements = useSelector((store) => {
    // console.log(store.elementList);
    return store.elementList;
  })

  const increaseBtnClick = function () {
    // in redux we dispatch the action
    dispatch({
      // this is sent to the action of the click count
      type:'INCREASE_CLICK_COUNT'
    })

  };

  const decreaseBtnClick = function () {
    dispatch({
      type: 'DECREASE_CLICK_COUNT'
    })
  };

  const addElement = function () {
    dispatch({ 
      type: 'ADD_ELEMENT', // convention to write like this
      payload: '👽 Alenioum 👽 '
    });
  };

  const onAddElement = function (e) {
    e.preventDefault(); 

    dispatch({
      type: 'ADD_ELEMENT',
      payload: newElement
    });
    
    // clears out the field
    setNewElement('');
  }

  return (
    <div>
      <h1>🎉 Josh first Redux App 🎉 </h1>

      <h2>Button Clicker/ Perodic Table app</h2>
      <div>You clicked the button {clickCount} times.</div>
      <button onClick={increaseBtnClick}>Increase Count</button>
      <button onClick={decreaseBtnClick}>decrease Count</button>

      <h2>Table of Elements</h2>
      <ul>
        {elements.map((value, index) => {
          return(
            <li key={index}> {value} </li>
          )
        })}
      </ul>

      <form onSubmit={onAddElement}>

        <h3> Add a new Element</h3>

        <input type="text" 
        placeholder="Element Name" 
        value={newElement} 
        onChange={(e) => setNewElement(e.target.value)}/>

        <button>Add Element</button>
      </form>

      <button onClick={addElement}>👽 Alenioum 👽 </button>
    </div>
  );
}

export default App;
