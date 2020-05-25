<template>
  <div id="navbar">
      <div class='header'>
        <a href="/"><img :src="test" alt="logo" class="logo"/></a>
        <nav role="navigation">
            <div id="menuToggle">
                <!-- A fake / hidden checkbox is used as click reciever,
                so can use the :checked selector on it. -->
                <input type="checkbox" />
                <!-- Hamburger -->
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                <a href="/contact"><li>Add a Business</li></a>
                <a href="/contact"><li>Tell Friends</li></a>
                <a href="/contact"><li>FAQ</li></a>
                <a href="/katy"><li>Katy, TX</li></a>
                <div style="min-height: 45%"/>
                <p>▬▬▬▬▬</p>
                <h1 class="foot-words">Made with ☕️ and ❤️ by Thomas Yeum. </h1>
                </ul>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
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
  position: relative;
  height: 100%;
}



.logo {
    width: 150px;
    float: right;
    margin: 30px 0px 0px 30px;
    z-index: 1000;


}

.header {
    clear: both;
}

.foot-words {
  font-size: 14px;
  color: #123456;
}


/* HAMBURGER */
#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  max-width: calc(100% - 50px);
  margin-right: 0px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #123456;
  
  transition: color 0.3s ease;
}

#menuToggle li:hover
{
  color: #6381A8;
  border: 2px solid #6381A8;
  border-radius: 10px;
  padding: 8px 0px;
  cursor: pointer; 
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

@media screen and (max-width: 650px) {
  #menu {
  width: calc(100% - 50px);
  }
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
