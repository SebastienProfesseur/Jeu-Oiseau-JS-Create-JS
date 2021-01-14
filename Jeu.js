var Jeu = function(){

  var TOUCHE_DROITE = 39;

  var scene;
  var poteau;
  var oiseau;
  var arrierePlan;
  var testChargement;

  var initialiser = function(){
    var dessin = document.getElementById("dessin");
    scene = new createjs.Stage(dessin);
    console.log("Scène créée");
    createjs.Ticker.setFPS(5);
    createjs.Ticker.addEventListener("tick", rafraichir);

    window.addEventListener("keydown", gererTouche);

    poteau = new Poteau(scene, {x:500, y:0});
    oiseau = new Oiseau(scene);
    arrierePlan = new ArrierePlan(scene);

    testChargement = setInterval(testerChargement, 100);

  }

  var rafraichir = function (evenementTick){

    if(testerCollision(oiseau.getRectangle(), poteau.getRectangle())){
      console.log("collision!");
      oiseau.disparaitre();
      createjs.Ticker.removeEventListener("tick", rafraichir);
      window.location = "#fin-partie-perdue";
    }

    arrierePlan.animer();
    scene.update(evenementTick);
    console.log("Mise à jour scène");
  }

  var testerChargement = function(){
    if(poteau.estCharge() &&
      oiseau.estCharge() &&
      arrierePlan.estCharge()){
      afficherObjet();
      clearInterval(testChargement);
    }
  }

  var afficherObjet = function(){
    arrierePlan.afficher();
    oiseau.afficher();
    poteau.afficher();
  }

  var gererTouche = function(evenement){
    console.log("gererTouche : "+evenement.keyCode);
    switch(evenement.keyCode){
      case TOUCHE_DROITE:
        oiseau.avancer();
        break;
    }
  }

  var testerCollision = function(rectangleOiseau, rectanglePoteau){
    if(rectangleOiseau.x >= rectanglePoteau.x + rectanglePoteau.width ||
      rectangleOiseau.x + rectangleOiseau.width <= rectanglePoteau.x ||
      rectangleOiseau.y >= rectanglePoteau.y + rectanglePoteau.height ||
      rectangleOiseau.y + rectangleOiseau.height <= rectanglePoteau.y){
        return false;
    }
    return true;
  }

  initialiser();

}

















