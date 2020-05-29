import React from 'react';
import '../../css/header.scss';

const Header = (props) => {
    return (
        <header className='header__layout'>
            <section>
                <h1 className='header__title'>Flip game</h1>
                <button className='header__button' onClick={props.restart}>Restart</button>
            </section>
            <p className='header__layout--counter'>Tries: {props.counter}</p>
        </header>
    )
}

export default Header;