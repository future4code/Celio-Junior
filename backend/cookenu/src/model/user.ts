export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface EditUserInputDTO {
  name: string;
  id: string;
  token: string
}

export interface EditUserInput {
  name: string;
  id: string;
}
