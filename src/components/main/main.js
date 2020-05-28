import React, { PureComponent, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import { flipCard } from '../../store/actions/actions';
import { connect } from 'react-redux';
import '../../css/main.scss';

class Main extends PureComponent {

    handleRestartButton = () => {
        this.setState({
            counter: 0,
        })
    };

    renderCards = () => {
        return (
            <Fragment>
                {this.props.data.map((item, index) => (
                    <ReactCardFlip isFlipped={item.isFlipped} flipDirection="vertical" key={index}>
                        <div>
                            <button className=' card card__front' onClick={(id) => this.props.flipCard(item.id)}>
                            </button>
                        </div>
                        <div>
                            <button className=' card card__back' onClick={(id) => this.props.flipCard(item.id)}>
                                <i className={item.image}></i>
                            </button>
                        </div>
                    </ReactCardFlip>
                ))}
            </Fragment>
        )
    }

    render () {
        return (
            <main className='main__layout'>
                {this.renderCards()}
            </main>
        );

    }
}

const mapStateProps = state => {
    return {
        data: state.cards
    };
};

const mapDispatchToProps = dispatch => {
    return {
        flipCard: (id) => dispatch(flipCard(id)),
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Main);