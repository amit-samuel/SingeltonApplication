var pokemonRepository = (function () {
    var pokemonList = [
        {
            name: 'Bulbasaur',
            heigth: 0.6,
            type: ['grass', 'poison']
        },
        {
            name: 'Venusaur',
            heigth: 0.8,
            type: ['Monster', 'Grass']
        },
        {
            name: 'Charizard',
            heigth: 1.7,
            type: ['Monster', 'Dragon']
        },
        {
            name: 'Blastoise',
            heigth: 1.6,
            type: ['Monster', 'Water' ]
        }
    ];

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

    return {
        add: add,
        getAll: getAll
    };

})();

function myLoopFunction(pok){
    return (pok.heigth > 1 ?
        console.log( pok.name + "(" + "height: " + pok.heigth + ")" + "- Wow, that’s big!"):
        console.log(pok.name + "(" + "height: " + pok.heigth + ")"));
}
//muss noch fertig
function filterName(a, name){
    return (name ?
        console.log("Pokémon found"):
        console.log("Could not found Pokémon"));
}




pokemonRepository.add({ name: "Pikachu", heigth: 0.3 });
var a = pokemonRepository.getAll();
a.forEach(myLoopFunction);
//a.filter(filterName(a, "Venusaur"))


