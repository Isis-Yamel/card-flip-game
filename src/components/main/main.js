import React, { PureComponent, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import { flipCard, handleBoard } from '../../store/actions/actions';
import { connect } from 'react-redux';
import '../../css/main.scss';

class Main extends PureComponent {

    handleClickBoard(id) {
        this.props.flipCard(id);

        setTimeout(() => {
            this.props.handleBoard();
        }, 2000);
    };

    renderCards = () => {
        console.log(this.props.data, 'on checking this bitch' );
        return (
            <Fragment>
                {this.props.data.cards.map((item, index) => (
                    <ReactCardFlip isFlipped={item.isFlipped} flipDirection="vertical" key={index}>
                        <div >
                            <button disabled={this.props.data.disabledBoard} className=' card card__front' onClick={(id) => this.handleClickBoard(item.id)}>
                            </button>
                        </div>
                        <div >
                            <button disabled={this.props.data.disabledBoard} className=' card card__back' onClick={(id) => this.handleClickBoard(item.id)}>
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
        data: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        flipCard: (id) => dispatch(flipCard(id)),
        handleBoard: () => dispatch(handleBoard()),
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Main);