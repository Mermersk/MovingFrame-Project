
const unique = require("uniq");
const THREE = require("three");

let data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

console.log("Second")

console.log("is watchify really watching?")

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 2;

function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.09;
    cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}


animate();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);