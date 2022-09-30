const logo = document.createElement('img');
logo.src = 'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png';
logo.className = 'pokeLogo';
document.body.appendChild(logo);

const pokemon = document.location.search;
const id = pokemon.replace('?', '');
aparecer();
function aparecer(){(getPoke(id))};

function getPoke(id) {
    fetch('https://prof-poke-api.herokuapp.com/api/pokemon/' + id)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Poke data:', data);
                showPoke(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showPoke(id) {
    if (!id) return;
    let divName = document.createElement('div');
    let divImage = document.createElement('img');
    let divAtk = document.createElement('div');
    let divDef = document.createElement('div');
    let divDefs = document.createElement('div');
    let divAtks = document.createElement('div');

    divImage.src = id.url_icon;
    divImage.className = 'imgPoke';
    divName.innerText = id.name;
    divAtk.innerText = "Atk: " + id.atk;
    divDef.innerText = "Def: " + id.def;
    divAtks.innerText = "Atks: " + id.atks;
    divDefs.innerText = "Defs: " + id.defs;
    
    const info = document.createElement('div');
    info.className = 'info';

    document.body.appendChild(divImage);
    info.appendChild(divName);
    document.body.appendChild(info);
    info.appendChild(divAtk);
    info.appendChild(divDef);
    info.appendChild(divAtks);
    info.appendChild(divDefs);
}