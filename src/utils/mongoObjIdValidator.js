// Validator function to check given id is mongodb object id or not
import { Types } from 'mongoose';
export const ObjectId = Types.ObjectId;
export function isValidObjectId(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;        
        return false;
    }
    return false;
}