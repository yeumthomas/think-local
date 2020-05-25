<template>
  <div id="home">
    <div class='header'>
        <a href="/"><img :src="test" alt="logo" class="logo"/></a>
        <nav role="navigation">
            <div id="menuToggle">
                <!-- A fake / hidden checkbox is used as click reciever,
                so you can use the :checked selector on it. -->
                <input type="checkbox" />
                <!-- Hamburger -->
                <span></span>
                <span></span>
                <span></span>
                
                <!--
                Too bad the menu has to be inside of the button
                but hey, it's pure CSS magic.
                -->
                <ul id="menu">
                <a href="/contact"><li>Add a Business</li></a>
                <a href="/contact"><li>Tell Friends</li></a>
                <a href="/contact"><li>FAQ</li></a>
                <a href="/katy"><li>Katy, TX</li></a>
                <hr/>
                <h1 class="foot-words">Made with ❤️ and ☕️ by Thomas Yeum. </h1>
                </ul>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

  data () {
        return {
            test: require('@/assets/test.png')
        }
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
}

.logo {
    width: 200px;
    float: right;
    margin: 20px -20px;
}

.header {
    clear: both;
}

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}








/* HAMBURGER */
#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #6381A8;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #6381A8;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  
  background: #ffa3a3;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}
</style>
