<template>
  <div id="minneapolis">
    <Navbar/>
    <div class="title">
        <p class="title-text">Support Minneapolis</p>
    </div>

    <div class="busi-list">
      <div class="busi">
        <div class="a-auto-image">
          <p class="name">A Auto Mall</p>
          <p class="link-holder"><a class="link" href="https://www.gofundme.com/f/demolished-small-business-in-minneapolis-riot?utm_medium=referral&utm_source=bringmethenews.com&utm_campaign=comms_fn36+demolished-small-business-in-minneapolis-riot" target="_blank">GoFundMe</a></p>
        </div>

      </div>

      <div class="busi">
        <div class="a-auto-image">
          <p class="name">A Auto Mall</p>
          <p class="link-holder"><a class="link" href="" target="_blank">GoFundMe</a></p>
        </div>

      </div>


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
  name: 'Minneapolis',
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

.title-text {
  width: 80vw;
  margin: auto;
  margin-top: 85px;
  font-size: 9vw;
  font-family: Georgia, Cambria, Times New Roman, Times, serif;
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
  max-height: 175px;
  min-height: 175px;
  border-radius: 10px 10px 10px 10px;
  margin: 30px auto 15px auto;
  display: flex;
  flex: 300px 300px;
}

.busi:hover {
  box-shadow: 0px 0px 10px #9bb3be;
}

.link-holder {
  margin: 0px 2px 0px -190px;
  border-style: 2px solid #e24e4e;
  border-radius: 5px;
}
.link {
  text-decoration: none;
  color: #e24e4e;
}
.name {
  display: inline-block;
  margin: 119px 2px 0px -148px;
  font-weight: bold;
  font-size: 22px;
}

.a-auto-image {
  background-image: url(../assets/MN/a-auto.jpeg);
  background-size: cover;
  max-width: 300px;
  min-width: 300px;
  margin: 0px 0px 60px 0px;
  border-radius: 10px 10px 0 0;
}

</style>
