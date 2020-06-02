<template>
  <div id="item">
    <div class="city-list">
      <div class='city' id ="chicago">
        <h1><a href='/chicago'> Chicago, IL</a></h1>
      </div>
      <div class='city' id="minneapolis">
        <h1><a href='/minneapolis'> Minneapolis, MN</a></h1>
      </div>
      <div class='city' id="madison">
        <h1><a href='/madison'> Madison, WI</a></h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',

  data () {
    return {
      chicpic: require('@/assets/chicago.jpeg'),
      minnpic: require('@/assets/Minneapolis.jpeg'),
      madpic: require('@/assets/madison.jpeg'),

      cities: {
        city1 : {
          name: 'Chicago, IL',
          link: 'chicago',
          pic: '../chicago.jpeg'
        },
        city2: {
          name: 'Minneapolis, MN',
          link: 'minneapolis',
          pic: '../Minneapolis.jpeg'
        },
        city3: {
          name: 'Madison, WI',
          link: 'madison',
          pic: '../madison.jpeg'
        }
      }
    }
  }

}
</script>

<style scoped>
#item {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 220px;
  display: flex;
}


.city-list {
  max-width: 700px;
  display: flex;
  flex-direction: column;
}

#chicago {
  background-image: url(../assets/chicago.jpeg);
  background-size: cover;
}

/* #chicago:hover {
  cursor: pointer;
} */

#minneapolis {
  background-image: url(../assets/Minneapolis.jpeg);
  background-size: cover;
}

/* #chicago:hover {
  cursor: pointer;
} */

#madison {
  background-image: url(../assets/madison.jpeg);
  background-size: cover;
}

/* #madison:hover {
  cursor: pointer;
} */

.city h1 a{
  color: white;
  text-decoration: none;
  display:inline-block;
  width: 100%;
  height: 100%;
}
.city h1{
  background-image: linear-gradient(transparent,rgba(0,0,0,.75));
  min-height: 100%;
  width: 100%;
  text-align: left;
  padding: 10px 5px 10px 10px;
  margin: 0;
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

/* 
@media screen and (max-width: 499px) {
  .city-list {
    margin-top: 100px;
    max-width: 350px;
  }
  .city {
    max-width: 92vw;
    min-width: 92vw;
    max-height: 150px;
    min-height: 150px;
    padding: 4px 4vw 4px 4vw;
    margin: 0;
  }
  

}

@media screen and (min-width: 500px) {
  .city-list {
    margin-top: 100px;
    max-width: 350px;

  }

  .city {
  max-width: 150px;
  min-width: 150px;
  max-height: 100px;
  min-height: 100px;
}

} */
</style>
