(function(){

    var vueAccueil;
    var vueJeu;
    var vueFinPartie;
    var jeu;

    function initialiser(){

        vueAccueil = new VueAccueil();
        vueJeu = new VueJeu();
        vueFinPartie = new VueFinPartie();


        vueAccueil.afficher();

        window.addEventListener("hashchange",naviguer);

    }

    function naviguer(evenement){

        var hash = window.location.hash;

        if(hash.match(/^#accueil/)){
            naviguerAccueil();
        }else if(hash.match(/^#jouer/)){
            naviguerJeu();
        }else if(hash.match(/^#fin-partie-gagnee/)){
            naviguerFinPartie(gagnee = true);
        }else if(hash.match(/^#fin-partie-perdue/)){
            naviguerFinPartie(gagnee = false);
        }

    }

    function naviguerAccueil(){

        vueAccueil.afficher();

    }

    function naviguerJeu(){

        vueJeu.afficher();
        jeu = new Jeu();

    }

    function naviguerFinPartie(gagnee){

        vueFinPartie.afficher(gagnee);

    }


    document.addEventListener("DOMContentLoaded", initialiser);

})();
