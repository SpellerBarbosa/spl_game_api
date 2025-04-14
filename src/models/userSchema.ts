import mongoose, {Schema, Document} from "mongoose";

interface IDeck extends Document{
    user: string,
    password: string,
}

const userSchema = new Schema<IDeck>({
    user:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }
});

const User = mongoose.model<IDeck>('User', userSchema);
export default User;