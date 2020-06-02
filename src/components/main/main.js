import React, { PureComponent, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import { flipCard, handleBoard, storeCardMatch } from '../../store/actions/actions';
import { connect } from 'react-redux';
import '../../css/main.scss';

class Main extends PureComponent {

    handleClickBoard(id, index, image) {
        this.props.flipCard(id);
        this.props.storeCardMatch({index, image});

        if (this.props.data.currentFlipCards === 1) {
            setTimeout(() => {
                this.props.handleBoard();
            }, 1500);
        }
    };

    renderCards = () => {
        return (
            <Fragment>
                {this.props.data.cards.map((item, index) => (
                    <ReactCardFlip isFlipped={item.isFlipped} flipDirection="vertical" key={index}>
                        <div>
                            <button disabled={this.props.data.disabledBoard} className=' card card__front' onClick={(id, image) => this.handleClickBoard(item.id, index, item.image)}>
                            </button>
                        </div>
                        <div >
                            <button disabled={this.props.data.disabledBoard} className=' card card__back' onClick={(id, image) => this.handleClickBoard(item.id, index, item.image)}>
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
            <Fragment>
                {this.renderCards()}
            </Fragment>
        );

    }
}

const mapStateProps = state => {
    return {
        data: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        flipCard: (id) => dispatch(flipCard(id)),
        handleBoard: () => dispatch(handleBoard()),
        storeCardMatch: (index, image) => dispatch(storeCardMatch(index, image)),
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Main);