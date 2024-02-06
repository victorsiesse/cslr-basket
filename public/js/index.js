const accueil = document.getElementById('accueil-nav');
const histoire = document.getElementById('histoire-nav');
const matchs = document.getElementById('matchs-nav');

const accueilContent = document.getElementById('accueil-content');
const histoireContent = document.getElementById('histoire-content');
const matchsContent = document.getElementById('matchs-content');



accueil.onclick = function ()  {
    accueilContent.style.display = 'block';
    histoireContent.style.display = 'none';
    matchsContent.style.display = 'none';
    accueil.classList.add('active');
    histoire.classList.remove('active');
    matchs.classList.remove('active');
}

histoire.onclick = function ()  {
    accueilContent.style.display = 'none';
    histoireContent.style.display = 'block';
    matchsContent.style.display = 'none';
    accueil.classList.remove('active');
    histoire.classList.add('active');
    matchs.classList.remove('active');
}


matchs.onclick = function ()  {
    accueilContent.style.display = 'none';
    histoireContent.style.display = 'none';
    matchsContent.style.display = 'block';
    accueil.classList.remove('active');
    histoire.classList.remove('active');
    matchs.classList.add('active');
}