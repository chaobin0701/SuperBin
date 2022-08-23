<template>
  <div id="app">
    <layout></layout>
    <!-- <show/> -->
  </div>
</template>

<script>

import layout from './components/layout.vue'

import userInfo from './assets/json/userInfo.json'
import mobilePage from './assets/json/mobilePage.json'
import PCPage from './assets/json/PCPage.json'
import other from './assets/json/other.json'

export default {
  name: "App",
  components: { layout},
  provide() {
    return {
      userInfo, mobilePage, PCPage, other
    }
  }

};
</script>

<style lang="less">
@media screen and (max-width: 960px) {
  .bg {
    display: none;
  }
}

@media screen and (min-width: 960px) {}

body {
  padding: 0;
  margin: 0;
}

body,
html,
#app {}
</style>
