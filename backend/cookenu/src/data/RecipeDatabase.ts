import { CustomError } from "../error/CustomError";
import { Recipe } from "../model/Recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

  private static TABLE_NAME = "Cookenu_recipes"

  public insertRecipe = async (recipe: Recipe) => {
    try {
      await RecipeDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          author_id: recipe.authorID,
        })
        .into(RecipeDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getAllRecipes = async (): Promise<Recipe[]>  => {
    const getRecipes = await RecipeDatabase.connection
    (RecipeDatabase.TABLE_NAME)
    .select('*');

    return getRecipes
  }


  public getRecipeId = async (id:string) => {
    const recipes = await RecipeDatabase.connection
    .select("id", "title", "description", "created_at")
    .where({id})
    .from(RecipeDatabase.TABLE_NAME)

    return recipes[0]
  }
  
}