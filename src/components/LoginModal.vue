<template>
  <transition name="login">
    <div v-if="isVisible" :class="{'loading': loading}">
      <div class="login-modal">
        <form>
          <div class="form-control">
            <input type="text" placeholder=" " v-model="username">
            <label class="form-label">
              <span>Username</span>
            </label>
          </div>
          <div class="form-control">
            <input type="password" placeholder=" " v-model="password">
            <label class="form-label">
              <span>Password</span>
            </label>
          </div>
          <div class="form-control">
            <div class="login-button" @click.prevent.stop="login">
              <button class="button-label">Login</button>
            </div>
          </div>
        </form>
        <div class="close-button" @click="closeLoginModal">
          <icon-close class="icon"/>
        </div>
        <div v-if="error" class="login-message">用户名或密码不正确</div>
      </div>
      <div class="login-modal-dimmer" />
    </div>
  </transition>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}
.login-modal-dimmer {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .25);
  backdrop-filter: blur(5px);
  z-index: 999;
  transition: .3s;
}
.login-modal {
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  width: 560px;
  background-color: #fdfdfd;

  border-radius: 24px;
  padding: 48px 24px;

  text-align: center;

  transition: .3s;

  z-index: 1000;
}
.login-modal .close-button {
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
}
.form-control {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 400px;
  width: calc(100% - 2em);
  vertical-align: top;
  overflow: hidden;
}
.form-control input {
  position: relative;
  display: block;
  float: right;
  border: none;
  border-radius: 0;
  color: #aaa;
  font-weight: 400;
  font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-appearance: none; /* for box shadows to show on iOS */
  width: 100%;
  background: transparent;
  padding: 0.5em;
  margin-bottom: 2em;
  z-index: 100;
  opacity: 0;
}
.form-control input:focus {
  outline: none;
}
.form-label {
  display: inline-block;
  color: #6a7989;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  position: absolute;
  text-align: left;
  padding: 0.5em 0;
  pointer-events: none;
  font-size: 1em;
}
.form-label::before,
.form-label::after {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
.form-label::before {
  height: 100%;
  background: #fff;
  top: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
.form-label::after {
  height: 2px;
  background: #6a7989;
  top: 100%;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.form-label span {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transition: -webkit-transform 0.3s, color 0.3s;
  transition: transform 0.3s, color 0.3s;
}
.form-control input:focus,
input:not(:placeholder-shown) {
  opacity: 1;
  -webkit-transition: opacity 0s 0.3s;
  transition: opacity 0s 0.3s;
}
.form-control input:focus + .form-label::before,
input:not(:placeholder-shown) + .form-label::before {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.form-control input:focus + .form-label::after,
input:not(:placeholder-shown) + .form-label::after {
  opacity: 0;
}
.form-control input:focus + .form-label span,
input:not(:placeholder-shown) + .form-label span {
  color: #cbc4c6;
  -webkit-transform: translate3d(0, 2.1em, 0) scale3d(0.65, 0.65, 1);
  transform: translate3d(0, 2.1em, 0) scale3d(0.65, 0.65, 1);
}
.form-control button {
  padding: 0;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, border 0.3s, width 0.3s;
}
.form-control button:hover,
.loading .form-control button {
  background-color: #fefefe;
  color: #6a7989;
}
.form-control button:focus {
  outline: none;
}

.login-enter-active,
.login-leave-active {
  transition: opacity 0.5s ease;
}

.login-enter-from .login-modal,
.login-leave-to .login-modal {
  opacity: 0;
  margin-top: -160px;
}

.login-enter-from .login-modal-dimmer,
.login-leave-to .login-modal-dimmer {
  background-color: transparent;
  backdrop-filter: blur(0);
}

.login-button {
  position: relative;
  height: calc(3em + 4px);
}
.login-button > * {
  box-sizing: content-box;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(100% - 4px);
  height: 3em;
  line-height: 3em;
  background-color: #6a7989;
  color: #fefefe;
  border: 2px solid #6a7989;
  border-radius: 24px;
}

.loading .login-button {
  opacity: .5;
}
</style>

<script lang="ts">
import {
  defineComponent,
  inject,
  ref,
  watch,
} from 'vue';
import IconClose from './icons/IconClose.vue';
import { useApi } from '../modules/api';

export default defineComponent({
  name: 'LoginModal',
  props: [
    'isVisible',
  ],
  components: {
    IconClose,
  },
  setup(_, context) {
    const {
      loading, data, error, getWithQueries,
    } = useApi('/user/signin');

    const username = ref('');
    const password = ref('');

    const closeLoginModal = () => {
      context.emit('closeLoginModal');
    };
    const login = () => {
      getWithQueries(new URLSearchParams({
        username: username.value,
        password: password.value,
      }));
    };

    const updateUser = inject('updateUser') as (username: string, token: string) => {};

    watch(data, (res) => {
      if (res && res.token) {
        updateUser(username.value, res.token);
        closeLoginModal();
      }
    });

    return {
      closeLoginModal,
      login,
      username,
      password,
      loading,
      error,
      data,
    };
  },
});
</script>
