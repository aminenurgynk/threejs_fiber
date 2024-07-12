import * as THREE from "./three.module.min.js"
console.log(THREE)

// We have 4 elements which are
// Scene Mesh(Object) Camera Renderer

// Scene_____________________________________________________________________________________________________________________________________________

const scene = new THREE.Scene()
console.log(scene)

// Mesh______________________________________________________________________________________________________________________________________________

// Object is Mesh -->  https://threejs.org/docs/index.html#api/en/objects/Mesh
// fist thing to do define the shape (geometry) , and the second thing descripe to material

/*
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
*/ 

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color:"orange"})
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1;
mesh.scale.x = 3;
mesh.rotation.x = Math.PI * 0.25 // 1/8 turn (positif side) check the image -> \image\routation.png
scene.add(mesh);


// we havee methods of course, position, scale, routation , you can check the methods documentation -> \image\routation.png



// Camera____________________________________________________________________________________________________________________________________________

// Than camera, we will use perspectiveCamera for now  ---> https://threejs.org/docs/index.html?q=Came#api/en/cameras/PerspectiveCamera
/*
const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene.add( camera );
*/

//Here  is the constructor of camera constructorOfCamera
/*
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number ) -> \image\constructorOfCamera.png
fov — Camera frustum vertical field of view.
aspect — Camera frustum aspect ratio.(w/h)
near — Camera frustum near plane.
far — Camera frustum far plane.
*/

const ascpect ={
    width: window.innerWidth,
    height: window.innerHeight,
}
//                                         fov        aspect ratio(w/h)    near  far   
const camera = new THREE.PerspectiveCamera(75, ascpect.width/ascpect.height, 1, 2000);
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera)


// Renderer__________________________________________________________________________________________________________________________________________

const canvas = document.querySelector(".draw"); //select the canvas element 
const renderer = new THREE.WebGLRenderer({ canvas }); // add the WebGlRenderer
renderer.setSize(ascpect.width, ascpect.height) //Rederer size
renderer.render(scene, camera) //display what the camera in the scene captured