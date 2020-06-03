import React, { Component } from 'react';
import CurrentPlayer from './currentplayer';
import ChangePlayer from './changePlayer';
import { connect } from 'react-redux';
import { newPlayer } from '../../store/actions/actions';
import '../../css/main.scss';

class GameRecord extends Component {

    state = {
        changePlayer: false,
    };

    changeScreenPlayer = () => {
        let doesChange = this.state.changePlayer;
        this.setState ({
            changePlayer: !doesChange
        });
    };

    changePlayer = () => {
        if (this.state.changePlayer === true) {
            return <CurrentPlayer
                currentPlayer={this.props.data.players}
                tries= {this.props.data.tries}
            />
        } else {
            return <ChangePlayer
                change={this.changeScreenPlayer}
                player={this.props.newPlayer}
                tries= {this.props.data.tries}/>
        }
    }

    render() {
        return (
            <div>
                {this.changePlayer()}
                <section className='record--space record'>
                    <h2 className='record__title'>Position Table</h2>
                    <p>Player -- tries</p>
                </section>
            </div>
        )
    };
};

const mapStateProps = state => {
    return {
        data: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        newPlayer: (name, tries) => dispatch(newPlayer(name, tries)),
    }
};

export default connect(mapStateProps, mapDispatchToProps)(GameRecord);