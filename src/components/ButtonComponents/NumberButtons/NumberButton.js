import React from "react";


const NumberButtons = (props) => {
  //console.log(props)
  return (

    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className ="number-btn">
        <button>
          {props.num}
        </button>
      </div>
    </>
  )
};
export default NumberButtons