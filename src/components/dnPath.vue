<!-- 路径画线 -->
<template>
  <canvas id="dnPath" width="700" height="600"></canvas>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const dnPath = document.getElementById("dnPath");
    let ctx = dnPath.getContext("2d");
    draw();

    let x1 = 325;
    let y1 = 387;

    let x2 = 285;
    let y2 = 335;

    let x3 = 305;
    let y3 = 250;

    let x4 = 390;
    let y4 = 325;

    let x5 = 445;
    let y5 = 205;
    // 动画
    function draw() {
      // ctx.clearRect();
      ctx.fillStyle = "#FFFFFF";
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 0.1;
      ctx.shadowBlur = 0.5;
      ctx.shadowColor = "#2598B6";

      ctx.beginPath();
      ctx.arc(325, 387, 4, 0, 2 * Math.PI);
      ctx.fill();
      ctx.moveTo(325, 387);
      ctx.lineTo(x1, y1);
      if (x1 < 400) {
        x1++;
        y1 += 2;
      } else if (x1 === 400) {
        ctx.lineTo(460, y1);
        ctx.rect(465, y1 - 20, 100, 40);
        ctx.font = "20px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("视觉识别", 475, y1);
      }
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(285, 335, 4, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.moveTo(285, 335);
      ctx.lineTo(x2, y2);
      if (x2 > 200) {
        x2--;
        y2--;
      } else if (x2 === 200) {
        ctx.lineTo(150, y2);
        ctx.rect(45, y2 - 20, 100, 40);
        ctx.font = "20px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("语音识别", 55, y2);
      }
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(305, 250, 4, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.moveTo(305, 250);
      ctx.lineTo(x3, y3);
      if (x3 > 250) {
        x3--;
        y3 -= 2;
      } else if (x3 === 250) {
        ctx.lineTo(200, y3);
        ctx.rect(95, y3 - 20, 100, 40);
        ctx.font = "20px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("传感识别", 105, y3);
      }
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(390, 325, 4, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.moveTo(390, 325);
      ctx.lineTo(x4, y4);
      if (x4 < 450) {
        x4++;
        y4++;
      } else if (x4 === 450) {
        ctx.lineTo(500, y4);
        ctx.rect(505, y4 - 20, 110, 40);
        ctx.font = "20px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("多模态融合", 510, y4);
      }
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(445, 205, 4, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.moveTo(445, 205);
      ctx.lineTo(x5, y5);
      if (x5 < 500) {
        x5++;
        y5--;
      } else if (x5 === 500) {
        ctx.lineTo(550, y5);
        ctx.rect(555, y5 - 20, 100, 40);
        ctx.font = "20px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("自主学习", 565, y5);
      }
      ctx.stroke();
      ctx.closePath();

      requestAnimationFrame(draw);
    }
  }
};
</script>
<style lang="scss">
#dnPath {
  position: absolute;
  top: -160px;
  right: -50px;
  z-index: 2;
}
</style>
