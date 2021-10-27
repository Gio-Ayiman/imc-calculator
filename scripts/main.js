function getImc() {
  let getPoids = document.getElementById("input-poids").value;
  let getTaille = document.getElementById("input-taille").value;
  const age = document.getElementById("input-age").value;
  const sexe = document.getElementById("select-sexe").value;

  if (getPoids < 1 || getTaille < 1) {
    alert("Vous devez entrer des valeurs positives");
  } else if (age == "" || sexe == "") {
    alert("Vous devez renseigner tous les champs");
  } else if (getTaille < 40 || getTaille > 280) {
    alert("Entrez une valeur réelle de taille");
  } else if (getPoids > 350) {
    alert("Entrez une valeur réelle de poids");
  } else if (getPoids >= 30 && getTaille < 50) {
    alert("Entrez des valeurs réelles");
  } else {
    let taille = getTaille * 0.01;
    let imc = (getPoids / taille ** 2).toFixed(2);
    return imc;
  }
}

function afficheResultat() {
  let paragraph = document.getElementById("span-resultat");
  let span = document.getElementById("span-text-resultat");
  let cercle = document.getElementById("cercle-resultat");
  const myDivMessage = document.getElementById("div-paragraph");
  const imc = getImc();

  myDivMessage.style.visibility = "visible";

  if (imc != undefined) {
    paragraph.innerHTML = imc;
  }

  if (imc < 18.5) {
    span.innerHTML = "insuffisance pondérale";
    cercle.style.backgroundColor = "#FF7A00";
  } else if (imc >= 18.5 && imc <= 25) {
    span.innerHTML = "corpulence normale";
    cercle.style.backgroundColor = "#00cd52";
  } else if (imc > 25 && imc <= 30) {
    span.innerHTML = "surpoids";
    cercle.style.backgroundColor = "#FF7A00";
  } else if (imc > 30 && imc <= 35) {
    span.innerHTML = "obésité modérée";
    cercle.style.backgroundColor = "red";
  } else if (imc > 35 && imc <= 40) {
    span.innerHTML = "obésité sévere";
    cercle.style.backgroundColor = "red";
  } else if (imc > 40) {
    span.innerHTML = "obésité morbide";
    cercle.style.backgroundColor = "red";
  }
}
