import {NextResponse} from "next/server";
export async function POST(request:Request){
 try{
  const body=await request.json();
  for(const key of ["division","customer_name","contact_number","location","service_type"]){
   if(!body[key]||typeof body[key]!=="string")return NextResponse.json({error:`Missing ${key}`},{status:400});
  }
  if(!/^[+]?[\d\s()-]{8,18}$/.test(String(body.contact_number)))return NextResponse.json({error:"Invalid phone"},{status:400});
  console.info("Raybuild lead received:",{...body,contact_number:"[REDACTED]"});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Invalid request"},{status:400});}
}
