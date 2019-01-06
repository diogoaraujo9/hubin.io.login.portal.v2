import React from 'react';

const button = {
    backgroundColor: '#42A4FC',
    color: 'white',
    borderWidth: '2px',
    borderColor: '#42A4FC',
    borderStyle: 'solid',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'normal',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'all 0.5s',
    width: '100%'
}

const Button = ({text, click}) => {
    return (
        <button type='text' 
            style={button}
            onClick={click}>
            {text}
        </button>
    );
}

export default Button;