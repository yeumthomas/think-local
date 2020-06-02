<template>
  <div id="title">
        <div class="container">
            <h2>Stand by our</h2>
            <h2> Small<a style="color:#C8E7F5; font-size: 24px">_</a> 
                <div class="rotate-words">
                <span>Eateries</span>
                <span>Salons</span>
                <span>Bars</span>
                <span>Cafés</span>
                <span>Bakeries</span>
            </div>
            </h2>
            <!--- Statistic credit: https://www.nber.org/papers/w26989.pdf -->
            <p class='desc'> Whether or not you believe protesting is correct, there are many small businesses that
                need your help to rebuild them. 
                
                <!-- Our local businesses need our help. With COVID-19 causing the closure of more than
                100,000 small businesses in the US alone, we can all support our neighbors by purchasing gift 
                cards and paying it forward. -->
            </p>
            <img :src="titlePic" alt="titlePic" class="titlePic"/>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Title',
    data () {
        return {
            titlePic: require('@/assets/cookfinalfinal.jpg') 
        }
    } 
}
</script>

<style scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35414d;
  max-width: 886px;
  margin: 25vh auto 0 auto;
  padding-left: 4px;
  padding-right: 2px;
}

.container {
    align-items: center;
    height: 60vh;
    font-size: 36px;
}

.titlePic {
    width: 400px;
    position: relative;
    bottom: 43vh;
    left: 19vw;
    z-index: -1;
}

@media screen and (max-width: 399px) {
    #title {
        margin: 15vh auto 0 auto;
    }
    .container {
    font-size: 30px;
    padding: 0px 15px 0px 10px;
    overflow-y: visible;
    }

    p {
    text-align: left;
    /* the % makes the paragraph get margin-right larger/smaller */
    margin: 15px 5px 15px 0px;
    font-size: 24px;
    width: 92vw;
    }

    .titlePic {
        width: 230px;
        bottom: -3vh;
        left: 0vw;
    }
}

@media screen and (max-width: 500px) and (min-width: 400px) {
    #title {
        margin: 15vh auto 0 auto;
    }
    .container {
    font-size: 36px;
    padding: 0px 15px 0px 10px;
    min-height: 150vh;
    }

    p {
    text-align: left;
    /* the % makes the paragraph get margin-right larger/smaller */
    margin: 15px 5px 5px 0px;
    font-size: 24px;
    width: 92vw;
    }

    .titlePic {
        width: 230px;
        bottom: -3vh;
        left: 0vw;
    }
}

@media screen and (max-width: 586px) and (min-width: 501px) {
    .container {
    font-size: 30px;
    padding-left: 15px;
    }

    p {
    text-align: left;
    /* the % makes the paragraph get margin-right larger/smaller */
    margin: 30px 60% 15px 0px;
    font-size: 18px;
    }

    .titlePic {
        width: 300px;
        bottom: 33vh;
    }
}

@media screen and (max-width: 720px) and (min-width: 587px) {
    .container {
    font-size: 30px;
    padding-left: 15px;
    }

    p {
    text-align: left;
    /* the % makes the paragraph get margin-right larger/smaller */
    margin: 15px 60% 15px 0px;
    font-size: 18px;
    }

    .titlePic {
        width: 300px;
        bottom: 40vh;
    }
}

@media screen and (max-width: 830px) and (min-width: 721px) {
    .container {
    font-size: 30px;
    padding-left: 15px;
    }

    p {
    text-align: left;
    margin: 15px 60% 15px 0px;
    font-size: 24px;
    }

    .titlePic {
        left: 23vw;
        bottom: 52vh;
    }

}

@media screen and (max-width: 830px) and (min-width: 721px) {
    .container {
    font-size: 30px;
    padding-left: 15px;
    }

    p {
    text-align: left;
    margin: 15px 60% 15px 0px;
    font-size: 24px;
    }

    .titlePic {
        left: 23vw;
        bottom: 52vh;
    }

}

@media screen and (max-width: 890px) and (min-width: 831px) {
    .container {
    font-size: 30px;
    padding-left: 15px;
    }

    p {
    text-align: left;
    margin: 15px 60% 15px 0px;
    font-size: 24px;
    }

    .titlePic {
        left: 23vw;
        bottom: 48vh;
    }

}

@media screen and (min-width: 891px) {
    /* The translation of the title picture */
    .titlePic {
        left: 23vw;
    }

    p {
    text-align: left;
    margin: 15px 42% 15px 0px;
    font-size: 24px;
    }
}

h2 {
    color: #222;
    text-align: left;
    margin: 10px 0 10px 0;
}

.rotate-words {
    display: inline;

}

.rotate-words span {
    position: absolute;
    opacity: 0;
    padding: 0 10px 0 5px;
    color: #6381A8;
    transition: color 0.25s ease-in-out;
    animation: rotateWord 15s linear infinite 0s;
}
.rotate-words span:nth-child(2) {
        animation-delay: 3s;
    }
.rotate-words span:nth-child(3) {
        animation-delay: 6s;
    }
.rotate-words span:nth-child(4) {
        animation-delay: 9s;
    }
.rotate-words span:nth-child(5) {
        animation-delay: 12s;
    }
.rotate-words span:nth-child(6) {
        animation-delay: 15s;
    }
    .rotate-words span:nth-child(7) {
        animation-delay: 18s;
    }


@keyframes rotateWord {
    0% {
        opacity: 0;
    }
    2% {
        opacity: 0;
        transform: translateY(-2rem);
    }
    5% {
        opacity: 1;
        transform: translateY(0);
    }
    17% {
        opacity: 1;
        transform: translateY(0);
    }
    20% {
        opacity: 0;
        transform: translateY(2rem);
    }
    80% {
        opacity: 0;
    }
    90% {
        opacity: 0;
    }
    95% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
</style>
