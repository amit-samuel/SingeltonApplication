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
function myFunction(a) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = a;
}


for(var i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].heigth > 1) {
        document.write(myFunction(pokemonList[i].name + "(" + "height: " + pokemonList[i].heigth + ")" + "- Wow, that’s big!"));
    } else {
        document.write(myFunction(pokemonList[i].name + "(" + "height: " + pokemonList[i].heigth + ")"));
    }
}

console.log(pokemonList[a].name);