import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import { authOptions } from "@/types/authoptions"

const handler = NextAuth(authOptions as NextAuthOptions);


export { handler as GET, handler as POST };
