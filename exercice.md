
   ## EXERCICE — POO en JavaScript : gestion d'une bibliothèque
   ### Niveau : débutant (classes et objets)
  

   Objectif général : modéliser une petite bibliothèque avec des
   classes JavaScript. Tu vas créer des Livres, des Membres, et une
   Bibliothèque qui les fait interagir.

   ### Consignes générales :
   - Complète le code à chaque endroit marqué "// TODO".
   - Ne modifie pas les parties déjà écrites.
   


    ### NIVEAU 1 : ta première classe 

    Crée une classe Livre avec :
   - un constructeur qui prend : titre, auteur, isbn
   - une propriété supplémentaire "disponible" initialisée à true
     (un livre neuf n'a jamais été emprunté)
   - une méthode afficherInfos() qui retourne une chaîne du type :
     "Le Petit Prince de Antoine de Saint-Exupéry (ISBN: 12345)"


    #### // TODO : écris la classe Livre ici
class Livre {

}


  ### NIVEAU 2 : une deuxième classe qui interagit

   Crée une classe Membre avec :
   - un constructeur qui prend : nom, idMembre
   - une propriété "empruntsEnCours" initialisée à un tableau vide
     (elle contiendra des objets Livre)
   - une méthode emprunterLivre(livre) qui :
       - ajoute le livre au tableau empruntsEnCours
       - passe la propriété "disponible" du livre à false
   - une méthode rendreLivre(livre) qui :
       - retire le livre du tableau empruntsEnCours
       - repasse "disponible" du livre à true
   - une méthode nombreEmprunts() qui retourne le nombre de livres
     actuellement empruntés par ce membre

   Indice : pour retirer un élément précis d'un tableau, la méthode
   .filter() est souvent plus simple à utiliser que .splice().

### TODO : écris la classe Membre ici
class Membre {

}


### NIVEAU 3 : une classe qui orchestre les deux autres 

   Crée une classe Bibliotheque avec :
   - un constructeur qui initialise deux tableaux vides : "livres" et "membres"
   - une méthode ajouterLivre(livre) qui ajoute un Livre au tableau livres
   - une méthode ajouterMembre(membre) qui ajoute un Membre au tableau membres
   - une méthode livresDisponibles() qui retourne uniquement les livres
     dont "disponible" est true (utilise .filter())
   - une méthode rechercherParAuteur(auteur) qui retourne tous les
     livres d'un auteur donné (utilise .filter())

 ### // TODO : écris la classe Bibliotheque ici
class Bibliotheque {

}
