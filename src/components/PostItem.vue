<template>
  <div class="post animated fadeInDown">
    <div class="post-title">
      <h3>
        <router-link v-if="!isFullPost" :to="'/posts/' + post.id">{{ post.name }}</router-link>
        <span v-else>{{ post.name }}</span>
      </h3>
    </div>
    <div class="post-content">
      <vue-markdown-it :source="postContent"/>
    </div>
    <div class="post-footer">
      <div class="meta">
        <div class="info">
          <icon-calendar class="icon" />
          <span class="date">{{ post.date }}</span>
          <icon-comment class="icon" />
          <router-link :to="'/posts/' + post.id">Comments ({{ post.commentNum }})</router-link>
          <span v-if="post.tags">
            <icon-tag class="icon" />
            <a v-for="tag in post.tags" :key="tag.name">{{ tag.name }}</a>
          </span>
          <!-- <a @click="promptDeleteArticle">删除文章</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import VueMarkdownIt from 'vue3-markdown-it';
import IconCalendar from './icons/IconCalendar.vue';
import IconComment from './icons/IconComment.vue';
import IconTag from './icons/IconTag.vue';

export default defineComponent({
  name: 'Post',
  props: [
    'post',
    'isFullPost',
  ],
  components: {
    VueMarkdownIt,
    IconCalendar,
    IconComment,
    IconTag,
  },
  setup(props) {
    const postContent = computed(() => {
      if (props.isFullPost) {
        return props.post.content;
      }
      return props.post.content.split('\n')[0];
    });

    return {
      postContent,
    };
  },
});
</script>
