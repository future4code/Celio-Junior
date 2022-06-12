import { FriendsDatabase } from "../data/friendDatabase";
import { FriendsDTO } from "../model/friendsDTO";

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
}