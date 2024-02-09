const feminin = document.getElementById('fem');
const mixte = document.getElementById('mix');
const masculin = document.getElementById('mas');

const equipesFeminines = document.getElementById('equipes-feminines');
const equipesMixtes = document.getElementById('equipes-mixtes');
const equipesMasculines = document.getElementById('equipes-masculines');



feminin.onclick = function ()  {
    equipesFeminines.style.display = 'block';
    equipesMixtes.style.display = 'none';
    equipesMasculines.style.display = 'none';
    feminin.classList.add('active');
    mixte.classList.remove('active');
    masculin.classList.remove('active');
}

mixte.onclick = function ()  {
    equipesFeminines.style.display = 'none';
    equipesMixtes.style.display = 'block';
    equipesMasculines.style.display = 'none';
    feminin.classList.remove('active');
    mixte.classList.add('active');
    masculin.classList.remove('active');
}


masculin.onclick = function ()  {
    equipesFeminines.style.display = 'none';
    equipesMixtes.style.display = 'none';
    equipesMasculines.style.display = 'block';
    feminin.classList.remove('active');
    mixte.classList.remove('active');
    masculin.classList.add('active');
}


