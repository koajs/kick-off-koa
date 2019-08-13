const Koa = require('koa');
const parse = require('co-body');

const app = new Koa();

app.use(async (ctx, next) => {
  // only accept POST request
  if (ctx.method !== 'POST') return await next();

  // max body size limit to `1kb`
  const body = await parse(ctx, { limit: '1kb' });

  // if body.name not exist, respond `400`
  if (!body.name) ctx.throw(400, '.name required');

  ctx.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
