/*
 *
 * Monsieur Conjugueur
 * https://github.com/Alexzgreat/MonsieurConjugueur
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
            book = data.present,
            count = book.length,
            i;

        target.innerHTML = "";

        // Find correct conjugation
        if (count > 0) {
            for (i = 0; i < count; i = i + 1) {
                var obj = book[i];
                // Go though exceptions (irregular verbs)
                switch (txt) {
                    case "être":
                        target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + book[0].je + '</td><td> Nous ' + book[0].nous + '</td></tr><tr><td> Tu ' + book[0].tu + '</td><td> Vous ' + book[0].vous + '</td></tr><tr><td> Il/Elle ' + book[0].ilelle + '</td><td> Ils/Elles ' + book[0].ilselles + '</td></tr></tbody></table>';
                        break;
                    case "faire":
                        target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + book[1].je + '</td><td> Nous ' + book[1].nous + '</td></tr><tr><td> Tu ' + book[1].tu + '</td><td> Vous ' + book[1].vous + '</td></tr><tr><td> Il/Elle ' + book[1].ilelle + '</td><td> Ils/Elles ' + book[1].ilselles + '</td></tr></tbody></table>';
                        break;
                    case "avoir":
                        target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> J' + book[2].je + '</td><td> Nous ' + book[2].nous + '</td></tr><tr><td> Tu ' + book[2].tu + '</td><td> Vous ' + book[2].vous + '</td></tr><tr><td> Il/Elle ' + book[2].ilelle + '</td><td> Ils/Elles ' + book[2].ilselles + '</td></tr></tbody></table>';
                        break;
                    case "manger":
                        target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + book[3].je + '</td><td> Nous ' + book[3].nous + '</td></tr><tr><td> Tu ' + book[3].tu + '</td><td> Vous ' + book[3].vous + '</td></tr><tr><td> Il/Elle ' + book[3].ilelle + '</td><td> Ils/Elles ' + book[3].ilselles + '</td></tr></tbody></table>';
                        break;
                }
                // Conjugation of regular -ER verbs
                if (txt.indexOf('er') !== -1 && txt.indexOf('er') === txt.length - 2 && txt !== "manger") {
                    var er = txt.substring(0, txt.length - 2);
                    target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + er + 'e</td><td> Nous ' + er + 'ons</td></tr><tr><td> Tu ' + er + 'es</td><td> Vous ' + er + 'ez</td></tr><tr><td> Il/Elle ' + er + 'e</td><td> Ils/Elles ' + er + 'ent</td></tr></tbody></table>';
                }
                // Conjugation of regular -IR verbs
                if (txt.indexOf('ir') !== -1 && txt.indexOf('ir') === txt.length - 2 && txt !== "avoir") {
                    var ir = txt.substring(0, txt.length - 2);
                    target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + ir + 'is</td><td> Nous ' + ir + 'issons</td></tr><tr><td> Tu ' + ir + 'is</td><td> Vous ' + ir + 'issez</td></tr><tr><td> Il/Elle ' + ir + 'it</td><td> Ils/Elles ' + ir + 'issent</td></tr></tbody></table>';
                }
                // Conjugation of regular -RE verbs
                if (txt.indexOf('re') !== -1 && txt.indexOf('re') === txt.length - 2 && txt !== "être" && txt !== "faire") {
                    var re = txt.substring(0, txt.length - 2);
                    target.innerHTML = '<table class="table table-hover"><thead><tr><td><strong>Singulier</strong></td><td><strong>Pluriel</strong></td></tr></thead><tbody><tr><td> Je ' + re + 's</td><td> Nous ' + re + 'ons</td></tr><tr><td> Tu ' + re + 's</td><td> Vous ' + re + 'ez</td></tr><tr><td> Il/Elle ' + re + '</td><td> Ils/Elles ' + re + 'ent</td></tr></tbody></table>';
                }
            }
        }

    });
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