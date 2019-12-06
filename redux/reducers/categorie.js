import * as types from '../actions/actionTypes';

const initialState = {
    keyword: [],
    deletedNews: [],
};

function saveUserChoice(state, payload) {
    let tab = [];

    if(state.keyword.length > 0)
        tab = [...state.keyword, payload]
    else
        tab = [payload]

    return {
        ...state,
        keyword: tab
    };
}

function getUserCategory(state, payload) {
    return {
        ...state,
    };
}

function storeDeletedNews(state, payload) {
    return {
        ...state,
        deletedNews: payload
    };
}

export default function(state = initialState, action) {
    switch (action.type) {
        case types.SAVE_USER_CHOICE:
            return saveUserChoice(state, action.payload);

        case types.GET_USER_CATEGORY:
            return getUserCategory(state, action.payload);

        case types.STORE_DELETED_NEWS:
            return storeDeletedNews(state, action.payload);

        default:
            return state;
    }
}