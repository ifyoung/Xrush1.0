<template>
  <div class="slide_page1">
    <div class="small">
      <line_chart :chart-data="datacollection" :options="op1"></line_chart>
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>

<script>
import line_chart from "../vue_chart/line_chart";
export default {
  name: "slide_page1",
  components: {
    line_chart
  },
  data() {
    return {
      datacollection: null,
      op1: {
        animationEasing: "linear"
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            fillColor: "rgba(0,0,0,0)",
            strokeColor: "rgba(0,0,0,0)",
            pointColor: "rgba(0,0,0,0)",
            pointStrokeColor: "rgba(0,0,0,0)",
            pointHighlightFill: "rgba(0,0,0,0)",
            pointHighlightStroke: "rgba(0,0,0,0)",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
<style lang="scss">
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
