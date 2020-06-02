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
};

export const storeCardMatch = (data) => {
    return ({
        type: actionTypes.STORE_MATCH_CARD,
        data
    })
};

export const newGame = () => {
    return ({
        type: actionTypes.NEW_GAME
    })
};

export const resetPositions = () => {
    return ({
        type: actionTypes.RESET_POSITIONS
    })
};
