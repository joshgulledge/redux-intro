import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  // local state
  // const [clickCount, setClickCount] = useState(0);

  const clickCount = useSelector((store) => { 
    // console.log('store is: ', store);
    return store.clickCount; 
  })
  // console.log('clickCount is: ', clickCount);

  const elements = useSelector((store) => {
    console.log(store.elementList);
    return store.elementList;
  })

  const btnClick = function () {
    console.log('the button was clicked');
  };

  return (
    <div>
      <h1>🎉 Josh first Redux App 🎉 </h1>

      <h2>Button Clicker/ Perodic Table app</h2>
      <div>You clicked the button {clickCount} times.</div>
      <button onClick={btnClick}>Click me?</button>

      <h2>Table of Elements</h2>
      <ul>
        {elements.map((value, index) => {
          return(
            <li key={index}> {value} </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
