<template>
  <div class="top">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/">Go to index</router-link>
      </li>
      <li>
        <router-link to="/info/">Go to info</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Top'
    }
  }
}
</script>
