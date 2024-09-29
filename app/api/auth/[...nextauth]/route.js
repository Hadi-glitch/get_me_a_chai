import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDb from "@/db/connectDb";

export const authOptions = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
      keyId: process.env.APPLE_KEY_ID,
      teamId: process.env.APPLE_TEAM_ID,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add this for production
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (
          ["github", "facebook", "twitter", "apple", "google", "linkedin"].includes(
            account.provider
          )
        ) {
          await connectDb();

          // Check if the user exists in the database
          const currentUser = await User.findOne({ email: user.email });
          if (!currentUser) {
            // Create a new user if not found
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
          }
          return true;
        }
        return false; // If provider is not one of the specified ones
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          session.user.name = dbUser.username; // Attach username from DB
        }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };
