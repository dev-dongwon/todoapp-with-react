import React from 'react';
import './Form.css';

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={ value } onChange={ onchange } onKeyPress={ onkeypress } />
      <div className="create-button" onClick={ onCreate }>
        추가
      </div>
    </div>
  )
}

export default Form;