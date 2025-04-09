import { Request, Response } from "express";
import deckModel from "../models/deckSchema";

const decksController = async (req:  Request, res: Response) =>{
    try {
        const response = await deckModel.find()
        
        res.status(200).json({response})
    } catch (error) {
        res.status(400).json({msg:`Erro ao fazer a requisição ${error}`})
    }
}

export default decksController;