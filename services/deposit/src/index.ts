        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'deposit' }));

        import crypto from 'crypto';
import Busboy from 'busboy';
import { newId } from '@pies/common';

app.post('/deposit', async (req, reply) => {
  const busboy = Busboy({ headers: req.headers });
  const id = newId();
  let hashHex = '';
  const hash = crypto.createHash('sha256');
  await new Promise<void>((resolve, reject) => {
    busboy.on('file', (_name, file) => {
      file.on('data', (d: Buffer) => hash.update(d));
      file.on('end', () => {});
    });
    busboy.on('finish', () => {
      hashHex = hash.digest('hex');
      resolve();
    });
    busboy.on('error', reject);
    req.raw.pipe(busboy);
  });
  // TODO: persist to DB
  return reply.send({ depositId: id, hash: hashHex, algo: 'SHA-256' });
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[deposit] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
