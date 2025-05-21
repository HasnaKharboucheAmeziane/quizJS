// 💬 Exercice – Snake Quizz
// Objectif : tableaux, conditions, fonctions, événements, setInterval, clearInterval.
// 🟢 Niveau 1 – Une seule question
// Crée un objet question avec :
// un intitulé
// un tableau de 3 réponses
// l’index de la bonne réponse
// Affiche la question dans la page avec 3 boutons de réponse.
// Quand l'utilisateur clique sur un bouton, affiche dans la console :
// "Bonne réponse !" ou "Mauvaise réponse."
// 🟡 Niveau 2 – Plusieurs questions
// Place plusieurs questions dans un tableau nommé quiz.
// À chaque réponse, passe à la question suivante.
// Quand il n’y a plus de questions, affiche : "Fin du quiz ! Score : X"
// (avec X le nombre de bonnes réponses).
// 🔴 Niveau 3 – Minuteur par question
// Ajoute un compte à rebours de 10 secondes pour chaque question.
// Si le temps est écoulé, passe à la question suivante et considère la réponse comme fausse.
// Utilise setInterval() et clearInterval() pour gérer le minuteur.
// 🔴🔴 Niveau 4 – Vies et redémarrage
// Ajoute une variable vies = 3.
// Si une mauvaise réponse est donnée (ou si le temps est écoulé), enlève une vie.
// Si vies === 0, affiche "Game Over" et arrête le quiz.
// Ajoute un bouton "Rejouer" pour recommencer le quiz depuis le début.

// 🟢 Niveau 1 – Une seule question
// Crée un objet question avec :
// un intitulé
// un tableau de 3 réponses
// l’index de la bonne réponse
// Affiche la question dans la page avec 3 boutons de réponse.
// Quand l'utilisateur clique sur un bouton, affiche dans la console :
// "Bonne réponse !" ou "Mauvaise réponse."

// ---------------PSEUDO CODE-----------------------
// fichier json avec tableau d'objet [{},{}]
// faire un fetch pour connecter le json au js
// for-each pour prendre chaque élément et vérifier avec console.log si la connexion marche
//afficher la question avec .innerHTML

fetch("dB.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      console.log(element);
      console.log(element.question);

      let question = document.getElementById("question");
      question.innerHTML = element.question;

      let div = document.getElementById("div");
      // question++

      element["answers"].forEach((e) => {
        let button = document.createElement("button");
        div.appendChild(button);
        button.textContent = e;
        button.addEventListener("click", () => {
          if (element.answers[""] == element.correct) {
            alert("ok");
          } else {
            alert("mauvaise reponse");
          }
        });
      });
    });
  });
