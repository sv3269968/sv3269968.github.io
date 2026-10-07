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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 150, 75, 20, "cyan");
    createPlatform(350, 300, 500, 20, "violet");
    createPlatform(1000, 476, 50, 20, "red");
    createPlatform(780, 550, 100, 20, "green");
    createPlatform(1150, 600, 150, 20, "yellow");
    createPlatform(1350, 700, 80, 20, "orange");
    createPlatform(1100, 200, 95, 20, "lime")
    createPlatform(200, 400, 20, 20)



    // TODO 3 - Create Collectables
    createCollectable( "steve", 730, 180, 1, 1);
    createCollectable( "database", 350, 500, 1, 1);
    createCollectable( "max", 1200, 540, 1, 1);
    createCollectable( "max", 1140, 100, 1.2,1)


    
    // TODO 4 - Create Cannons
    createCannon("top", 710,450 )
    createCannon("left",480,560)
    createCannon("right",500,1050)
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
