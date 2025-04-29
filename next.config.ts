// import type { NextConfig } from 'next';
// import webpack from 'webpack';

// const nextConfig: NextConfig = {
//   experimental: {
//     serverComponentsExternalPackages: [
//       'firebase-admin',
//       '@google-cloud/firestore',
//       'google-auth-library',
//       'ai'
//     ],
//     optimizePackageImports: [
//       '@ai-sdk/google'
//     ]
//   },
  
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         // Core Node.js modules
//         fs: false,
//         net: false,
//         tls: false,
//         dns: false,
//         child_process: false,
//         // Additional modules that might be required
//         http2: false,
//         path: false,
//         os: false,
//         zlib: false,
//         stream: require.resolve('stream-browserify'),
//         https: false,
//         http: false,
//         crypto: require.resolve('crypto-browserify'),
//         querystring: require.resolve('querystring-es3')
//       };

//       config.plugins.push(
//         new webpack.IgnorePlugin({
//           resourceRegExp: /^\/.*\/node_modules\/.*\/(firebase-admin|@google-cloud)/,
//           contextRegExp: /.*/
//         })
//       );
//     }

//     return config;
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "ik.imagekit.io",
  //       port: "",
  //     },
  //   ],
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;