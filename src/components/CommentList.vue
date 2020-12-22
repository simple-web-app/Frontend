<template>
  <h3 class="comments-title">comments</h3>
  <div v-if="data" class="comments">
    <div class="comment" v-for="comment in data.contents" :key="comment">
      <icon-user-circle class="comment-avatar"/>
      <div class="comment-meta">
        <span>{{ comment.author }}</span>
      </div>
      <div class="speech-bubble">{{ comment.content }}</div>
      <div class="comment-date">{{ comment.date }}</div>
    </div>
    <div v-if="!data.contents">快来抢沙发。</div>
  </div>
  <h3 class="comments-title">Leave your comment</h3>
  <add-comment :article-id="articleId" @refresh-comment-list="get"/>
</template>

<style>
.comments-title {
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
  font-weight: 600;
  color: #464646;
  font-size: 22px;
  margin: 1em 0;
  padding: 0 30px;
}

.comments {
  padding: 0 30px;
}

.comment {
  position: relative;
  line-height: 1.9em;
  font-weight: 400;
  font-size: 14px;
  margin: 1em 0;
  min-height: 88px;
}

.comment-avatar {
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: 48px;
}

.comment-meta {
  position: absolute;
  left: 0;
  top: 48px;
  width: 64px;
  text-align: center;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.comment-date {
  text-align: right;
  padding-left: 80px;
  font-size: 12px;
}

.speech-bubble {
  position: relative;
  background: #eee;
  color: rgba(0, 0, 0, .5);
  /* border: 2px solid #6a6a6a; */
  border-radius: .4em;
  padding: 1em;
  margin-left: 80px;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 24px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-right-color: #eee;
  border-left: 0;
  margin-top: -8px;
  margin-left: -8px;
}
</style>

<script>
import { onMounted, defineComponent } from 'vue';
import { useApi } from '../modules/api';
import IconUserCircle from './icons/IconUserCircle.vue';
import AddComment from './AddComment.vue';

export default defineComponent({
  name: 'CommentList',
  props: [
    'articleId',
  ],
  components: {
    IconUserCircle,
    AddComment,
  },
  setup(props) {
    const {
      loading, data, error, get,
    } = useApi(`/article/${props.articleId}/comments?page=1`);

    onMounted(get);

    return {
      loading, data, error, get, props,
    };
  },
});
</script>
