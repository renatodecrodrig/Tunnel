/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    ACCESS_TOKEN: "pat-eu1-0db5c420-75cd-4142-910d-83db30f90f4f",
    CLIENT_ID: "c80a3b57-1395-4414-b9c4-8729f18a9242",
    CLIENT_SECRET: "b2a4736f-51ed-48b2-8b7b-2269c90f9027",
    SCOPES: "[crm.objects.contacts.read,crm.objects.contacts.write,crm.objects.companies.read,crm.objects.companies.write]",
    REDIRECT_URL: "http://localhost:3000/oauth-callback",
    APP_ID: "1663698",
    REFRESH_TOKEN: "i6mapTIAVSp2oJkgUnCACKKfZxt_H5MBLiqcybBBd04",
    USER_ID: "51297385",
    API_KEY: "pat-eu1-0db5c420-75cd-4142-910d-83db30f90f4f",
    // "eu1-0514-917a-423a-be59-665e7f62d6d5" developer apikey
    NEXTAUTH_SECRET: "b2a4736f-http:-1395-83db30f90f4f-api/auth",
    GOOGLE_CLIENT_ID: "924732417599-unvfpt5eb0l0gf6q9mn15bh2eqgdsi16.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};
export default config;
