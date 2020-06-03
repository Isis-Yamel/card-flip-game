import React from 'react';

const CurrentPlayer = (props) => {
    console.log(props);

    return (
        <section className='record'>
            <h2 className='record__title'>Current Player</h2>
            <p>Name: {props.currentPlayer[0].name}</p>
            <p>Tries: {props.tries} </p>
        </section>
    )
};

export default CurrentPlayer;