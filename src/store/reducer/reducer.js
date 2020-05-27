import * as actionTypes from '../actions/types';
import cards from '../utils/cardsData';

const initialState = {
    cards
};

// const randomCardsOrder = () => {
//     let cards
//     return getCards.cards.map();
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARD:
            return state;
        default:
            return state;
    };
};

export default reducer;