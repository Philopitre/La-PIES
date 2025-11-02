        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'tsa' }));

        app.post('/timestamp', async (req, reply) => {
  // MOCK: returns a fake RFC3161 token (base64) and UTC
  const utc = new Date().toISOString();
  const token = Buffer.from('RFC3161_FAKE_TOKEN_'+utc).toString('base64');
  return reply.send({ utc, token, serial: 'MOCKSERIAL-001' });
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[tsa] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
