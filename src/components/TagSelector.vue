<template>
  <select v-if="data" v-model="tags" multiple>
    <option v-for="tag in data.Contents" :key="tag.name" :value="tag.name">
      {{ tag.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { useApi } from '@/modules/api';
import {
  defineComponent,
  onMounted,
  ref,
  watch,
} from 'vue';

export default defineComponent({
  name: 'TagSelector',
  setup(_, context) {
    const {
      loading, data, error, get,
    } = useApi('/tag');

    onMounted(get);

    const tags = ref([]);
    watch(tags, (tagsValue) => {
      context.emit('updateTags', tagsValue);
    });

    return {
      data, tags,
    };
  },
});
</script>
