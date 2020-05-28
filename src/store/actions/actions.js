import * as actionTypes from './types';

export const flipCard = (id) => {
    return ({
        data: id,
        type: actionTypes.FLIP_CARD
    })
};
