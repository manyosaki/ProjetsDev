document.getElementById("calculateButton").addEventListener("click", calculerFacture);

function calculerFacture() {

    var p1 = Number(document.getElementById("p1").value);
    var q1 = Number(document.getElementById("q1").value);
    var resultat1 = p1 * q1;
    document.getElementById("t1").value = resultat1;


    var p2 = Number(document.getElementById("p2").value);
    var q2 = Number(document.getElementById("q2").value);
    var resultat2 = p2 * q2;
    document.getElementById("t2").value = resultat2;


    var p3 = Number(document.getElementById("p3").value);
    var q3 = Number(document.getElementById("q3").value);
    var resultat3 = p3 * q3;
    document.getElementById("t3").value = resultat3;


    var totalTTC = resultat1 + resultat2 + resultat3;
    document.getElementById("totalTTC").value = totalTTC;
}


document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("p1").value = "";
    document.getElementById("q1").value = "";
    document.getElementById("t1").value = "";

    document.getElementById("p2").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("t2").value = "";

    document.getElementById("p3").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("t3").value = "";

    document.getElementById("totalTTC").value = "";
});