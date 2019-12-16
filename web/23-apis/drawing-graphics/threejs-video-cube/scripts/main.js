// fork getUserMedia for multiple browser versions

navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

//main block for doing the video recording

if (navigator.getUserMedia) {
   console.log('getUserMedia supported.');
   navigator.getUserMedia (
      // constraints - only video needed for this app
      {
         audio: false,
         video: true
      },

      // Success callback
      function(stream) {
        var videoURL = window.URL.createObjectURL(stream);
        var video = document.createElement('video');
        video.src = videoURL;
        video.onloadedmetadata = function() {
          video.play();
          threeRender(video);
        };
      },

      // Error callback
      function(err) {
         console.log('The following gUM error occured: ' + err);
      }
   );
} else {
   console.log('getUserMedia not supported on your browser!');
}

// three.js cube drawing

function threeRender(video) {

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // load a texture, set wrap mode to repeat
  var texture = new THREE.Texture(video);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 1, 1 );

  var geometry = new THREE.BoxGeometry(3,3,3);
  var material = new THREE.MeshLambertMaterial( { map: texture, shading: THREE.FlatShading } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 5;

  var light = new THREE.AmbientLight( 'rgb(100,100,100)' ); // soft white light
  scene.add( light );

  // White directional light at half intensity shining from the top.
  //var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  //directionalLight.position.set( 0, 1, 0 );
  //scene.add( directionalLight );

  // white spotlight shining from the side, casting shadow
  var spotLight = new THREE.SpotLight( 'rgb(255,255,255)' );
  spotLight.position.set( 100, 1000, 1000 );
  spotLight.castShadow = true;
  spotLight.shadowMapWidth = 1024;
  spotLight.shadowMapHeight = 1024;
  spotLight.shadowCameraNear = 500;
  spotLight.shadowCameraFar = 4000;
  spotLight.shadowCameraFov = 30;
  scene.add( spotLight );

  //render the scene

  function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    texture.needsUpdate = true;
    renderer.render(scene, camera);
  }

  render();

  // keyboard controls

  var body = document.querySelector('body');

  body.onkeydown = function(e) {
    // 37 is arrow left, 39 is arrow right,
    // 38 is arrow up, 40 is arrow down

    if(e.keyCode == 37) {
      camera.position.x += 0.05;
    };

    if(e.keyCode == 39) {
      camera.position.x -= 0.05;
    };

    if(e.keyCode == 38) {
      camera.position.y -= 0.05;
    };

    if(e.keyCode == 40) {
      camera.position.y += 0.05;
    };
  }

  function onWindowResize() {
      renderer.setSize( window.innerWidth, window.innerHeight );
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  }
  window.addEventListener( 'resize', onWindowResize, false );

}
