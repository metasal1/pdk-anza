/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              frame-src 'self' https://trusted-domain.com;
              frame-ancestors 'self';
              font-src 'self';
              connect-src 'self' https://api.yourdomain.com;
            `.replace(/\s{2,}/g, ' ').trim()
                    }
                ]
            }
        ]
    }
}

export default nextConfig;
