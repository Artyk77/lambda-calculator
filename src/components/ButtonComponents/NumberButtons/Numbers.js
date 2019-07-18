import React from "react";
import {Numbers} from '../../../data.js'
import NumberButtons from './NumberButton.js'

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  console.log(Numbers);
  return (
    <div className ="numbers">
    {Numbers.map((item, index) =>{
      return(< NumberButtons num={item} key = {index} />)
    }
  )}
  </div>


)
};
export default Numbers
