<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view><!-- 原本的Login换成了router-view 这就是路由视图渲染的目标元素-->
  </div>
</template>

<script>
// import * as API from './api/index'
export default {
  name: 'app'
}
</script>

<style>
</style>
