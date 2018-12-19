<template>
    <div class="tweet">
        <a href="#" class="tweet-link">
            {{ item.user.name }}
        </a>

        <button class="tweet-follow" type="button">Read</button>

        <p class="tweet-text">
            {{ item.text }}
        </p>

        <span class="tweet-time">{{ item.created_at }}</span>

        <span class="tweet-user-followers">Followers: {{ item.user.followers_count }}</span>
    </div>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};

</script>
