//IIFE
var pokemonRepository = (function () {
    var pokemonList = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(item) {
        pokemonList.push(item);
    }
    function getAll() {
        return pokemonList;
    }
    
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            debugger;
            return response.json();

        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            })
        }).catch(function (e) {
            console.error(e);
        })
    }
    
    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            //item.imageUrl = details.sprites.front_default; //do not know sprities ???
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    
    function showDetails(item) {
        loadDetails(item).then(function () {
        })
    }

    return{
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

function addListItem(pokemone) {
        var container = document.querySelector('.pokemon-list');
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = pokemone.name;
        container.appendChild(listItem); //object breaks
        listItem.appendChild(button);
        button.addEventListener('click', function (event) {
            pokemonRepository.showDetails(pokemone);
        });
}
    pokemonRepository.loadList().then(function () {

    pokemonRepository.getAll().forEach(function (pokemon) {
        addListItem(pokemon);
    })
    })