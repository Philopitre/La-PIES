        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'chain' }));

        app.post('/anchor', async (req, reply) => {
  const utc = new Date().toISOString();
  const txId = '0x' + Math.random().toString(16).slice(2).padEnd(64,'0');
  return reply.send({ txId, network: 'bitcoin', anchoredAt: utc });
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[chain] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
