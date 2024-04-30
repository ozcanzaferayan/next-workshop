import { API_URL } from "@/app/[locale]/loaders";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        // logic to verify if user exists
        const res = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        user = (await res.json()).user;
        console.log("USERRR", user);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with the their profile data
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("callback");
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async session({ session, token, user }) {
      // @ts-ignore
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});

// import i18nConfig from "@/i18nConfig";
// import type { NextAuthConfig } from "next-auth";
// import { i18nRouter } from "next-i18n-router";

// const getLocaleFromPath = (pathname: string) => {
//   const localeFromPathRegex = new RegExp(
//     `^/(${i18nConfig.locales.join("|")})?`
//   );
//   const localeFromPath = pathname.match(localeFromPathRegex)?.[1];
//   return {
//     locale: localeFromPath,
//     path: localeFromPath ? `/${localeFromPath}` : "",
//   };
// };

// const checkCurrentRoute = (pathname: string, locale?: string) => {
//   const checkPathnameRegex = (pattern: string | RegExp) => {
//     const rootRegex = new RegExp(pattern);
//     return Boolean(pathname.match(rootRegex));
//   };

//   return {
//     root: checkPathnameRegex(`^/(${locale})?$`),
//     dashboard: checkPathnameRegex(`^(/${locale})?/dashboard.*`),
//     login: checkPathnameRegex(`^(/${locale})?/login.*`),
//   };
// };

// export const authConfig = {
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request }) {
//       const { nextUrl } = request;

//       const locale = getLocaleFromPath(nextUrl.pathname);
//       const dashboardUrl = new URL(`${locale.path}/dashboard`, nextUrl);

//       const {
//         root: isOnRoot,
//         dashboard: isOnDashboard,
//         login: isOnLogin,
//       } = checkCurrentRoute(nextUrl.pathname, locale.locale);

//       const isLoggedIn = !!auth?.user;

//       if (isOnRoot || (isLoggedIn && !isOnDashboard)) {
//         // If on root or logged in but not on dashboard, redirect to dashboard
//         return Response.redirect(dashboardUrl);
//       }

//       if ((isOnLogin && !isLoggedIn) || (isOnDashboard && isLoggedIn)) {
//         // Not logged in but on login OR logged in and on dashboard => allow access
//         return i18nRouter(request, i18nConfig);
//       }

//       // Not logged in and not on login or dashboard => redirect to login page
//       return false;
//     },
//   },

//   providers: [],
// } satisfies NextAuthConfig;
