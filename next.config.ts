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
    ];
  },
  async redirects() {
    return [
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
