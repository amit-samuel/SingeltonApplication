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


Object.keys(pokemonList).forEach(function (property) {
console.log(pokemonList[property]);
});