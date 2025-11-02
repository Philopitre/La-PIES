        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'api-gateway' }));

        import { request } from 'undici';
app.get('/', async () => ({ name: 'PIES API Gateway', version: '0.1.0' }));
// Proxy example (would be wired via env/service discovery)
app.get('/verify', async (req, reply) => {
  const url = process.env.VERIFY_URL || 'http://localhost:4010/verify';
  const { statusCode, body } = await request(url);
  reply.status(statusCode).send(await body.json());
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[api-gateway] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
