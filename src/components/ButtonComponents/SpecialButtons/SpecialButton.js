import React from "react";


const SpecialButton = (props) => {
  return (
    <div className ="special-btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.specs}
      </button>
      </div>
  )
};

export default SpecialButton