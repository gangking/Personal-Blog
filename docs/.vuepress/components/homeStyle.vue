<template>
  <div class="box"
       ref="wrapper">
    <div class="txt"
         v-if="screenWidth<750">水滴石穿
    </div>
    <div class="txt"
         v-else>绳锯木断，水滴石穿
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      screenWidth: 0
    }
  },
  mounted () {
    this.windowOnresize();
  },
  watch: {
    screenWidth (val) {
      this.screenWidth = val;
    }
  },
  methods: {
    windowOnresize () {
      this.screenWidth = this.$refs.wrapper.offsetWidth;
      window.onresize = () => {
        this.screenWidth = this.$refs.wrapper.clientWidth;
      }

    }
  }
};
</script>

<style lang="styl" scoped>
.box {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #000;
  filter: blur(2px) contrast(10);
  position: relative;
}

.txt {
  position: relative;
  width: 80%;
  height: 58px;
  line-height: 42px;
  color: #fff;
  font-size: 65px;
  text-align: center;
  margin: 100px auto;
  border-bottom: 10px solid #fff;
  transform: skewY(3deg);
}

.txt::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: -20px;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transform: translate(0, 0);
  animation: move 7.5s ease-in-out infinite;
}

.txt::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -20px;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transform: translate(0, 0);
  animation: move 7.5s ease-in-out 1s infinite;
}

@keyframes move {
  80% {
    left: 98%;
    bottom: -30px;
    transform: translateY(0);
  }
  93% {
    left: 98%;
    transform: translateY(3px);
    opacity: 1;
  }
  100% {
    left: 98%;
    transform: translateY(150px);
    opacity: 0;
  }
}
</style>


