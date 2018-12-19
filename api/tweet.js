import { makeTweets } from '../utils/helpers';

export default {
    getTweets(params) {
        // parameters for backend
        console.log(params);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const data = makeTweets();
                    resolve(data);
                } catch (e) {
                    reject(e);
                }
            }, 200);
        });
    },
};
