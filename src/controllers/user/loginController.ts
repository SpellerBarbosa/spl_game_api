import { Request, Response } from "express";
import User from "../../models/userSchema";
import { comparePassword } from "../../utils/criptPassword";


const loginController = async (req: Request, res: Response) =>{
    const {user, password} = req.body;
    console.log(user, password)
    if(!user){
        res.status(400).json({msg: "Digite um usuario valido."});
        return
    }

    if(!password){
        res.status(400).json({msg: "Senha invalida"});
        return
    }

    const userExist = await User.findOne({ user });

    if(!userExist){
        res.status(400).json({msg:"Usuario nao cadastrado."});
        return
    }

    const isMatch = await comparePassword(user.password, password);

    if(!isMatch){
        res.status(400).json({msg:"Senha inválida."});
        return
    }

    res.status(200).json({msg: "Login bem sucedido"});
    return
}

export default loginController;