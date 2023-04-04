// import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js";
// import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/GLTFLoader.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// const canva = document.body.appendChild(renderer.domElement);
// canva.style.position = "fixed";
// canva.style.top = "0";
// canva.style.left = "0";
// camera.position.z = 5;
// scene.background = new THREE.Color(0xffc445);

// const loader = new GLTFLoader();

// loader.load(
//   "../3D/cube_visual_effect_animation_perfect_loop/scene.gltf",
//   (loaded3D) => {
//     const Model3D = loaded3D.scene;
//     scene.add(Model3D);
//   }
// );

// const color = 0xffffff;
// const intensity = 1000;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(0, 1, 1);
// scene.add(light);

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();

// document.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.code == "Arrowleft") {
//     Model3D.rotation.x -= 1;
//   } else if (e.code == "ArrowRight") {
//     Model3D.rotation.x += 1;
//   }

//   if (e.code == "ArrowUp") {
//     Model3D.rotation.y -= 1;
//   } else if (e.code == "ArrowDown") {
//     Model3D.rotation.y += 1;
//   }
// });

// document.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.code == "Space") {
//     canva.style.display = "none";
//   }
// });

const slider = document.querySelector("#Slider");
const slides = document.querySelectorAll(".slide");

// slider.addEventListener("click", () => {
//   // slider.style.position = "fixed";
//   // slider.style.height = "100%";
//   // slider.style.width = "80%";
//   // Slide1.style.position = "fixed";
//   // Slide1.style.height = "100%";
//   // Slide1.style.width = "60%";
//   slides[2].children[0].style.opacity = 1;
// });

const Slide1 = document.querySelector(".Slide1");

Slide1.addEventListener("click", () => {
  // slider.style.position = "fixed";
  // slider.style.height = "100%";
  // slider.style.width = "80%";
  // Slide1.style.position = "fixed";
  // Slide1.style.height = "100%";
  // Slide1.style.width = "60%";
  Slide1.style.height = "100%";
  Slide1.style.width = "40%";

  slides[1].children[0].style.opacity = 1;
});
