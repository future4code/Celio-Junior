function checaTriangulo(a: number, b: number, c: number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
console.log('Triângulo com todos lados iguais:',checaTriangulo(10,10,10))
console.log('Triângulo com dois lados iguais:',checaTriangulo(5,3,3))
console.log('Triângulo com lados diferentes:',checaTriangulo(1,3,7))