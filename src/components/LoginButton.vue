<template>
  <div class="login-button">
    <button class="button-label" @click.prevent="login">Login</button>
  </div>
</template>

<style scoped>
.login-button {
  position: relative;
  height: calc(3em + 4px);
}
.login-button > div, .login-button > button {
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
.login-button .button-label {
  padding: 0;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, border 0.3s, width 0.3s, opacity 0.3s;
}
.login-button .button-label:hover {
  background-color: #fefefe;
  color: #6a7989;
}
.login-button .button-label:focus {
  outline: none;
}
.login-button .button-progress {
  display: none;
}
.login-button .button-message {
  display: none;
}

.loading .login-button {
  opacity: .8;
}

</style>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'LoginButton',
  props: [
    'state',
    'message',
  ],
  setup(_, context) {
    // do nothing
    const login = () => context.emit('login');

    return {
      login,
    };
  },
});
</script>
