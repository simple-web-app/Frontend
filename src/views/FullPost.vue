<template>
  <post-item v-if="!loading && data" :post="data" :isFullPost="true"></post-item>
  <comment-list v-if="!loading && data" :article-id="data.id"></comment-list>
</template>

<script lang="ts">
import PostItem from '@/components/PostItem.vue';
import CommentList from '@/components/CommentList.vue';
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useApi } from '../modules/api';

export default defineComponent({
  components: { PostItem, CommentList },
  name: 'FullPost',
  setup() {
    const route = useRoute();
    const {
      loading, data, error, get,
    } = useApi(`/article/${route.params.id}`);

    onMounted(get);

    return {
      loading, data, error, get,
    };
  },

});
</script>
