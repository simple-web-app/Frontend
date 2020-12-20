<template>
  <ul v-if="data" class="comments">
    <li v-for="comment in data.contents" :key="comment">
      <span>{{ comment.author }}</span>
      :
      <span>{{ comment.content }}</span>
      @
      <span>{{ comment.date }}</span>
    </li>
  </ul>
</template>

<style>

</style>

<script>
import { onMounted, defineComponent } from 'vue';
import { useApi } from '../modules/api';

export default defineComponent({
  name: 'CommentList',
  props: [
    'articleId',
  ],
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
