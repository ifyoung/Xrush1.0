<template>
  <div>
    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" alt="loading" class="load_img" />
    </div>
    <div id="Xmodel" v-show="!loading"></div>
  </div>
</template>
<script>
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";
export default {
  name: "Xmodel",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    //创建load
    this.init();
  },
  methods: {
    init: function() {
      //创建场景和视角灯光
      let scene = new THREE.Scene();
      //面光
      var ambient = new THREE.AmbientLight(0xb3b3b3);
      scene.add(ambient);
      // 右
      var directionalLight = new THREE.DirectionalLight(0x666666);
      directionalLight.position.set(1, 0, 0);
      scene.add(directionalLight);
      // 左
      var directionalLight2 = new THREE.DirectionalLight(0x666666);
      directionalLight2.position.set(-1, 0, 0);
      scene.add(directionalLight2);
      var directionalLight3 = new THREE.DirectionalLight(0x666666);
      directionalLight3.position.set(0, 1, 3);
      scene.add(directionalLight3);
      var camera = new THREE.PerspectiveCamera(
        45,
        this.$windowWidth / this.$windowHeigh,
        1,
        1000
      );
      camera.position.z = 120;

      //无背景
      var renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(this.$windowWidth, this.$windowHeigh);
      document.getElementById("Xmodel").append(renderer.domElement);
      //加载
      let mtlLoader = new MTLLoader();
      let objLoader = new OBJLoader();
      mtlLoader.load("./model/Xrush.mtl", materials => {
        materials.preload();
        objLoader.setMaterials(materials);
        //加载模型
        objLoader.load("./model/Xrush.obj", object => {
          object.children[0].geometry.computeBoundingBox();
          object.position.set(0, -40, 0);
          //更改初始颜色
          object.children[0].material.color.setHex(0x58b327);
          scene.add(object);
          //视角控制
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.enableDamping = true;
          controls.dampingFactor = 1;
          controls.enableZoom = false;
          //自动旋转
          animate();
          let anim = null;
          function animate() {
            anim = requestAnimationFrame(animate);
            object.rotation.y += 0.01;
            render();
          }
          function animate2() {
            anim = requestAnimationFrame(animate2);
            object.rotation.y = 0;
            render();
          }
          // //模型加载完成后关闭load层
          this.loading = false;
          //鼠标移上停止动画
          document.getElementById("Xmodel").ontouchstart = function() {
            if (anim !== null) {
              cancelAnimationFrame(anim);
              anim = requestAnimationFrame(animate2);
            }
          };
          document.getElementById("Xmodel").ontouchend = function() {
            cancelAnimationFrame(anim);
            anim = requestAnimationFrame(animate);
          };
        });
        function render() {
          renderer.render(scene, camera);
        }
      });
    }
  }
};
</script>
<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
  padding-top: 30%;
  .load_img {
    // transition: all;
    position: relative;
    width: 200px;
  }
}
</style>
