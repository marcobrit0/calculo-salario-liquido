import path from "node:path";
import type { NextConfig } from "next";

const PREVIEW_HOST = String.raw`(?<preview>.+-)?calcular-salario-liquido\.marconmbrito\.workers\.dev`;
const APEX_HOST = String.raw`^calcularsalarioliquido\.com\.br$`;
const WWW_HOST = String.raw`^www\.calcularsalarioliquido\.com\.br$`;

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
            value: PREVIEW_HOST,
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
            value: WWW_HOST,
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
            value: APEX_HOST,
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
            value: APEX_HOST,
          },
        ],
        destination: "https://www.calcularsalarioliquido.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
