var pokemonList = [
    {
        name: 'Bulbasaur',
        heigth: 7,
        type: ['grass', 'poison']
    },
    {
        name: 'Venusaur',
        heigth: 2,
        type: ['Monster', 'Grass']
    },
    {
        name: 'Charizard',
        heigth: 1.7 ,
        type: ['Monster', 'Dragon']
    },
    {
        name: 'Blastoise',
        heigth: 1.6,
        type: ['Monster', 'Water' ]
    }
    ];


for(i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name);
    console.log(pokemonList[i].name);
}