function augmenter(id) {
    const input = document.getElementById(id);
    let valeur = parseInt(input.value);
    input.value = valeur + 1;
    if (id === 'enfants') mettreAJourAgesEnfants();
}

function diminuer(id) {
    const input = document.getElementById(id);
    let valeur = parseInt(input.value);
    if (valeur > 0) input.value = valeur - 1;
    if (id === 'enfants') mettreAJourAgesEnfants();
}

function mettreAJourAgesEnfants() {
    const agesEnfants = document.getElementById('agesEnfants');
    agesEnfants.innerHTML = '';
    const nombreEnfants = parseInt(document.getElementById('enfants').value);
    for (let i = 0; i < nombreEnfants; i++) {
        const label = document.createElement('label');
        label.innerText = `Âge enfant ${i + 1} : `;
        const input = document.createElement('input');
        input.type = 'number';
        input.min = 0;
        input.max = 17;
        input.name = `ageEnfant${i + 1}`;
        agesEnfants.appendChild(label);
        agesEnfants.appendChild(input);
    }
}

function soumettreFormulaire() {
    const adultes = document.getElementById('adultes').value;
    const enfants = document.getElementById('enfants').value;
    const chambres = document.getElementById('chambres').value;
    const voyageTravail = document.getElementById('voyageTravail').checked ? 'Oui' : 'Non';

    document.getElementById('confirmationAdultes').innerText = adultes;
    document.getElementById('confirmationEnfants').innerText = enfants;
    document.getElementById('confirmationChambres').innerText = chambres;
    document.getElementById('confirmationVoyageTravail').innerText = voyageTravail;
}


