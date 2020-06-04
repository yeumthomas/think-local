<template>
  <div id="item">
    <div class="city-list">
      <h1 style="width: 100%; margin-left: auto; margin-right: auto;">Select a City to Support</h1>
      <div class='city' id ="chicago">
        <h1><a href='/chicago'> Chicago, IL</a></h1>
      </div>
      <div class='city' id="minneapolis">
        <h1><a href='/minneapolis'> Minneapolis, MN</a></h1>
      </div>
      <div class='city' id="madison">
        <h1><a href='/madison'> Madison, WI</a></h1>
      </div>
      <div class='city' id="philadelphia">
        <h1><a href='/philadelphia'> Philadelphia, PA</a></h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',

  // data () {
  //   return {
  //     chicpic: require('@/assets/chicago.jpeg'),
  //     minnpic: require('@/assets/Minneapolis.jpeg'),
  //     madpic: require('@/assets/madison.jpeg'),

  //     cities: {
  //       city1 : {
  //         name: 'Chicago, IL',
  //         link: 'chicago',
  //         pic: '../chicago.jpeg'
  //       },
  //       city2: {
  //         name: 'Minneapolis, MN',
  //         link: 'minneapolis',
  //         pic: '../Minneapolis.jpeg'
  //       },
  //       city3: {
  //         name: 'Madison, WI',
  //         link: 'madison',
  //         pic: '../madison.jpeg'
  //       }
  //     }
  //   }
  // }

}
</script>

<style scoped>
#item {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 10vh;
  background-color: #90b1d1;
}

.city-list {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

#chicago {
  background-image: url(../assets/chicago.jpeg);
  background-size: cover;
}

#minneapolis {
  background-image: url(../assets/Minneapolis.jpeg);
  background-size: cover;
}

#madison {
  background-image: url(../assets/madison.jpeg);
  background-size: cover;
}

#philadelphia {
  background-image: url(../assets/philly.jpg);
  background-size: cover;
}

.city h1 a{
  color: white;
  text-decoration: none;
  display:inline-block;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
}

.city h1{
  background-image: linear-gradient(transparent,rgba(0,0,0,.45));
  min-height: 100%;
  width: 100%;
  text-align: left;
  padding: 10px 5px 10px 10px;
  margin: 0;
  border-radius: 10px 10px 10px 10px;
}

.city {
  max-width: 92vw;
  min-width: 92vw;
  max-height: 150px;
  min-height: 150px;
  margin: 6px 4vw 6px 4vw;
  display: flex;
  border-radius: 10px 10px 10px 10px;
}

@media screen and (max-width: 399px) and (min-height: 750px) {
  #item {
    margin-top: 40vh;
  }
  .city-list {
    margin: 0px auto 0px auto;
    max-width: 350px;
  }
  
  .city{
    max-width: 300px;
    min-width: 300px;
    margin: 0px auto 15px auto;
  }
}

@media screen and (max-width: 399px) and (max-height: 749px) {
  #item {
    margin-top: 55vh;
  }
  .city-list {
    margin: 0px auto 0px auto;
    max-width: 350px;
  }
  
  .city{
    max-width: 300px;
    min-width: 300px;
    margin: 0px auto 15px auto;
  }
}

@media screen and (min-width: 400px) and (max-width: 500px) and (max-height: 749px) {
  #item {
    margin-top: 55vh;
  }
  .city-list {
    margin: 0px auto 0px auto;
    max-width: 350px;
  }
  
  .city{
    max-width: 350px;
    min-width: 350px;
    margin: 0px auto 15px auto;
  }
}

@media screen and (min-width: 400px) and (max-width: 500px) and (min-height: 750px) {
  #item {
    margin-top: 50vh;
  }
  .city-list {
    margin: 0px auto 0px auto;
    max-width: 350px;
  }
  
  .city{
    max-width: 350px;
    min-width: 350px;
    margin: 0px auto 15px auto;
  }
}

@media screen and (min-width: 501px) {
  #item {
    padding-bottom: 3vh;
    margin-top: 0;
  }
  .city-list {
    margin: 0px auto 0px auto;
    max-width: 80%;
    min-width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .city{
    max-width: 350px;
    min-width: 350px;
    margin: 30px auto 15px auto;
    flex: 380px 380px;
  }

  .city h1 {
    padding: 0;
  }
}

    /* flex-direction: row;
    flex-wrap: wrap; */
</style>
