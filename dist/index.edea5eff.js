function randomizar() {
    var lista = [
        pre1,
        pre2,
        pre3,
        pre4,
        pre5,
        pre6,
        pre7,
        pre8,
        pre9,
        pre10
    ];
    var pregunta = math.randomInt(9);
    return lista[pregunta]();
}
function pre1() {
    var q1 = prompt("\xbfCu\xe1nto mide la Estatua de la libertad, en metros?");
    if (q1 == "93") alert("\xa1Exacto!");
    else if (q1 == "93 metros") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Mide 93 metros.");
}
function pre2() {
    var q1 = prompt("\xbfQu\xe9 area en kil\xf3metros cuadrados ocupa Central Park?");
    if (q1 == "3,41") alert("\xa1Exacto!");
    else if (q1 == "3.41") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Mide 3,41 kil\xf3metros cuadrados.");
}
function pre3() {
    var q1 = prompt("\xbfQu\xe9 criatura se sube a lo alto del Empire State en una famosa pel\xedcula de 1933?").toLocaleLowerCase();
    if (q1 == "king kong") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! La criatura era King Kong.");
}
function pre4() {
    var q1 = prompt("\xbfCu\xe1ntos aeropuertos tiene Nueva York?");
    if (q1 == "3") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Tiene tres: JFK, Newark y La Guardia.");
}
function pre5() {
    var q1 = prompt("\xbfAlrededor de cu\xe1ntas personas pasan diariamente por Times Square?");
    if (q1 == "360.000") alert("\xa1Exacto!");
    else if (q1 == "360,000") alert("\xa1Exacto!");
    else if (q1 == "360000") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Diariamente pasan unas 360,000 personas.");
}
function pre6() {
    var q1 = prompt("\xbfCu\xe1ntos teatros hay en Broadway?");
    if (q1 == "41") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Actualmente hay 41 teatros, cada uno con 500 asientos o m\xe1s.");
}
function pre7() {
    var q1 = prompt("Adem\xe1s de los New York Mets, \xbfqu\xe9 otro equipo de baseball tiene Nueva York?").toLocaleLowerCase();
    if (q1 == "yankees") alert("\xa1Exacto!");
    else if (q1 == "new york yankees") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Nueva York tiene a los New York Mets y a los New York Yankees");
}
function pre8() {
    var q1 = prompt("\xbfQu\xe9 arquitecto espa\xf1ol dise\xf1\xf3 'El \xd3culus', que se encuentra en la zona financiera de Manhattan?").toLocaleLowerCase();
    if (q1 == "calatrava") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Lo dise\xf1\xf3 Santiago Calatrava.");
}
function pre9() {
    var q1 = prompt("\xbfCu\xe1ntos millones de pasajeros pasaron por Ellis Island entre 1892 y 1954?");
    if (q1 == "12") alert("\xa1Exacto!");
    else if (q1 == "12 millones") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Se estima que fueron 12 millones. En esa \xe9poca, la isla actuaba como aduana para aquellos que llegasen por barco a la ciudad.");
}
function pre10() {
    var q1 = prompt("\xbfCu\xe1ntas l\xedneas de metro tiene Nueva York actualmente?");
    if (q1 == "28") alert("\xa1Exacto!");
    else alert("\xa1No exactamente! Tiene 28 l\xedneas, compuestas por colores, letras y n\xfameros que indican cada ruta y su extensi\xf3n.");
}
function recibido() {
    alert("\xa1Recibido!");
}

//# sourceMappingURL=index.edea5eff.js.map
