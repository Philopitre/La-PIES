        import Fastify from 'fastify';
        const app = Fastify();
        app.register(import('@fastify/cors'), { origin: true });

        app.get('/health', async () => ({ ok: true, service: 'cert' }));

        import PDFDocument from 'pdfkit';
app.post('/certificate', async (req, reply) => {
  const doc = new PDFDocument();
  const chunks: Buffer[] = [];
  doc.fontSize(18).text('PIES – Certificat de dépôt (stub)', { align: 'center' });
  doc.moveDown().fontSize(12).text('Ce PDF est un stub. La version prod sera signée en PAdES.');
  doc.end();
  await new Promise<void>((resolve) => {
    doc.on('data', (c: Buffer) => chunks.push(c));
    doc.on('end', () => resolve());
  });
  const pdf = Buffer.concat(chunks);
  reply.header('Content-Type', 'application/pdf');
  reply.header('Content-Disposition', 'attachment; filename="pies-cert-stub.pdf"');
  return reply.send(pdf);
});


        const port = Number(process.env.PORT || 0) || 0;
        const chosen = port || 0;
        app.listen({ port: port || 0, host: '0.0.0.0' }).then(addr => {
          console.log('[cert] listening on', addr);
        }).catch(err => {
          console.error(err); process.exit(1);
        });
