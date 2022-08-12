export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido!")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Formato de email inválido!")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida!")
    }
}

export class InvalidAge extends CustomError{ 
    constructor(){
        super(400, "Você precisa ter entre 18 e 60 anos para contratar este serviço!")
    }
}

export class InvalidCPF extends CustomError{ 
    constructor(){
        super(400, "Formato de CPF inválido! ex:(000.000.000-00)")
    }
}

export class InvalidGender extends CustomError{ 
    constructor(){
        super(400, "Informe um sexo! ex:(M / F)")
    }
}

export class InvalidMonthlyIncome extends CustomError{ 
    constructor(){
        super(400, "Informe uma renda mensal! ex:(2000.00)")
    }
}

export class EmptyFields extends CustomError {
    constructor(){
      super(400, "Os campos não podem estar vazios")
    }
}


export class Contribution extends CustomError {
    constructor(){
      super(400, "O valor de entrada é menor do que o aporte minimo")
    }
}


