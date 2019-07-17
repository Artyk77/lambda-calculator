import React from "react";

const OperatorButtons = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.signs}
      </button>
    </>
  
  )
};

export default OperatorButtons