        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'admin' }));

        app.get('/status', async (_req, reply) => {
  return reply.send({ ok: true, keys: { active: 'PIES_SEAL_2025' } });
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[admin] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
