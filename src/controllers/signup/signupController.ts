import { Request, Response } from "express";

const signupController = (req: Request, res: Response) => {
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

    res.status(201).json({ msg: "mensagens" });
    return 
};

export default signupController;
