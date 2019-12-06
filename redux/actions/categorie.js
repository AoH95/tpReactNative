import * as types from './actionTypes';

export const saveUserChoice = (payload) => {
    return {
        type: types.SAVE_USER_CHOICE,
        payload: payload
    };
};

export const getUserCategory = (payload) => {
    return {
        type: types.GET_USER_CATEGORY,
        payload: payload
    };
};

export const storeDeletedNews = (payload) => {
    return {
        type: types.STORE_DELETED_NEWS,
        payload: payload
    };
};
