<!-- 底部 -->
<template>
  <footer class="Xfoot" ref="Xfoot">
    <div class="foot_text">
      <p class="foot_text1">官方微信公众号：Xrush</p>
      <p class="foot_text1">官方客服电话：400-8878-210</p>
      <p class="foot_text1">地址：重庆市渝北区仙桃数据谷东路19号B2-1栋</p>
      <p class="foot_text2">Copyright © 2019 Xrush Inc. 保留所有权利</p>
    </div>
    <div class="foot_qrcode">
      <div class="qrcode_content">
        <img
          src="../assets/XrushAPP下载qrcode.png"
          alt="XrushAPP下载"
          class="qrcode"
        />
        <p class="qrcode_text">扫码下载Xrush APP</p>
      </div>
      <div class="qrcode_content">
        <img src="../assets/xrush公众号.png" alt="xrush公众号" class="qrcode" />
        <p class="qrcode_text">Xrush官方微信公众号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../styles/variables.scss";
.Xfoot {
  height: 100%;
  background-color: $deep_gray;
  padding: 0 10rem;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  .foot_text {
    .foot_text1 {
      color: $black;
      font-size: 1.4rem;
    }
    .foot_text2 {
      color: $black;
      font-size: 0.8rem;
    }
  }
  .foot_qrcode {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
    .qrcode_content {
      .qrcode {
        width: 70%;
        max-width: 200px;
      }
      .qrcode_text {
        color: $black;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
