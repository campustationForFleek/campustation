<template>
  <div class="header">
    <h1>{{ site_name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      site_name: 'CampuStation'
    }
  }
}
</script>
