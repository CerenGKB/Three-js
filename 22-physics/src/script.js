import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import CANNON from 'cannon'


/**
 * Debug
 */
const gui = new dat.GUI()
const debugObject = {}

debugObject.createSphere = () => {
    createSphere(Math.random() * 0.5,
        {
            x : (Math.random() -0.5) * 8,
            y : Math.random() * 5,
            z : (Math.random() -0.5) * 8
        })
}
gui.add(debugObject,'createSphere')

debugObject.createBox = () => {
    createBox(
        Math.random()  +0.5,
        Math.random()  +0.5,
        Math.random()  +0.5,
        {
            x : (Math.random() -0.5) * 8,
            y : Math.random() * 5,
            z : (Math.random() -0.5) * 8
        })
}
gui.add(debugObject,'createBox')


debugObject.reset = () => {
    for(const object of objectsToUpdate){
        
        object.body.removeEventListener('collide',playHitSound)
        world.removeBody(object.body)
     
        scene.remove(object.mesh)
       
    
        
    }
    objectsToUpdate.splice(0,objectsToUpdate.length)
}

gui.add(debugObject,'reset')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)
const hitSound = new Audio('/sounds/hit.mp3')

const playHitSound = (collision) => {
    const impactStrength = collision.contact.getImpactVelocityAlongNormal()
    if(impactStrength >1.5){
    hitSound.volume = Math.random() 
    hitSound.currentTime = 0
    hitSound.play()
    }
}


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.png',
    '/textures/environmentMaps/0/nx.png',
    '/textures/environmentMaps/0/py.png',
    '/textures/environmentMaps/0/ny.png',
    '/textures/environmentMaps/0/pz.png',
    '/textures/environmentMaps/0/nz.png'
])

//physics

//world
const world = new CANNON.World()
world.broadphase = new CANNON.SAPBroadphase(world)
world.allowSleep = true
world.gravity.set(0,-9.82,0)

//materials
const defaultMaterial = new CANNON.Material('default')

//contact material
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction : 0.1, 
        restitution : 0.6
    }
    )

world.addContactMaterial(defaultContactMaterial)    


//floorbody
const floorShape = new CANNON.Plane()
const floorBody = new CANNON.Body()

floorBody.mass = 0
floorBody.material = defaultMaterial
floorBody.addShape(floorShape)
floorBody.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1,0,0),
    Math.PI * 0.5
)

const floorBody2 = new CANNON.Body()
floorBody2.mass = 0
floorBody2.material = defaultMaterial
floorBody2.addShape(floorShape)
floorBody2.quaternion.setFromAxisAngle(
    new CANNON.Vec3(0,-1,0),
    Math.PI * 0.5
)
floorBody2.position.x =  5
floorBody2.position.y =  2 

const floorBody3 = new CANNON.Body()
floorBody3.mass = 0
floorBody3.material = defaultMaterial
floorBody3.addShape(floorShape)
floorBody3.quaternion.setFromAxisAngle(
    new CANNON.Vec3(0,1,0),
    Math.PI * 0.5
)
floorBody3.position.x =  -5
floorBody3.position.y =  2 

const floorBody4 = new CANNON.Body()
floorBody4.mass = 0
floorBody4.material = defaultMaterial
floorBody4.addShape(floorShape)
floorBody4.position.z = -5
floorBody4.position.y =  2 

const floorBody5 = new CANNON.Body()
floorBody5.mass = 0
floorBody5.material = defaultMaterial
floorBody5.addShape(floorShape)
floorBody5.quaternion.setFromAxisAngle(
    new CANNON.Vec3(0,1,0),
    Math.PI 
)
floorBody5.position.z =  5
floorBody5.position.y =  2 

world.addBody(floorBody)
world.addBody(floorBody2)
world.addBody(floorBody3)
world.addBody(floorBody4)
world.addBody(floorBody5)


/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

const floor2 = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 5),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor2.receiveShadow = true
floor2.rotation.y = - Math.PI * 0.5
floor2.position.x =  5
floor2.position.y =  2.5
scene.add(floor2)


const floor3 = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 5),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor3.receiveShadow = true
floor3.rotation.y =  Math.PI * 0.5
floor3.position.x = - 5
floor3.position.y = 2.5
scene.add(floor3)


const floor4 = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 5),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor4.receiveShadow = true
floor4.position.z = -5
floor4.position.y = 2.5
scene.add(floor4)


const floor5 = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 5),
    new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })
)
floor5.receiveShadow = true
floor5.position.z = 5
floor5.position.y = 2.5
scene.add(floor5)



/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(- 3, 3, 3)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//utils

const objectsToUpdate = []

const sphereGeometry = new THREE.SphereGeometry(1,20,20)
const sphereMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture
})


const createSphere = (radius,position) =>
{
    const mesh = new THREE.Mesh( sphereGeometry, sphereMaterial)
    mesh.scale.set(radius,radius,radius)
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)

    //cannon js body
    const shape = new CANNON.Sphere(radius)
    const body = new CANNON.Body({
        mass:1,
        position : new CANNON.Vec3(0,3,0),
        shape,
        material : defaultMaterial
    })
    body.position.copy(position)
    body.addEventListener('collide',playHitSound)
    world.addBody(body)

    //save in objects to update
    objectsToUpdate.push({
        mesh,
        body
    })
}

createSphere(0.5, {x:0,y:3,z:0})

const boxGeometry = new THREE.BoxGeometry(1,1,1)
const boxMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture
})


const createBox = (width,height,depth,position) =>
{
    const mesh = new THREE.Mesh( boxGeometry,boxMaterial)
    mesh.scale.set(width,height,depth)
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)

    //cannon js body
    const shape = new CANNON.Box(new CANNON.Vec3(width*0.5,height*0.5,depth*0.5))
    const body = new CANNON.Body({
        mass:1,
        position : new CANNON.Vec3(0,3,0),
        shape,
        material : defaultMaterial
    })
    body.position.copy(position)
    body.addEventListener('collide',playHitSound)
    world.addBody(body)

    //save in objects to update
    objectsToUpdate.push({
        mesh :mesh,
        body : body
    })
}





/**
 * Animate
 */
const clock = new THREE.Clock()
let OldElapsedTime =0 


const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - OldElapsedTime
    OldElapsedTime = elapsedTime


    //update physics world

    world.step(1/60,deltaTime ,3)

    for(const object of objectsToUpdate){
        object.mesh.position.copy(object.body.position)
        object.mesh.quaternion.copy(object.body.quaternion)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()