/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[{
      protocol:'https',
      hostname:'cdn.weatherapi.com',
      port:'',
      pathname:'/weather/64x64/day/**'
    },{
      protocol:'https',
      hostname:'cdn.weatherapi.com',
      port:'',
      pathname:'/weather/64x64/night/**'
    }
    ]
  }
}

module.exports = nextConfig
