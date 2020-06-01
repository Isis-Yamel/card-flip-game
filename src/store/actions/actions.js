import * as actionTypes from './types';

export const flipCard = (id) => {
    return ({
        data: id,
        type: actionTypes.FLIP_CARD
    })
};

export const shuffleCards = () => {
    return ({
        type: actionTypes.SHUFFLE_CARD
    })
};

export const handleBoard = () => {
    return ({
        type: actionTypes.ENABLE_BOARD
    })
}
