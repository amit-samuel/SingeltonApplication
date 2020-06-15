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
            item.imageUrl = details.sprites.front_default;
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

    function showModal(pokemon) {
        var modalContainer = document.querySelector('#modal-container');

        // Clear all existing modal content

        modalContainer = ""; //
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
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
        modalContainer.addEventListener('click', (e) => {                          //listening for an event (click) anywhere on the modalContainer
            var target = e.target;
            console.log(e.target)
            if (target === modalContainer) {
                hideModal();
            }
        });
    }

    function showDialog(title, text) {
        showModal(title, text);

        // We want to add a confirm and cancel button to the modal
        var modal = modalContainer.querySelector('.modal');

        var confirmButton = document.createElement('button');
        confirmButton.classList.add('modal-confirm');
        confirmButton.innerText = 'Confirm';

        var cancelButton = document.createElement('button');
        cancelButton.classList.add('modal-cancel');
        cancelButton.innerText = 'Cancel';

        modal.appendChild(confirmButton);
        modal.appendChild(cancelButton);

        // We want to focus the confirmButton so that the user can simply press Enter
        confirmButton.focus();

        // Return a promise that resolves when confirmed, else rejects
        return new Promise((resolve, reject) => {
            cancelButton.addEventListener('click', hideModal);
            confirmButton.addEventListener('click', () => {
                dialogPromiseReject = null; // Reset this
                hideModal();
                resolve();
            });

            // This can be used to reject from other functions
            dialogPromiseReject = reject;
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
            //pokemonRepository.showDetails(pokemone);
            // log in the console the pokemone object
            showModal(pokemone);
        });
    }

    var dialogPromiseReject; // This can be set later, by showDialog

    function hideModal() {
        var modalContainer = document.querySelector('#modal-container');

        modalContainer.classList.remove('is-visible');
        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
        }
    }



    window.addEventListener('keydown', (e) => {
        var modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    document.querySelector('#show-dialog').addEventListener('click', () => {
        showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
            alert('confirmed!');
        }, () => {
            alert('not confirmed');
        });
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
        showDialog: showDialog
    };
})();


    pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    })
    });


//Modal




