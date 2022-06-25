import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness"
import { GetRecipeInput, RecipeInputDTO } from "../model/Recipes";
import { convertDate } from "../services/ConvertDate";

export class RecipeController {
    public createRecipe = async (req: Request, res: Response) => {
        try {

            const { title, description } = req.body;

            const token = req.headers.authorization as string;

            const recipe: RecipeInputDTO = {
                title,
                description,
                token
            }

            await new RecipeBusiness().createRecipe(recipe);

            res.status(201).send({ message: "Receita criada!" });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getAllRecipes = async (req: Request, res: Response) => {
        try {
            const recipeBusiness = new RecipeBusiness();
            const recipes = await recipeBusiness.getRecipes();

            for (let i = 0; i < recipes.length; i++) {
                recipes[i].created_at = convertDate(recipes[i]?.created_at);
            }

            res.status(200).send(recipes)
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getRecipeID = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const token = req.headers.authorization as string;
            const input: GetRecipeInput = {
                    id,
                    token
                }

            const recipeBusiness = new RecipeBusiness();
            const recipeID = await recipeBusiness.getRecipesID(input);

            res.status(200).send({recipeID});            
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}