import * as constants from './constants';
import TweetFactory from '../classes/TweetFactory';

const getRandomNumber = () => Math.floor(Math.random() * 3000) + 1;

export const makeTweets = () => {
    const factory = new TweetFactory();
    const data = [];
    for (let i = 0; i < constants.TWEETS_AMOUNT; i += 1) {
        data.push(factory.constructor.create({ followers: getRandomNumber(), index: i + 1 }));
    }
    return data;
};

export const sortByASC = (a, b) => a.user.followers_count - b.user.followers_count;
export const sortByDESC = (a, b) => b.user.followers_count - a.user.followers_count;
