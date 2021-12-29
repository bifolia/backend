module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a5ae3bd45b57a40d6bef3e8caf07d50'),
  },
});
