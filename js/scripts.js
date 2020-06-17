//IIFE
var pokemonRepository = (function () {
    var pokemonList = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    var pokemontDetails = [];

    function add(item) {
        pokemonList.push(item);
    }
    function getAll() {
        return pokemonList;
    }
    function addDetails() {
        pokemontDetails.push(item);
    }
    
    function loadList() {
        return fetch(apiUrl).then(function (response) {
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
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            return item;

        }).catch(function (e) {
            console.error(e);
        });
    }
    
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
        })
    }

    function showModal(pokemon) {
        var tmp = loadDetails(pokemon);
        var modalContainer = document.querySelector('#modal-container');

        // Clear all existing modal content
        modalContainer.innerHTML = ''; //
        var modal = document.createElement('div');
        modal.classList.add('modal');
        // Add the new modal content
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
        var titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
        var contentElement = document.createElement('p');
        contentElement.innerText = pokemon.height;
        var imgElement = document.createElement('img');
        imgElement.src = pokemon.imageUrl;
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imgElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (e) => {
            var target = e.target;
            console.log(e.target)
            if (target === modalContainer) {
                hideModal();
            }
        });
    }

    function addListItem(pokemone) {
        var container = document.querySelector('.pokemon-list');
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = pokemone.name;
        container.appendChild(listItem); //object breaks
        listItem.appendChild(button);
        button.addEventListener('click', function (event) {
            showDetails(pokemone);
        });
    }



    function hideModal() {
        var modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

    }



    window.addEventListener('keydown', (e) => {
        var modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });


    return{
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal,
        addListItem: addListItem,

    };
})();


    pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    })
    });







