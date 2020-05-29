import * as actionTypes from '../actions/types';
import { cardFactory } from '../utils/cardsFactory';
import { cardImagesProps } from '../utils/imagesData';

const initialState = {
    cards: cardFactory(cardImagesProps),
    currentFlipCards: 0,
};
console.log(cardFactory(cardImagesProps));

const shuffle = (state) => {
    return {
        ...state,
        cards: state.cards.sort(() => Math.random() - 0.5)
    };
}

const isCardFlipped = (state, id) => {
    state.currentFlipCards++
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
    console.log(state);
    if (state.currentFlipCards === 2) {
        state.currentFlipCards = 0;
        setTimeout(() => {
            state.cards.map( card => {
                card.isFlipped = false;
                return card;
            })
        }, 1000);
    }
};

const resetCards = (state) => {
    return {
        ...state.cards.map( card => {
            card.isFlipped = false;

            return card;
        })
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARD:
            return state;
        case actionTypes.FLIP_CARD:
            return isCardFlipped({...state}, action.data);
        case actionTypes.SHUFFLE_CARD:
            return shuffle({...state});
        default:
            return state;
    };
};

export default reducer;