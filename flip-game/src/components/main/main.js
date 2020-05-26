import React, { Component, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../../css/main.scss';

class Main extends Component {

    state = {
        counter: 4,
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
                        <button className='card__front' onClick={this.handleClick}></button>
                    </div>
                    <div>
                        <button className='card__back' onClick={this.handleClick}></button>
                    </div>
                </ReactCardFlip>
            </main>
        );

    }
}

export default Main;