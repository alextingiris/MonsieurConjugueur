/*
 *
 * Monsieur Conjugueur
 * https://github.com/alexzgreat/MonsieurConjugueur
 * http://alex.tingiris.com/FrenchConjugator
 *
*/

// Setting up for ajax call

function getHTTPObject() {
    var xhr = new XMLHttpRequest();
    return xhr;
}

function ajaxCall(dataUrl, outputElement, callback) {
    var request = getHTTPObject();

    outputElement.innerHTML = "Loading";

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var verbs = JSON.parse(request.responseText);

            if (typeof callback === "function") {
                callback(verbs);
            }
        }
    }
    request.open("GET", dataUrl, true);
    request.send(null);
}

//Conjugating

function Conjugate() {
    var output = document.getElementById("result");
    ajaxCall("data/data.txt", output, function (data) {
        var orginal = document.getElementById("verbText").value,
            nospace = orginal.replace(/\s/g, ''),
            txt = nospace.toLowerCase();

        var target = document.getElementById("result"),
            book = data.présent,
            count = book.length,
            i;

        target.innerHTML = "";

        // Find correct conjugation
        // Go though exceptions (irregular verbs)
        $.each(book, function (i, v) {
            if (v.infinitif == txt) {
                target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + v.je + '</td><td> Nous ' + v.nous + '</td></tr><tr><td> Tu ' + v.tu + '</td><td> Vous ' + v.vous + '</td></tr><tr><td> Il/Elle ' + v.ilelle + '</td><td> Ils/Elles ' + v.ilselles + '</td></tr></tbody></table>';
                return;
            }
        });
        // Conjugation of regular -ER verbs
        if (txt.indexOf('er') !== -1 && txt.indexOf('er') === txt.length - 2) {
            var er = txt.substring(0, txt.length - 2);
            target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + er + 'e</td><td> Nous ' + er + 'ons</td></tr><tr><td> Tu ' + er + 'es</td><td> Vous ' + er + 'ez</td></tr><tr><td> Il/Elle ' + er + 'e</td><td> Ils/Elles ' + er + 'ent</td></tr></tbody></table>';
        }
        // Conjugation of regular -IR verbs
        if (txt.indexOf('ir') !== -1 && txt.indexOf('ir') === txt.length - 2) {
            var ir = txt.substring(0, txt.length - 2);
            target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + ir + 'is</td><td> Nous ' + ir + 'issons</td></tr><tr><td> Tu ' + ir + 'is</td><td> Vous ' + ir + 'issez</td></tr><tr><td> Il/Elle ' + ir + 'it</td><td> Ils/Elles ' + ir + 'issent</td></tr></tbody></table>';
        }
        // Conjugation of regular -RE verbs
        if (txt.indexOf('re') !== -1 && txt.indexOf('re') === txt.length - 2) {
            var re = txt.substring(0, txt.length - 2);
            target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + re + 's</td><td> Nous ' + re + 'ons</td></tr><tr><td> Tu ' + re + 's</td><td> Vous ' + re + 'ez</td></tr><tr><td> Il/Elle ' + re + '</td><td> Ils/Elles ' + re + 'ent</td></tr></tbody></table>';
        }
    }
    )
}

// Ability to add diacritic marks

function aigu() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "é";
    txt.focus();
}

function aGrave() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "à";
    txt.focus();
}

function eGrave() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "è";
    txt.focus();
}

function uGrave() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ù";
    txt.focus();
}

function aCirconflexe() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "â";
    txt.focus();
}

function eCirconflexe() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ê";
    txt.focus();
}

function iCirconflexe() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "î";
    txt.focus();
}

function oCirconflexe() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ô";
    txt.focus();
}

function uCirconflexe() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "û";
    txt.focus();
}

function eTrema() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ë";
    txt.focus();
}

function iTrema() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ï";
    txt.focus();
}

function uTrema() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ü";
    txt.focus();
}

function cedille() {
    var txt = document.getElementById("verbText");
    txt.value = txt.value + "ç";
    txt.focus();
}
