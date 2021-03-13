module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '85fee0b2c3155059e3d6346a2943deb2'),
    },
  },
});
