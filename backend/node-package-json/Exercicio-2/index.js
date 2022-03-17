// ************************************  Exercício 2 *************************************

// a) 
const [operation, num1, num2] = [process.argv[2],Number(process.argv[3]),Number(process.argv[4])]

    switch (operation){
        case "add":
            console.log("A soma dos números é:", num1 + num2)
        break;
        case "sub":
            console.log("A subtração dos números é:", num1 + num2)
        break;
        case "mult":
            console.log("A multiplicação dos números é:", num1 + num2)
        break;
        case "div":
            console.log("A divisão dos números é:", num1 + num2)
        break;
    }