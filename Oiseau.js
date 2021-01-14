var Oiseau = function(scene){

  var imageOiseauVol;
  var spriteSheetOiseauVol;
  var spriteOiseauVol;
  var charge;


  var initialiser = function(){
    imageOiseauVol = new Image();
    imageOiseauVol.onload = creerSpriteSheet;
    imageOiseauVol.src = "illustration/oiseau-vol.png";
    charge = false;
  }


  var creerSpriteSheet = function(evenementOnload){
    console.log("Image oiseau-vol.png chargée");

    spriteSheetOiseauVol = new createjs.SpriteSheet({
      images: [imageOiseauVol],
      frames:{
        width: 712,
        height: 541
      },
      animations:{
        voler: [0,1]
      }
    });
    console.log("SpriteSheetOiseauVol créée");

    creerSprite();
  }

  var creerSprite = function(){
    spriteOiseauVol = new createjs.Sprite(spriteSheetOiseauVol,"voler");
    spriteOiseauVol.scaleX = spriteOiseauVol.scaleY = 0.5;
    spriteOiseauVol.setBounds(
      spriteOiseauVol.x,
      spriteOiseauVol.y,
      712 * 0.5,
      541 * 0.5);
    console.log("SpriteOiseauVol créée");

    charge = true;
    //afficher();
  }

  this.getRectangle = function(){
    var rectangle = {
      x: spriteOiseauVol.x,
      y: spriteOiseauVol.y,
      width: spriteOiseauVol.getBounds().width,
      height: spriteOiseauVol.getBounds().height
    };

    return rectangle;
  }

  this.afficher = function(){
    scene.addChild(spriteOiseauVol);
    console.log("SpriteOiseauVol ajoutée à la scène");
  }

  this.disparaitre = function(){
    spriteOiseauVol.visible = false;
  }

  this.faireAparaitre = function(){
    spriteOiseauVol.visible = true;
  }

  this.estCharge = function(){
    return charge;
  }

  this.avancer = function(){
    spriteOiseauVol.x += 10;
  }

  this.reculer = function(){
    spriteOiseauVol.x -= 10;
  }

  initialiser();
}














