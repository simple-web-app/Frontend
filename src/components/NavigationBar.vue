<template>
  <div class="page-top animated fadeInDown">
    <nav>
      <li>
        <router-link :class="{'current': isHome}" to="/page/1">Home</router-link>
      </li>
    </nav>
    <div class="information">
      <div class="avatar">
        <img src="https://secure.gravatar.com/avatar/54c2794be778d49d0396e736d88ac6d0?s=46&d=identicon">
      </div>
    </div>
  </div>
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
  float: left;
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
  padding-top: 12px;
  padding-right: 20px;
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
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NavigationBar',
  setup(props) {
    const route = useRoute();

    const isHome = computed(() => route.name === 'Home');

    return {
      isHome,
    };
  },
});
</script>
