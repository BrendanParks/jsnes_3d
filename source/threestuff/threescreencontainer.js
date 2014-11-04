function ThreeContainer(document, window, node) {

    var orthoCamera, perspCamera, scene, renderer;
    var camera;

    var isShiftPressed = false;

    function setupEmptyScene() {

    //var WIDTH = node.offsetWidth , HEIGHT = node.offsetHeight;
    var WIDTH = window.innerWidth , HEIGHT = window.innerHeight;

    console.log("WIDTH IS " + WIDTH + " HEIGHT IS " + HEIGHT);
    var VIEW_ANGLE = 120,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 200000;

    renderer = new THREE.WebGLRenderer();
    //orthoCamera = new THREE.OrthographicCamera(WIDTH / -2, WIDTH / 2, HEIGHT /2, HEIGHT / -2, 1, 25000);

    var perspCamera = new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR);
    camera = perspCamera;

    scene = new THREE.Scene();

    scene.add(camera);

    camera.position.z = 256;

    renderer.setSize(WIDTH, HEIGHT);

    }

    var isMousePressed = false;
    var is
    function setupListeners() {


        document.addEventListener( 'keydown', function(event) {
          var val = 10, rotVal = 0.1;
          if (isShiftPressed) {
              val *= 10;
              rotVal = 1.0;
          }
          switch( event.keyCode ) {
            case 79: camera.position.z += val; break;   //z
            case 85: camera.position.z -= val; break;   //x
            case 73: camera.position.y += val; break;   //up
            case 75: camera.position.y -= val; break;   //down
            case 74: camera.position.x -= val; break;   //left
            case 76: camera.position.x += val; break;   //right
            
            //Camera rotations
          case 89: camera.rotation.x += rotVal; break;   //camup 
          case 72: camera.rotation.x -= rotVal; break;   //camdown

                  
            case 16: isShiftPressed = true; break;
          }
        }, false );

        document.addEventListener( 'keyup', function(event) {
          if (event.keyCode == 16) {
            isShiftPressed = false;
          }
        }, false );
        
        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            
            
        }, false);
        document.addEventListener('mousewheel',function(event) {
            
        }, false);
        document.addEventListener('mousedown',function(event) {
            
        }, false);
        document.addEventListener('mouseup',function(event) {
            
        }, false);
        
    }


    var threeScreen = null;
    this.screenWidth = 256;
    this.screenHeight = 50;
    var init = function () {

        setupEmptyScene();
        setupListeners();


        threeScreen = new THRSCN.ThreeScreen(256,50);
        threeScreen.position = new THREE.Vector3(-50000,0,0);
        scene.add(threeScreen);

        renderer.render( scene, camera );

        document.body.appendChild(renderer.domElement);

    }

    init();

    this.animate = function () {
    //requestAnimationFrame( animate );
        //this.randomizeVoxelColors();
    this.setVoxelPosSine();
    renderer.render( scene, camera );
    }


    this.changeVoxelColor = function(x,y,colorHex) {
        threeScreen.changeVoxelColor(x,y,colorHex);
    }

    this.randomizeVoxelColors = function() {
        for (var i = 0; i < threeScreen.shapes.length; i++) {
          for (var j = 0; j < threeScreen.shapes[i].length; j++) {
            threeScreen.changeVoxelColor(i,j,Math.random() * 0xffff00);
            threeScreen.shapes[i][j].rotation.x += 0.01;
            threeScreen.shapes[i][j].rotation.y += 0.01;
          }
        }
    }
    
        this.setVoxelPosSine = function() {
        for (var i = 0; i < threeScreen.shapes.length; i++) {
          for (var j = 0; j < threeScreen.shapes[i].length; j++) {
            threeScreen.shapes[i][j].rotation.x += 0.01;
            threeScreen.shapes[i][j].rotation.y += 0.01;
          }
        }
    }

}
