import mongoose, { Schema, Document } from "mongoose";

interface IDeck extends Document {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    mitologia: string;
    tipo: string;
    nivel: number;
    atributos: Record<string,number>;
    imagem: string;
    superTrunfo: boolean;
}

const deckSchema = new Schema<IDeck>({
    id:{type: Number, required: true},
    nome:{type: String},
    descricao:{type: String},
    categoria:{type: String},
    mitologia:{type: String},
    tipo: {type: String},
    nivel:{type: Number},
    atributos:{type: Map, of: Number},
    imagem:{type: String},
    superTrunfo:{type: Boolean}
});

const deckModel = mongoose.model<IDeck>("Deck", deckSchema);

export default deckModel;