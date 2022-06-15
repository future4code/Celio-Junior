import { FriendsDatabase } from "../data/friendDatabase";
import { Feed, FriendsDTO } from "../model/friendsDTO";

export class FriendBusiness {
    async create(friend: FriendsDTO): Promise<void> {
        const { idUser, friendId } = friend;

        if (!friendId) {
            throw new Error("Usuário não encontrado (friendId)");
        }

        const createFriend = await new FriendsDatabase();
        createFriend.create({idUser, friendId});
    }

    public deleteFriend = async (idUser: string, friendId: string): Promise<void> => {
        // const { idUser, friendId } = ;
        
        const deleteFriend = new FriendsDatabase();

        await deleteFriend.delFriendship(idUser, friendId);
    }

    async feedPost (req: Feed):Promise<any> {

        if(!req){
            const message = "necessário id do usuario"
            throw new Error(message)
        }

        const feedFriends = await new FriendsDatabase().feed(req)

        return feedFriends
    }
}