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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  background-color: #FFF;
  margin: 30px;
}
.post .post-title {
  margin-bottom: 1em;
}
.post .post-title h1 {
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 5px;
  line-height: 1;
}
.post .post-title h2 {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  color: #5f5f5f;
}
.post .post-title h3 {
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
  font-weight: 600;
  color: #464646;
  font-size: 22px;
  margin: 0;
}
.post .post-title a {
  text-decoration: none;
  letter-spacing: 1px;
  color: #5f5f5f;
}
.post .post-title a:hover {
  text-decoration: underline;
}
.post .post-content >>> a {
  text-decoration: none;
  letter-spacing: 1px;
  color: #4786D6;
}
.post .post-content >>> a:hover {
  color: #2F69B3;
}
.post .post-content >>> h3 {
  color: #5F5F5F;
  font-size: 22px;
  font-weight: 600;
}
.post .post-content >>> h4 {
  color: #5F5F5F;
  font-size: 16px;
}
.post .post-content >>> img {
  max-width: 100%;
}
.post .post-footer {
  padding: 0 0 30px 0;
  border-bottom: 1px solid #f2f2f2;
}
.post .post-footer .meta {
  max-width: 100%;
  height: 25px;
  color: #bbbbbb;
  line-height: 16px;
}
.post .post-footer .meta .info {
  float: left;
  font-size: 12px;
}
.post .post-footer .meta .info .date {
  margin-right: 10px;
}
.post .post-footer .meta a {
  text-decoration: none;
  color: #bbbbbb;
  padding-right: 10px;
}
.post .post-footer .meta a:hover {
  color: #4786D6;
}
.post .post-footer .meta .icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 6px;
  vertical-align: middle;
}
.post .post-footer .tags {
  padding-bottom: 15px;
  font-size: 13px;
}
.post .post-footer .tags ul {
  list-style-type: none;
  display: inline;
  margin: 0;
  padding: 0;
}
.post .post-footer .tags ul li {
  list-style-type: none;
  margin: 0;
  padding-right: 5px;
  display: inline;
}
.post .post-footer .tags a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.44);
  font-weight: 400;
}
.post .post-footer .tags a:hover {
  text-decoration: none;
}

@media screen and (max-width: 960px) {
  .post-title h3 {
    line-height: 1.6;
  }
}
</style>

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
