import {useDispatch} from 'react-redux';
import {useState} from 'react';



function ElementForm () {
  // track new element
  const[newElement, setNewElement] = useState('');

  const dispatch = useDispatch();

  const onAddElement = function (e) {
    e.preventDefault(); 

    dispatch({
      type: 'ADD_ELEMENT',
      payload: newElement
    });

    // clears out the field
    setNewElement('');
  };

  return(
    <div>
      <h1>Element Form</h1>
      <form onSubmit={onAddElement}>

          <h3> Add a new Element</h3>

          <input type="text" 
          placeholder="Element Name" 
          value={newElement} 
          onChange={(e) => setNewElement(e.target.value)}/>

          <button>Add Element</button>
        </form>
      </div>

  )
};

export default ElementForm;