
import {v4 as uuidv4 } from 'uuid'
import { databaseClient } from '../database/database'
import {VirusDocument} from '../../shared'
function collection (){
    return databaseClient.db(process.env.MONGODB_DATABASE!).collection<VirusDocument>("virus")
}

export async function createVirus(name:string, code:string){
    const virus :VirusDocument = {
        _id: uuidv4(),
        id: uuidv4(),
        name,
        code
    }

    const coll = await collection()
    const result = await coll.insertOne(virus);
    if(result.acknowledged) return virus

    throw new Error()
}

export async function getVirus(){
    const coll = collection();
    return coll.find({}).toArray();
}
export async function getVirusById(virusId: string){
    const coll = await collection()
    return coll.findOne({id: virusId})
}