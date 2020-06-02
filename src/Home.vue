<template>
  <div id="home">
    <Navbar />
    <Title />
    <Item />
  </div>
</template>

<script scoped>
import Title from "./components/Title.vue"
import Navbar from "./components/Navbar.vue"
import Item from "./components/Item.vue"
export default {
  name: 'Home',
  components: {
    Title,
    Navbar,
    Item
  }
}
</script>


<style>
body {
  direction: ltr;
  margin: 0;
  padding: 0;
  background-color:#c3e2f0;
  /* make it look decent enough #C8E7F5*/
  color: #cdcdcd;
  overflow-x: hidden;
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

@media screen and (max-width: 399px) {
  body {
    overflow: visible;
    overflow-x: hidden;
  }
}

#item {
  margin: 0;
  padding: 0;
}
</style>
