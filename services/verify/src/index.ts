        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'verify' }));

        app.get('/verify', async (_req, reply) => {
  // Minimal stub; in prod, re-validera TSA + blockchain + signature PDF
  return reply.send({ ok: true, details: { tsaValid: true, chainConfirmed: true, signatureValid: false }, warnings: ['stub'], errors: [] });
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[verify] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
