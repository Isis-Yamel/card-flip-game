import * as actionTypes from '../actions/types';
import { cardFactory } from '../utils/cardsFactory';
import { cardImagesProps } from '../utils/imagesData';

const initialState = {
    cards: cardFactory(cardImagesProps),
    currentFlipCards: 0,
    disabledBoard: false,
    matchedCard: [],
};

const pushCard = (state, pushedCard) => {
    let matchMatch = [...state.matchedCard];

    matchMatch.push({
        image: pushedCard.image,
        index: pushedCard.index
    });

    return {
        ...state,
        matchedCard: matchMatch
    };
};

const isAmatch = (state) => {
    let matchedCards = [...state.cards];

    if (state.matchedCard[0].image === state.matchedCard[1].image) {
        matchedCards[state.matchedCard[0].index].matched = true;
        matchedCards[state.matchedCard[1].index].matched = true;

        return ({
            ...state,
            cards: matchedCards
        });
    }
};

const enableBoard = (state) => {
    isAmatch(state);

    return {
        ...state,
        cards: state.cards.map( card => {
            if (!card.matched) {
                card.isFlipped = false;
            }

            return card;
        }),
        disabledBoard: false,
        currentFlipCards: 0,
        matchedCard: []
    };
};

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
            return enableBoard({...state});
        case actionTypes.STORE_MATCH_CARD:
            return pushCard({...state}, action.data);
        default:
            return state;
    };
};

export default reducer;
