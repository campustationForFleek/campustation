<template>
  <div>
    <h1>{{ msg }}</h1>
    <span>Html とは</span>
    <span>Webページの見た目を作る言語です。</span><br>
    <span>基本的にWebページの見た目はHtmlとcssで構成されています。</span>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/">Go to index</router-link>
      </li>
      <li>
        <router-link to="/top/">Go to top</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HtmlIndex',
  data () {
    return {
      msg: 'HTML大学へようこそ！'
    }
  }
}
</script>
