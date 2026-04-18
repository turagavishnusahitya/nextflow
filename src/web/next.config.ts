import type { NextConfig } from "next";

const ffmpegTraceIncludes = ["./node_modules/ffmpeg-static/**/*"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["ffmpeg-static"],
  outputFileTracingIncludes: {
    "/api/**/*": ffmpegTraceIncludes,
    "/api/workflows/[id]/execute": ffmpegTraceIncludes,
    "/api/workflows/[id]/execute/route": ffmpegTraceIncludes,
  },
};

export default nextConfig;
