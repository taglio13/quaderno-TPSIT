// TODO scrivi lo script

const aInput = document.getElementById("a");   // le variabili con const non possono essere riassegnabili, mentre quelle con let sì
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");

const btnCalcola = document.getElementById("btn-calcola");
const risultato1 = document.getElementById("soluzione1");
const risultato2 = document.getElementById("soluzione2");

btnCalcola.addEventListener("click", () => {
    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let c = parseFloat(cInput.value);

    risultato1.textContent = "";
    risultato2.textContent = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        risultato1.textContent = "Inserisci tutti i valori (a, b, c)";
        return;
    }

    let delta = (b**2) - (4*a*c);

    if  (delta > 0) {
        let x1 = (-b + (Math.sqrt(delta))) / a*2;
        let x2 = (-b - (Math.sqrt(delta))) / a*2;
        risultato1.textContent = "x1 = " + x1;
        risultato2.textContent = "x2 = " + x2;
        console.log("due solutzioni reali distinte");
    } else if (delta == 0) {
        let x1 = -b / (a*2);
        risultato1.textContent = "x = " + x1;
        console.log("una soluzione doppia");
    } 
    else {
        risultato1.textContent = "nesuuna soluzione reale"
        console.log("nesuuna soluzione reale");
    }
});
