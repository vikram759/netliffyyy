import User from "../../../models/User";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
import connectDb from "../../../db/connectionDb";
import { NextResponse } from "next/server";




export async function POST(req){
     await connectDb()

    let x=await req.json()

//     const session=await getServerSession(authOptions)
//     const emailz=session?.user?.email
//     console.log({session,x})
let users=await User.findOne({username:x.username}).lean();
// const updateData = { isSelected: false };

if(users){
   return new NextResponse("error",{status:500,})
}
// console.log(addresses)

    const Newaddress= await new User({
   
        username:x.username,
        password:x.password,
       
    })

    try{
        await Newaddress.save()
         return new NextResponse("user is registered",{status:200})
    } 
    catch(err){
        return new NextResponse(err,{status:500});
    }



}