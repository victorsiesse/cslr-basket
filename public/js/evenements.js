const club = document.getElementById('club');
const plateau = document.getElementById('plateaux');
const stage = document.getElementById('stages');

const evenementsClub = document.getElementById('evenements-club');
const evenementsPlateaux = document.getElementById('evenements-plateaux');
const evenementsStages = document.getElementById('evenements-stages');

evenementsPlateaux.style.display = 'none';
evenementsStages.style.display = 'none';


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


