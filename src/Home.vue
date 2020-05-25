<template>
  <div id="home">
    <Navbar />
    <Title />
  </div>
</template>

<script scoped>
import Title from "./components/Title.vue"
import Navbar from "./components/Navbar.vue"

export default {
  name: 'Home',
  components: {
    Title,
    Navbar,
  } 
}
</script>


<style>
body {
  direction: ltr;
  margin: 0;
  padding: 0;
  background-color: #C8E7F5;
  /* make it look decent enough */
  color: #cdcdcd;
  overflow: hidden;
  position: relative;
  height: 100%;
}

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.circle-div {
  text-align:center;
  position: absolute;
  z-index: -1;
}
</style>
