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
        pokemonList.push(item);
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
    console.log(pok.name + "(" + "height: " + pok.heigth + ")")
);
}
//console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
var a = pokemonRepository.getAll();
console.log(a.forEach(myLoopFunction));
