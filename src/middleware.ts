import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Skip static files (images, css, js, etc.)
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return next();
  }

  // Redirect to trailing slash if missing (except for root)
  if (pathname !== '/' && !pathname.endsWith('/')) {
    url.pathname = pathname + '/';
    return context.redirect(url.toString(), 301);
  }

  return next();
});
