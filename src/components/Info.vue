<template>
  <div class="info">
    <h1>{{ msg }}</h1>
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
  name: 'Info',
  data () {
    return {
      msg: 'Info'
    }
  }
}
</script>
