const feminines = document.getElementById('feminines');
const mixtes = document.getElementById('mixtes');
const masculines = document.getElementById('masculines');

const equipesFeminines = document.getElementById('equipes-feminines');
const equipesMixtes = document.getElementById('equipes-mixtes');
const equipesMasculines = document.getElementById('equipes-masculines');

equipesMixtes.style.display = 'none';
equipesMasculines.style.display = 'none';

feminines.onclick = function ()  {
  equipesFeminines.style.display = 'block';
  equipesMixtes.style.display = 'none';
  equipesMasculines.style.display = 'none';
  feminines.classList.add('active');
  mixtes.classList.remove('active');
  masculines.classList.remove('active');
}

mixtes.onclick = function ()  {
  equipesFeminines.style.display = 'none';
  equipesMixtes.style.display = 'block';
  equipesMasculines.style.display = 'none';
  feminines.classList.remove('active');
  mixtes.classList.add('active');
  masculines.classList.remove('active');
}

masculines.onclick = function ()  {
  equipesFeminines.style.display = 'none';
  equipesMixtes.style.display = 'none';
  equipesMasculines.style.display = 'block';
  feminines.classList.remove('active');
  mixtes.classList.remove('active');
  masculines.classList.add('active');
}


