module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('PUBLIC_URL', 'https://api.bifolia.de'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '85fee0b2c3155059e3d6346a2943deb2'),
    },
    url: env('PUBLIC_ADMIN_URL', '/admin'),
    autoOpen: true,
    serveAdminPanel: env.bool('SERVE_ADMIN', true),
  },
});
