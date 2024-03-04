import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { validateTokenToAuthApi } from "./lib/apiAuthorizationFun";
import { verifyJwtToken } from "./lib/jwt";
export default function middleware(req){
  const cookies1 = cookies();
  console.log(cookies1)
  const verify =cookies1.get('token');
  
  // console.log("token====================>>>>>>>>",verify?.value)
  // console.log("token cookies",req.cookies)
  const path = req.nextUrl.pathname;
  // const privatePagePath = ['/admin/uploadProject','/admin/dashboard',]
  const privatePagePath_Regix = (/^\/admin(?!\/?(?:login(?:\/|$)|$)).*/);
  const privateApiPath_Regix = /^\/api\/admin.*/;
 

  console.log('middleware run',req.nextUrl.pathname)
 

  if(!verify && privatePagePath_Regix.test(path)){
      return NextResponse.redirect('http://localhost:3000/admin/login')
  }
    if(verify && path==('/admin/login')){
      return NextResponse.redirect('http://localhost:3000/admin/dashboard')
  }

//   if(!verify && privateApiPath_Regix.test(path)){
//     if(path !='/api/admin/login'){
//     return NextResponse.json({message:'Unauthorized req'},{status:400});
//   }else{
//     return NextResponse.next()
//   }
// }
  if(verify && privateApiPath_Regix.test(path)){
  
    // req.headers.append('Autorization',`Bearer ${verify?.value}`)
    // const requestHeaders = new Headers(req.headers)
    // requestHeaders.set('Authorization', `Bearer ${verify?.value}`)
    // return req;

    // const jwtTokenCheck = verifyJwtToken(verify?.value);
    // if(!jwtTokenCheck){
    //   console.log(jwtTokenCheck)
    //   return NextResponse.json({message:'Unauthorized req 2'},{status:400});
    // }

    // Clone the request headers and set a new header `x-hello-from-middleware1`
   
      req.headers.set('Authorization', `Bearer ${verify?.value}`);
    const accessToken = req.headers.get('Authorization');
    console.log("ef===========>",accessToken)
    return NextResponse.next();

  }
}

export const config = {
  matcher: [
    // '/admin/:path*',
    //  '/api/admin/upload-project',
    //  '/api/admin/upload-project/:path',
    //  '/api/admin/:path*'
  ]
}