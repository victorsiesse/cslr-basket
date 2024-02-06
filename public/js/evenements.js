const club = document.getElementById('club');
const plateau = document.getElementById('plateau');
const stage = document.getElementById('stage');

const evenementsClub = document.getElementsByClassName('evenements-club')[0];
const evenementsPlateaux = document.getElementsByClassName('evenements-plateaux')[0];
const evenementsStages = document.getElementsByClassName('evenements-stages')[0];



club.onclick = function ()  {
    evenementsClub.style.display = 'block';
    evenementsPlateaux.style.display = 'none';
    evenementsStages.style.display = 'none';
    club.classList.add('active');
    plateau.classList.remove('active');
    stage.classList.remove('active');
}

plateau.onclick = function ()  {
    evenementsClub.style.display = 'none';
    evenementsPlateaux.style.display = 'block';
    evenementsStages.style.display = 'none';
    club.classList.remove('active');
    plateau.classList.add('active');
    stage.classList.remove('active');
}


stage.onclick = function ()  {
    evenementsClub.style.display = 'none';
    evenementsPlateaux.style.display = 'none';
    evenementsStages.style.display = 'block';
    club.classList.remove('active');
    plateau.classList.remove('active');
    stage.classList.add('active');
}


