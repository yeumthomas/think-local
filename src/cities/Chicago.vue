<template>
  <div id="chicago">
    <Navbar/>
    <div class="title">
        <h1>Support Chicago</h1>
    </div>

    <div class="busi-list">
      <div class="busi">HAHA</div>

      <div class="busi">HAHA</div>
      
      <div class="busi">HAHA</div>
      
      <div class="busi">HAHA</div>

      <div class="busi">HAHA</div>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
export default {
  name: 'Chicago',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
#chicago {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  width: 300px;
  margin: auto;
  margin-top: 90px;
}

.busi-list {
  max-width: 700px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.busi {
  background-color: white;
  max-width: 300px;
  min-width: 300px;
  max-height: 150px;
  min-height: 150px;
  border-radius: 10px 10px 10px 10px;
  margin: 30px auto 15px auto;
  display: flex;
  flex: 300px 300px;
}
</style>
