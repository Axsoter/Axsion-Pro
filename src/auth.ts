import NextAuth from 'next-auth';
import Keycloak from "next-auth/providers/keycloak";
import Discord from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
 
//const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
  },
  providers: [/*Keycloak,*/ Discord],
});