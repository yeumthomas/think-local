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
        <p class='desc'>By locals for locals</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Title'
}
</script>

<style scoped>
#title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35414d;
  max-width: 650px;
  margin: 25vh auto 0 auto;
  padding-left: 4px;
  padding-right: 4px;
}

.container {
    align-items: center;
    height: 100vh;
    font-size: 36px;
}

@media screen and (max-width: 750px) {
    .container {
    font-size: 30px;
    padding-left: 15px;
    }
}
p {
    text-align: left;
    margin: 15px 33% 15px 0px;
    font-size: 24px;
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
    color: #123456;
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
