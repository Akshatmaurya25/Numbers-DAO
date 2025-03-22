import NextAuth from "next-auth";
import { authOptions } from "@/types/authoptions"

export const { GET, POST } = NextAuth(authOptions);
