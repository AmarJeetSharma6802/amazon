import itemApi from "../../model/restApi.model.js"
import DBconnect from "../../lib/DBconnect.js"


export async function GET(req){
    await DBconnect()

    try {
        const {searchParams} = new URL(req.url)
        const query = searchParams.get("query") || "";

        const results = await itemApi.find({
            name:{$regex :query ,$options:"i" },
        });

        return Response.json({
            message: "Search results",
            results,
        })
        
    } catch (error) {
        return Response.json(
            { message: "Search failed", error: error.message },
            { status: 500 }
          ); 
    }
}