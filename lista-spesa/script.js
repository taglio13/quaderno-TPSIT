// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const prodInput = document.getElementById("item");
const btnAggiungi = document.getElementById("btn-aggiungi");
const messaggioErrore = document.getElementById("errore");
const listaContainer = document.getElementById("lista");

function aggiungiProdotto() {
    let testoInserito = prodInput.value;

    if (testoInserito == "") {
        messaggioErrore.textContent = "ERRORE: Inserire un prodotto!";
    }
    
    const singoloProd = document.createElement("li");
    singoloProd.textContent = testoInserito;

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "Rimuovi";

    btnRimuovi.addEventListener("click", () => {
        singoloProd.remove();
    });

    singoloProd.appendChild(btnRimuovi);

    listaContainer.appendChild(singoloProd);

    prodInput.value = "";
}

btnAggiungi.addEventListener("click", () => {
    aggiungiProdotto();
});