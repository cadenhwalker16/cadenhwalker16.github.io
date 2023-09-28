$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

createCollectable("steve", 500, 170, 6, 0.7); //your example function call
createPlatform(500, 650, 200, 20);
createPlatform(10, 650, 150, 15)
createPlatform(350, 550, 200, 20)
createPlatform(650, 450, 300, 20)
createPlatform(550, 330, 200, 20)
createPlatform(150, 195, 350, 20)
createPlatform(1000, 550, 200, 20)
createPlatform(1200, 350, 200, 20)
createCollectable("steve", 1200, 170, 6, 0.7)
createCollectable("steve", 550, 170, 6, 0.7)
createCollectable("steve", 1000, 170, 6, 0.7)
createCannon("left", 350, 1200);
createCannon("top", 700, 1200);
createCannon("right", 300, 1200);
createCannon("bottom", 350, 1200);
createCannon("left", 350, 1200);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
