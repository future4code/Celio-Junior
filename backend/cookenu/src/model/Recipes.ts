export interface Recipe {
    id: string;
    title: string;
    description: string;
    authorID: string;
  };
  
  export interface RecipeInputDTO {
    title: string;
    description: string;
    token: string;
  }

  export interface RecipeOutput {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
  }

  export interface GetRecipeInput {
    id: string;
    token: string;
  }