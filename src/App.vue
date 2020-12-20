<template>
  <sidebar></sidebar>
  <div class="main">
    <navigation-bar></navigation-bar>
    <div class="autopagerize_page_element">
      <div class="content">
        <router-view :key="route.fullPath"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: auto;
  float: right;
  width: 60%;
  margin-top: 60px;
}

@media screen and (max-width: 960px) {
  .content {
    margin-top: 420px;
    width: 100%;
    z-index: 2;
    position: absolute;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '@/components/Sidebar.vue'; // @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    Sidebar,
    NavigationBar,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>
