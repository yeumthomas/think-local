<template>
  <div id="footer">
    <p> Why did I build this website? Check out why <a href="/history-lesson">here</a>.</p>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3e2f0;
}

#footer {
    padding: 20px 0px;
    max-width: 80%;
    margin: auto;
    
}

#footer a {
    text-decoration: none;
    color: #df7474;
}
</style>
