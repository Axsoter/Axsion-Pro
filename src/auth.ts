import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
//import AxsoterID from "@/axsoterid"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
    signOut: '/api/auth/logout',
  },
  providers: [/*AxsoterID,*/ Discord],
});