import React, { Component } from 'react';
import '../../css/changePlayer.scss';

class CurrentPlayer extends Component {

    state = {
        name: ''
    };

    handleName = (e) => {
        this.setState ({
            name: e.target.value
        })
    };

    newPlayerAction = () => {
        this.props.player ({
            name: this.state.name,
            tries: this.props.tries,
        });
        this.props.change()
    };

    render () {
        return (
            <section className=' record__playerRecord record'>
                <p>Please enter your name: </p>
                <label for='name'>
                    <input onChange={(e) => this.handleName(e)} type='text' name='name' required></input>
                </label>
                <button onClick={() => this.newPlayerAction()} className='record__button'>OK</button>
            </section>
        )
    };
};

export default CurrentPlayer;