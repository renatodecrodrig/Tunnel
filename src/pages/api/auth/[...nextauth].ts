import NextAuth, { NextAuthOptions } from "next-auth";
import googleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  theme: {
    colorScheme: "light"
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        // @ts-ignore
        token.id = profile?.id
      }
      return token
    } 
  }
};

export default NextAuth(authOptions);
