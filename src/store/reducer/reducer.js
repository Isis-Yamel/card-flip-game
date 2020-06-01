import * as actionTypes from '../actions/types';
import { cardFactory } from '../utils/cardsFactory';
import { cardImagesProps } from '../utils/imagesData';

const initialState = {
    cards: cardFactory(cardImagesProps),
    currentFlipCards: 0,
    disabledBoard: false,
};

const enableBoard = (state) => {
    return {
        ...state,
        cards: state.cards.map( card => {
            card.isFlipped = false;
            return card;
        }),
        disabledBoard: false,
    }
}

const isCardFlipped = (state, id) => {
    state.currentFlipCards++;

    checkCurrentCards(state);

    return {
        ...state,
        cards: state.cards.map( card => {
            if (card.id === id ) {
                card.isFlipped = !card.isFlipped;
            }
            return card;
        }),
        currentFlipCards: state.currentFlipCards
    };
};

const checkCurrentCards = (state) => {
    if (state.currentFlipCards === 2) {
        state.disabledBoard = !state.disabledBoard;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARD:
            return state;
        case actionTypes.FLIP_CARD:
            return isCardFlipped({...state}, action.data);
        case actionTypes.ENABLE_BOARD:
            return enableBoard({...state})
        default:
            return state;
    };
};

export default reducer;