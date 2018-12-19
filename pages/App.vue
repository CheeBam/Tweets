<template>
    <div id="app" class="container">
        <div class="settings-panel">
            <button class="settings-panel-button" type="button" @click="sort">SORT by {{ sortBy }}</button>
        </div>
        <div class="tweets-block">
            <tweet v-for="(item, key) in tweets" :key="key" :item="item"></tweet>
        </div>
    </div>
</template>

<script>
    import Tweet from '../components/Tweet.vue';
    import * as types from '../store/mutation-types';
    import { sortByASC, sortByDESC } from '../utils/helpers';

    export default {
        components: {
            tweet: Tweet,
        },
        data() {
            return {
                sortBy: 'asc',
            };
        },
        computed: {
            tweets: {
                get() {
                    return this.$store.getters.tweets;
                },
                set(value) {
                    this.$store.commit(types.TWEETS, value);
                },
            },
        },
        async mounted() {
            await this.$store.dispatch('getTweets',
                // example object
                {
                    from: 0,
                    count: 10,
                    sort: this.sortBy,
                },
            );
        },
        methods: {
            async sort() {
                const temp = JSON.parse(JSON.stringify(this.tweets));
                this.tweets = this.sortBy === 'asc' ? temp.sort(sortByASC) : temp.sort(sortByDESC);
                this.sortBy = this.sortBy === 'asc' ? 'desc' : 'asc';
            },
        },
    };
</script>
