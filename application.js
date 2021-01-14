(function application(){
  var vueAccueil;
  var vueJeu;
  var vueFin;
  var jeu;

  var nomJoueur;

  var initialiser = function(){
    vueAccueil = new VueAccueil(enregistrerJoueur);
    vueJeu = new VueJeu();
    vueFin = new VueFin();

    nomJoueur = "";

    vueAccueil.afficher();

    window.addEventListener("hashchange", naviguer);

  }

  var naviguer = function(){
    var hash = window.location.hash;
    console.log("naviguer", hash);

    if(hash.match(/^#accueil/)){
      vueAccueil.afficher();
    }else if(hash.match(/^#jouer/)){
      lancerJeu();
    }else if(hash.match(/^#fin-partie-gagnee/)){
      vueFin.afficher("Partie gagnée!");
    }else if(hash.match(/^#fin-partie-perdue/)){
      vueFin.afficher("Partie perdue!");
    }
  }

  var lancerJeu = function(){
    vueJeu.afficher();
    jeu = new Jeu();
  }

  var enregistrerJoueur = function(nomJoueurEntrer){
    console.log("enregistrerJoueur");
    nomJoueur = nomJoueurEntrer;
  }

  document.addEventListener("DOMContentLoaded",initialiser);
})();






