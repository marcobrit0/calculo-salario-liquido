import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value:
              "(?<preview>.+-)?calcular-salario-liquido\\.marconmbrito\\.workers\\.dev",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        // Harden HTTPS for the canonical host. Pair with Cloudflare
        // "Always Use HTTPS" — http://www currently serves 200 without redirect.
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "^www\\.calcularsalarioliquido\\.com\\.br$",
          },
        ],
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "^calcularsalarioliquido\\.com\\.br$",
          },
        ],
        destination: "https://www.calcularsalarioliquido.com.br/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            // Anchored so it matches ONLY the bare apex, never the www host.
            // Prevents a www→www redirect loop if the apex is assigned to this
            // project instead of redirected at Vercel's edge.
            value: "^calcularsalarioliquido\\.com\\.br$",
          },
        ],
        destination: "https://www.calcularsalarioliquido.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
