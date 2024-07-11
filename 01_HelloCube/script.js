import * as THREE from "./three.module.min.js"
console.log(THREE)

// We have 4 elements which are
// Scene Mesh(Object) Camera Renderer

// Scene_________________________________________________________________________________________________________________________

const scene = new THREE.Scene()
console.log(scene)


// Object is Mesh -->  https://threejs.org/docs/index.html#api/en/objects/Mesh
// fist thing to do define the shape (geometry) , and the second thing descripe to material

/*
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
*/ 


// Mesh__________________________________________________________________________________________________________________________
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color:"orange"})
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);



