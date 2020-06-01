import React from 'react';
import '../../css/header.scss';

const Header = (props) => {
    return (
        <header className='header__layout'>
            <h1 className='header__title'>Flip game</h1>
            <section className='header__menu'>
                <button className='header__button'>Reset positions</button>
                <button className='header__button'>New Game</button>
                <button className='header__button'>Change player</button>
            </section>
        </header>
    )
}

export default Header;