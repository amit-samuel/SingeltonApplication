
var pokemonRepository = (function () {
    var pokemonList = [];
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/";

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
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function add(item) {
        if (typeof item.name === "string" && typeof item.heigth === "number") {
            pokemonList.push(item);
        }else {
            console.log("Type of added name or heigth not correct")
        }
    }

    function getAll() {
        return pokemonList;
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
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(item) {
        loadDetails(item).then(function () {
            console.log(item);
        });
    }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList(),
        loadDetails: loadDetails()
    };

})();


function myLoopFunction(pok){
    return (pok.heigth > 1 ?
        creatElement( pok.name + "(" + "height: " + pok.heigth + ")" + "- Wow, that’s big!"):
        creatElement(pok.name + "(" + "height: " + pok.heigth + ")"));
}

function addListItem(pok) {
    creatElement(pok.name);
}

function creatElement(printText) {
    var container = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = printText;
    container.appendChild(listItem);
    listItem.appendChild(button);
    button.addEventListener('click', function (event){
        document.write(event);
        showDetails(printText);
    });
}





/*
pokemonRepository.add({ name: "Pikachu", heigth: 0.3 });
var a = pokemonRepository.getAll();
//a.forEach(myLoopFunction);
//a.filter(filterName(a, "Venusaur"))
a.forEach(addListItem);
*/
pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        addListItem(pokemon);
    });
});