import React from 'react';
import { connect } from 'react-redux';
import { newGame, resetPositions } from '../../store/actions/actions';
import '../../css/header.scss';

const Header = (props) => {
    return (
        <header className='header__layout'>
            <h1 className='header__title'>Flip game</h1>
            <section className='header__menu'>
                <button onClick={() => props.resetPositions()} className='header__button'>
                    Reset positions
                </button>
                <button onClick={() => props.newGame()} className='header__button'>
                    New Game
                </button>
                <button className='header__button'>
                    Change player
                </button>
            </section>
        </header>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        newGame: () => dispatch(newGame()),
        resetPositions: () => dispatch(resetPositions()),
    }
};

export default connect(null, mapDispatchToProps) (Header);