import bcrypt from 'bcrypt';


export const criptPassword = async (password: string): Promise<string> =>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

export const comparePassword = async(password: string, hashPassword: string): Promise<boolean> =>{
    const isMatch = await bcrypt.compare(password, hashPassword);

    if(isMatch){
        return true;
    }else{
        return false;
    }
}
