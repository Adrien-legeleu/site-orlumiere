/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  // Autres configurations de Next.js ici
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  ...nextConfig,
});
