import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError, InvalidRecipes, InvalidToken } from "../error/CustomError";
import { GetRecipeInput, Recipe, RecipeInputDTO, RecipeOutput } from "../model/Recipes";
import { getData } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";


export class RecipeBusiness {
    public createRecipe = async (input: RecipeInputDTO): Promise<void> => {
        try {
            let { title, description, token } = input;

            if (!title || !description || !token) {
                throw new CustomError(400, "Os campos não podem estar vazios");
            }

            const getToken = getData(token)
            const id = generateId();

            const recipe: Recipe = {
                id,
                title,
                description,
                authorID: getToken.id
            }

            await new RecipeDatabase().insertRecipe(recipe);

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public getRecipes = async (): Promise<any[]> => {
        const recipesDatabase = new RecipeDatabase();
        const recipes = await recipesDatabase.getAllRecipes()

        if (recipes.length === 0) {
            throw new InvalidRecipes()
        }

        return recipes
    }

    public getRecipesID = async (input: GetRecipeInput): Promise<RecipeOutput> => {
        if (!input.token) {
            throw new InvalidToken();
        }
        
        if (!input.id) {
            throw new InvalidRecipes();
        }

        const recipe = await new RecipeDatabase().getRecipeId(input.id);

        const outputRecipe: RecipeOutput = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.created_at
        }
    
        return outputRecipe
    }    

}
