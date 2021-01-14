var ArrierePlan = function(scene){
  var conteneur;
  var charge;
  var imagePaysageArriere;
  var matricePaysageArriere;
  var shapePaysageArriere;

  var initialiser = function(){
    conteneur = new createjs.Container();
    charge = false;

    imagePaysageArriere = new Image();
    matricePaysageArriere = new createjs.Matrix2D();
    shapePaysageArriere = new createjs.Shape();

    imagePaysageArriere.onload = creerShapePaysageArriere;
    imagePaysageArriere.src = "illustration/paysage-arriere.png"
 }

 var creerShapePaysageArriere = function(){
   shapePaysageArriere.
    graphics.
    beginBitmapFill(imagePaysageArriere, "repeat",matricePaysageArriere).
    drawRect(0,0,800,500).
    endStroke();

    conteneur.addChild(shapePaysageArriere);
    charge = true;
 }

 this.estCharge = function(){
   return charge;
 }

 this.afficher = function(){
   console.log("arriere plan-->afficher");
   scene.addChild(conteneur);
 }

 this.animer = function(){
   matricePaysageArriere.translate(-5,0);
 }

 initialiser();
}