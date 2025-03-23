import '@wsh-2025/server/src/setups/luxon';

import compression from '@fastify/compress';
import cors from '@fastify/cors';
import fastify from 'fastify';

import { registerApi } from '@wsh-2025/server/src/api';
import { initializeDatabase } from '@wsh-2025/server/src/drizzle/database';
import { registerSsr } from '@wsh-2025/server/src/ssr';
import { registerStreams } from '@wsh-2025/server/src/streams';

async function main() {
  await initializeDatabase();

  const app = fastify();
  app.register(compression);

  app.addHook('onSend', async (req, reply) => {
    // webp, ts, gif, svg, m3u8はキャッシュする
    if (
      req.url.endsWith('.webp') ||
      req.url.endsWith('.ts') ||
      req.url.endsWith('.gif') ||
      req.url.endsWith('.svg') ||
      req.url.endsWith('.m3u8')
    ) {
      reply.header('cache-control', 'public, max-age=31536000, immutable');
      return;
    }
    reply.header('cache-control', 'no-store');
  });
  app.register(cors, {
    origin: true,
  });
  app.register(registerApi, { prefix: '/api' });
  app.register(registerStreams);
  app.register(registerSsr);

  await app.ready();
  const address = await app.listen({ host: '0.0.0.0', port: Number(process.env['PORT']) });
  console.log(`Server listening at ${address}`);
}

void main();
