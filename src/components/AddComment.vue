<template>
  <div class="container">
    <textarea placeholder="Leave your comment here." v-model="comment" autocomplete="off"/>
    <button v-if="currentUser" @click="addComment">Add comment</button>
    <button v-else disabled>Login to add comment</button>
  </div>
</template>

<style scoped>
.container {
  padding: 0 30px 30px 30px;
}
textarea {
  display: block;
  width: 100%;
  background-color: transparent;
  border: 4px solid #eee;
  padding: 1em;
  height: 160px;
  margin-bottom: 1em;
  color: rgba(0, 0, 0, .75);
}
textarea:focus {
  border-color: #6a7989;
  outline: none;
  border-radius: 0;
}
button {
  box-sizing: content-box;
  display: block;
  background-color: #6a7989;
  color: #fff;
  border: 4px solid #6a7989;
  border-radius: 0;
  text-transform: uppercase;
  padding: 1em 2em;
  font-weight: bold;
  transition: .3s;
  cursor: pointer;
}
button:not(:disabled):hover {
  color: #6a7989;
  background-color: transparent;
}
button:focus {
  outline: none;
}
button:disabled {
  opacity: .5;
  cursor: inherit;
}
</style>

<script>
import { defineComponent, inject, ref } from 'vue';
import { useApi } from '../modules/api';

export default defineComponent({
  name: 'AddComment',
  props: [
    'articleId',
  ],
  setup(props, context) {
    const {
      loading, data, error, post,
    } = useApi(`/article/${props.articleId}/comments`);

    const currentUser = inject('currentUser');

    const comment = ref('');
    const addComment = async () => {
      if (comment.value.trim() === '') {
        return;
      }
      await post({
        content: comment.value,
      });
      if (data.value) {
        comment.value = '';
        context.emit('refreshCommentList');
      }
    };

    return {
      loading, data, error, post, currentUser, comment, addComment,
    };
  },
});
</script>
