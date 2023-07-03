/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api",
				destination: "http://localhost:7000", // Proxy to Backend
			},
		];
	},
};

module.exports = nextConfig;
