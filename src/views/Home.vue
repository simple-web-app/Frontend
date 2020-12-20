<template>
  <div v-if="!loading && data">
    <post-item
      v-for="post in data.Articles"
      :key="post.id"
      :post="post"
      :isFullPost="false"></post-item>
    <div class="pagination">
      <ul class="clearfix">
        <li v-if="prevPage" class="pre pagbuttons">
          <router-link class="btn" role="navigation" :to="'/page/' + prevPage">上一页</router-link>
        </li>
        <li v-if="nextPage" class="next pagbuttons">
          <router-link class="btn" role="navigation" :to="'/page/' + nextPage">下一页</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  margin: 30px;
  padding: 0px 0 56px 0;
  border-bottom: 1px solid #f2f2f2;
}
.pagination ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 13px;
}
.pagination ul li {
  margin: 0 2px 0 2px;
  display: inline;
  line-height: 1;
}
.pagination ul li a {
  text-decoration: none;
}
.pagination .pre {
  float: left;
}
.pagination .next {
  float: right;
}
</style>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import PostItem from '@/components/PostItem.vue'; // @ is an alias to /src
import { useApi } from '../modules/api';

export default defineComponent({
  name: 'Home',
  components: {
    PostItem,
  },
  setup() {
    const route = useRoute();
    const currentPage = parseInt(route.params.page as string, 10);

    const {
      loading, data, error, get,
    } = useApi(`/article?page=${currentPage}`);

    onMounted(get);

    const prevPage = currentPage === 1 ? null : currentPage - 1;
    const nextPage = computed(() => {
      if (data.value?.PageCount) {
        const totalPage = Math.floor(data.value.PageCount / 10);
        if (totalPage === currentPage - 1) {
          return null;
        }
        return currentPage + 1;
      }
      return null;
    });

    return {
      loading, data, error, get, prevPage, nextPage,
    };
  },

});
</script>
