<template>
  <div class="page-top animated fadeInDown">
    <nav>
      <li>
        <router-link :class="{'current': isHome}" to="/page/1">Home</router-link>
      </li>
      <div class="information">
        <li v-if="!currentUser">
          <a @click="showLoginModal" href="javascript:void(0)">登录</a>
        </li>
        <li v-if="currentUser">
          <router-link :class="{'current': isAddPost}" to="/add">新文章</router-link>
        </li>
        <li v-if="currentUser">
          <a>{{ currentUser }}</a>
        </li>
      </div>
    </nav>
  </div>
  <login-modal
    :is-visible="isLoginModalVisible"
    @close-login-modal="handleCloseLoginModal"
  />
</template>

<style scoped>
.page-top {
  width: 60%;
  position: fixed;
  right: 0;
  z-index: 3;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.page-top nav {
  list-style: none;
  padding: 18px 30px;
  font-size: 12px;
}
.page-top nav li {
  position: relative;
  display: initial;
  padding-right: 20px;
}
.page-top nav a {
  color: #5A5A5A;
}
.page-top nav a:hover {
  color: #4786D6;
}
.page-top nav a.current {
  color: #5A5A5A;
  padding-bottom: 18px;
  border-bottom: 1px solid #5A5A5A;
}
.page-top .information {
  float: right;
  /* padding-top: 12px;
  padding-right: 20px; */
}
.page-top .information .avatar {
  float: right;
}
.page-top .information .avatar img {
  width: 32px;
  height: 32px;
  border-radius: 300px;
}
.page-top .information .back_btn {
  float: left;
  padding-top: 5px;
  margin-right: -10px;
}
.page-top .information .back_btn li {
  display: initial;
  padding-right: 40px;
}

@media screen and (max-width: 960px) {
  .page-top {
    width: 100%;
  }
}
</style>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  inject,
} from 'vue';
import { useRoute } from 'vue-router';
import LoginModal from './LoginModal.vue';

export default defineComponent({
  name: 'NavigationBar',
  components: {
    LoginModal,
  },
  setup() {
    const route = useRoute();

    const isHome = computed(() => route.name === 'Home');
    const isAddPost = computed(() => route.name === 'Add Post');

    const isLoginModalVisible = ref(false);
    const showLoginModal = () => {
      isLoginModalVisible.value = true;
    };
    const handleCloseLoginModal = () => {
      isLoginModalVisible.value = false;
    };

    const currentUser = inject('currentUser');

    return {
      isHome,
      isAddPost,
      isLoginModalVisible,
      showLoginModal,
      handleCloseLoginModal,
      currentUser,
    };
  },
});
</script>
