import React from "react";
import {Operators} from '../../../data'
import OperatorButtons from './OperatorButton'
//import any components needed

//Import your array data to from the provided data file
const Operators = () => {
  // STEP 2 - add the imported data to state
  console.log(typeof Operators)
  return (
    <div className = "operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}

{Operators.map((Operators, index) => {
           return (<OperatorButtons signs={Operators.char} key={index} />)
         })}


    </div>
  )
};

export default Operators