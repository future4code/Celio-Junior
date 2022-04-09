export const Errors: { [chave: string]: {status: number, message: string} } = {
    BAD_REQUEST: {status:400, message:"Valores incorretos"},
    NOT_AUTHORIZED: {status: 401, message: "Criação de conta não autorizada, pois o usuário não possui 18 anos!"},
    NOT_FOUND: {status: 404, message: "CPF não encontrado ou formato inválido! ex.(000.000.000-00)"},
    CONFLICT: {status: 409, message: "Já existe um cliente com este CPF!"},
 }