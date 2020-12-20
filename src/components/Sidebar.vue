<template>
  <div class="sidebar animated fadeInDown">
    <div class="logo-title">
      <div class="title">
        <img src="../assets/logo.png" style="width: 127px">
        <h3 title="">
          <div class="description">
            <p>简单博客</p>
          </div>
        </h3>
      </div>
    </div>
    <ul class="social-links">
      <li>
        <a href="https://github.com/">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
    </ul>
    <div class="footer">
      <a href="/" target="_blank">
        <span>Theme by </span>
      </a>
      <a href="https://www.caicai.me">Caicai</a>
      <span> &amp; </span>
      <a href="https://github.com/Ben02/hexo-theme-Anatole">Ben</a>
      <div class="by_farbox">
        <a href="https://github.com/simple-web-app" target="_blank">
          Proudly published with SimpleWebApp&#65281;
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 40%;
  -webkit-background-size: cover;
  background-size: cover;
  background-color: #fff;
  height: 100%;
  transition: 0.8s;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 4;
  border-right: 1px solid #f2f2f2;
}
.sidebar .logo-title {
  text-align: center;
  padding-top: 240px;
}
.sidebar .logo-title .description {
  font-size: 14px;
  color: #565654;
}
.sidebar .logo-title .logo {
  margin: 0 auto;
}
.sidebar .logo-title .title h3 {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1;
  margin: 0;
}
.sidebar .logo-title .title a {
  text-decoration: none;
  color: #464646;
  font-size: 2rem;
  font-weight: bold;
}
.sidebar .social-links {
  list-style: none;
  padding: 0;
  font-size: 14px;
  text-align: center;
}
.sidebar .social-links i {
  margin-right: 3px;
}
.sidebar .social-links li {
  display: inline;
  padding: 0 4px;
  line-height: 0;
}
.sidebar .social-links a {
  color: #565654;
}
.sidebar .social-links a:hover {
  color: #4786D6;
}

.footer {
  clear: both;
  text-align: center;
  font-size: 10px;
  margin: 0 auto;
  bottom: 0;
  position: absolute;
  width: 100%;
  padding-bottom: 20px;
  background: #fff;
}
.footer a {
  color: #A6A6A6;
}
.footer a:hover {
  color: #4786D6;
}

@media screen and (max-width: 960px) {
  .sidebar {
    width: 100%;
    position: absolute;
    border-right: none;
    z-index: 1;
  }
  .sidebar .logo-title {
    padding-top: 120px;
  }
  .sidebar .logo-title .title img {
    width: 100px;
  }
  .sidebar .logo-title .title h3 {
    font-size: 20px;
  }

  .footer {
    display: none;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  components: {

  },
});
</script>
