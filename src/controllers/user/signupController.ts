import { Request, Response } from "express";
import User from "../../models/userSchema";
import { criptPassword } from "../../utils/criptPassword";

const signupController = async (req: Request, res: Response) => {
    const { user, password, confirm_password } = req.body;

    if (!user) {
        res.status(400).json({ msg: "Usuário não pode ficar em branco." });
        return 
    }

    if (!password) {
        res.status(400).json({ msg: "Password não pode ficar em branco." });
        return 
    }

    if (password !== confirm_password) {
        res.status(400).json({ msg: "As senhas não coincidem." });
        return 
    }

    const ExistUser = await User.findOne({user});

    if(ExistUser){
        res.status(400).json({msg: "Usuario ja existe."});
        return
    }

    const hashPassword = await criptPassword(password);

    const newUser = await User.create({
        user: user,
        password: hashPassword,
    });

    res.status(201).json({ msg: "Usuario cadastrado com sucesso."});
    return 
};

export default signupController;
