import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/db/prisma"
import Credentials from "next-auth/providers/credentials"
import { compareSync } from "bcryptjs"
import { NextResponse } from "next/server"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/login',
        error:  '/login',
    },
    session:{
        strategy:'jwt',
        maxAge: 30*24*60*60,
    },
  providers: [
     Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {type: 'email'},
        password: {type: 'password'},
      },
      authorize: async (credentials) => {
        if(credentials === null) return null;
        // Find user in db
        const user = await prisma.user.findFirst({where:{email:credentials.email as string}});
        // check user and user password exists
        if(user && user.password){
            const isMatch = compareSync(credentials.password as string, user.password);
            // password matches
            if(isMatch){
                return{
                    id:user.id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                }
            }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({session, user, trigger, token}: any){
        session.user.id = token.sub; // subject is the user id
        session.user.role = token.role;
        session.user.name = token.name;

        console.log(session);
        // if there is update in name update session too
        if(trigger==='update'){
            session.user.name = user.name;
        }
        return session;
    },
    async jwt({session, user, trigger, token}: any){
        if(user){
          token.role = user.role;
        }
        return token;
    },
    authorized({request, auth}: any){
      if(!request.cookies.get('sessionCartId')){
        const sessionCartId = crypto.randomUUID();
        const newRequestHeaders = new Headers(request.Headers); 
        const response = NextResponse.next({
          request:{
            headers: newRequestHeaders,
          }
        });
        response.cookies.set('sessionCartId', sessionCartId);
        return response;
      }else{
        return true;
      }
    },
  }
})