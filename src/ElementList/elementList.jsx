import {useSelector} from 'react-redux';

const ElementList = function () {

  const elements = useSelector((store) => {
    // console.log(store.elementList);
    return store.elementList;
  });

  return (
    <ul>
    {elements.map((value, index) => {
      return(
        <li key={index}> {value} </li>
      )
    })}
  </ul>
  )
};

export default ElementList;