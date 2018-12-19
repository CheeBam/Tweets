import Tweet from './Tweet';

class TweetFactory {
    static create(data) {
        return new Tweet(data);
    }
}

export default TweetFactory;
