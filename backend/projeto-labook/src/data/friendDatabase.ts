import { Feed, FriendsDTO } from "../model/friendsDTO";
import { BaseDataBase } from "./baseDatabase";

export class FriendsDatabase extends BaseDataBase {
    private static TABLE_NAME = "labook_friends";

    async create(friend: FriendsDTO): Promise<void>{
        await FriendsDatabase.connection
        .insert({
            user_id: friend.idUser,
            friend_id: friend.friendId
        })
        .into(FriendsDatabase.TABLE_NAME)

        await FriendsDatabase.connection
        .insert({
            user_id: friend.friendId,
            friend_id: friend.idUser
        })
        .into(FriendsDatabase.TABLE_NAME)
    }

    public delFriendship = async (idUser: string, friendId: string): Promise<void> =>{
        await FriendsDatabase.connection
        .delete()
        .where({
            user_id: idUser,
            friend_id: friendId
        })
        .orWhere({
            user_id: friendId,
            friend_id: idUser
        })
        .from(FriendsDatabase.TABLE_NAME)
    }

    async feed (req: Feed): Promise<any>{
        const feedPosts = await FriendsDatabase.connection
        .select("*")
        .from(FriendsDatabase.TABLE_NAME)
        .leftJoin("labook_posts", 
                  "labook_friends.friend_id", 
                  "labook_posts.author_id")
        .where({user_id: req.userId})
        .orderBy("labook_posts.created_at", "desc")
        .limit(5)

        return feedPosts
    }
}