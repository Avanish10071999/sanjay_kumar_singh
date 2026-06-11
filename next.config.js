const isGithubPages = process.env.GITHUB_PAGES === "true" || process.env.NODE_ENV === "production";
const repoName = "sanjay_kumar_singh";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined
};

module.exports = nextConfig;
