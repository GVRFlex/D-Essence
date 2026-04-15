import { d as defineMiddleware, s as sequence } from './chunks/index_ByKe4-aX.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_mzOIrCfx.mjs';
import 'piccolore';
import './chunks/astro/server_47Q9Bw13.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return next();
  }
  if (pathname !== "/" && !pathname.endsWith("/")) {
    url.pathname = pathname + "/";
    return context.redirect(url.toString(), 301);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
