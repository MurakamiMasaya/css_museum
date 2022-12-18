/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // URLの書き換え
  // sourceに来たときに既にURLがある場合は、destinationを追加すればいい
  async rewrites() {
    return [
      {
        source: '/personal',
        destination: '/multipage?step=1'
      },
      {
        source: '/confirm',
        destination: '/multipage?step=2'
      },
    ]
  }
}

module.exports = nextConfig
