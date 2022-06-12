import { Request, Response } from 'express';
import { FriendBusiness } from '../business/friendBusiness';

export class FriendController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { idUser } = req.params;

            const {friendId} = req.body;

            const friendBusiness = new FriendBusiness();
            await friendBusiness.create({idUser, friendId});
            
            res.status(201).send({ message: "Amizade criada com sucesso!" });
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }   
    }

    public deleteFriendship = async (req: Request, res: Response): Promise<any> => {
        try {
            const idUser = req.params.userId;

            const friendId = req.query.idFriend as string;
            
            const friendBusiness = new FriendBusiness();
            await friendBusiness.deleteFriend(idUser, friendId);
            
            res.status(200).send({ message: "Amizade deletada com sucesso!" });
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }   
    }
}