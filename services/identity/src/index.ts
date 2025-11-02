        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'identity' }));

        app.post('/auth/login', async (_req, reply) => {
  // Stub JWT
  return reply.send({ access_token: 'stub.jwt.token', token_type: 'Bearer' });
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[identity] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
