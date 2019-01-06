import React from 'react';

const input = {
    fontSize: '15px !important',
    padding: '12px 10px 12px 15px',
    display: 'block',
    width: '300px',
    borderStyle: 'solid',
    borderColor: '#E4E9EC',
    borderWidth: '1px',
    backgroundColor: 'white !important',
    borderRadius: '3px',
    marginBottom: '15px'
}

const Input = ({placeholder, type, textChange}) => {
    return (
        <input type={type}
            style={input}
            placeholder={placeholder}
            onChange={textChange} />
    );
}

export default Input;