<template>
  <div class="entry">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/">Go to index</router-link>
      </li>
      <li>
        <router-link to="/info/">Go to info</router-link>
      </li>
      <li>
        <router-link to="/top/">Go to top</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EntryForm',
  data () {
    return {
      msg: 'EntryForm'
    }
  }
}
</script>
