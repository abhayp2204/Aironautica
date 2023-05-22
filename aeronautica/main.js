import * as THREE from 'three';
import './style.css'

// Scene
const scene = new THREE.Scene();

// Sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.6, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas,
});
renderer.setSize(window.innerWidth - 0, window.innerHeight - 4);
renderer.render(scene, camera);