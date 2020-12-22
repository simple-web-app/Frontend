<template>
  <div class="post animated fadeInDown">
    <div class="post-title">
      <input type="text" placeholder="Title" v-model="name">
    </div>
    <tag-selector @updateTags="updateTags"/>
    <div class="post-content">
      <textarea placeholder="Start typing..." spellcheck="false" v-model="content"/>
    </div>
    <button @click="publish" :disabled="loading">Publish</button>
  </div>
</template>

<style scoped>
.post-title input {
  display: block;
  width: 100%;
  letter-spacing: 1px;
  line-height: 1;
  font-weight: 600;
  color: #464646;
  font-size: 22px;
  margin: 0;
  border: none;
}
.post-title input::placeholder,
textarea::placeholder {
  opacity: .4;
}
.post-title input:focus {
  outline: none;
}
textarea {
  display: block;
  width: 100%;
  min-height: 50vh;
  color: rgba(0, 0, 0, .5);
  border: none;
  padding: 0;
  line-height: 1.9em;
  font-weight: 400;
  font-size: 14px;
  margin: 1em 0;
}
textarea:focus {
  outline: none;
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '../modules/api';
import TagSelector from '../components/TagSelector.vue';

export default defineComponent({
  name: 'AddPost',
  components: {
    TagSelector,
  },
  setup() {
    const {
      loading, data, error, post,
    } = useApi('/article');

    const router = useRouter();

    const name = ref('');
    const content = ref('');
    const tags = ref([] as string[]);
    const publish = async () => {
      await post({
        name: name.value,
        content: content.value,
        tags: tags.value.map((tag) => ({
          name: tag,
        })),
      });
      if (data.value) {
        router.push('/page/1');
      }
    };

    const updateTags = (newTags: string[]) => {
      tags.value = newTags;
    };

    return {
      loading, data, error, post, name, content, publish, updateTags,
    };
  },

});
</script>
