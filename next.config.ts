// 👇 Step 1: Import analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.grofers.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/external/:path*",
        destination: "https://restapi-o1q5.onrender.com/:path*",
      },
    ];
  },
};

// 👇 Step 3: Export wrapped config
module.exports = withBundleAnalyzer(nextConfig);


// npm install @next/bundle-analyzer


// npm install --save-dev cross-env  (Windows mein ANALYZE=true direct nahi chalta, isliye hum cross-env use karenge.)



// "npm run analyze"