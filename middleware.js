import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  // '/api/itemStore',
  "/api/itemStore(.*)",
  "/api/products(.*)", // ✅ Covers both itemStore & productList ise use karne liye public folder ke ander dalna hoga
  "/innerItems/(.*)",
  "/api/external(.*)", 
  "/imageGallery(.*)",
  "/home(.*)",
  
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    // '/(api|trpc)(.*)',
    "/api/(.*)",
    "/innerItems/(.*)",
  ],
};

// http://localhost:3000/api/public/tt
