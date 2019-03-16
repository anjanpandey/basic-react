import React from 'react';

const style= {
    border:'2px solid blue',
    borderRadius:'1em',
    padding:'18px',
    margin: '1em',
    width:'50%'
};

const userInput = props => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.username} style={style}/>
        </div>
    )
};

export default userInput;