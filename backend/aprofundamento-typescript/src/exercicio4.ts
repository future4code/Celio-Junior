//a)
type pokemon = {
    name: string
    types: string
    healthPoints: number
  }
  
  const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28,
  }
  
  const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31,
  }
  
  const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35,
  }
  
  //b)
  // Executar no bash o comando "tsc 'nome do arquivo'" estando na pasta do arquivo com o tsconfig.json.
  
  //c)
  // Adicionaria "./src" antes do 'nome do arquivo', e ficaria "tsc ./src/'nome do arquivo'"
  
  //d)
  // No terminal digitar tsc sem o nome do arquivo na pasta que estejam os arquivos .ts