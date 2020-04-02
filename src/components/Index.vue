<template>
  <div class="index">
    <h1>{{ site_name }}</h1>
    <span>{{ site_name }}へようこそ</span><br>
    <span></span><br>
    <h2>学べる言語！</h2>
    <ul class="sample">
      <li>
        <router-link to="/html/"><img src="/static/img/common/img_html.png"><br>Go to html</router-link>
      </li>
      <li>
        <router-link to="/css/"><img src="/static/img/common/img_css.png"><br>Go to css</router-link>
      </li>
      <li>
        <router-link to="/javascript/"><img src="/static/img/common/img_js.png"><br>Go to javascript</router-link>
      </li>
    </ul>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/top/">Go to top</router-link>
      </li>
      <li>
        <router-link to="/info/">Go to info</router-link>
      </li>
      <li>
        <router-link to="/entryform/">Go to entryform</router-link>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index',
      site_name: 'CampuStation'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/css/index.css";
</style>
