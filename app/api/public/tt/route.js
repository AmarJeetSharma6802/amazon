import { NextResponse } from "next/server";

const item = [
    {
        id:1,
        name:"jeet sharma",
        age:12,
    }
]


export function GET(){
return NextResponse.json(item)
}