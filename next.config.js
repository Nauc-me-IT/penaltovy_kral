// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/data',
          destination: 'http://localhost:3000/api/data',
        },
      ];
    },
  };