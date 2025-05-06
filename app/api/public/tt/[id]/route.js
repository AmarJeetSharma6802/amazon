import { NextResponse } from "next/server";
import DBconnect from "../../../lib/DBconnect";
import itemApi from "../../../model/restApi.model";


export async function GET(req,{params}){
    await DBconnect()

    const {id} = params
    const findItem = await itemApi.findById(id)

    if(!findItem){
        return NextResponse.json({message:"findItem not found"}, {status:404})
    }
    return NextResponse.json(
        {message:"find succefully "}
    ,{status:200}
    )
}