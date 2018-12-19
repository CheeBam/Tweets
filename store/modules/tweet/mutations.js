import * as types from '../../mutation-types';

export default {
    [types.TWEETS](state, payload) {
        state.tweets = payload;
    },
};
