import React, { Component, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import { connect } from 'react-redux';
import '../../css/main.scss';

class Main extends Component {

    state = {
        isFlipped: false
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped}))
    };

    handleRestartButton = () => {
        this.setState({
            counter: 0,
        })
    };

    render () {
        return (
            <main className='main__layout'>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
        <button className='card__front' onClick={this.handleClick}>4</button>
                    </div>
                    <div>
                        <button className='card__back' onClick={this.handleClick}></button>
                    </div>
                </ReactCardFlip>
            </main>
        );

    }
}

const mapStateProps = state => {
    return {
        data: state.cards
    };
};

export default connect(mapStateProps, null)(Main);