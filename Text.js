import React from 'react';
//import './style.css';

const Text = (props) => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

  return (
    <div className="form-group">
    
      <input type="text" className="form-control" {...props} />
    
    </div>
  );
}

export default Text;