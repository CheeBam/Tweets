import tweetApi from '../../../api/tweet';
import * as types from '../../mutation-types';

export const getTweets = async ({ dispatch, commit }, params) => {
    try {
        const json = await tweetApi.getTweets(params);
        commit(types.TWEETS, json);
    } catch (e) {
        console.error(e);
    }
};

export default {
    getTweets,
};
