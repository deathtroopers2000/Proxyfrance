export const config = {
  matcher: '/:path*',
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const destination = 'https://185.214.101.104';

  const headers = new Headers(request.headers);
  headers.set('Host', '185.214.101.104'); // یا دامنه واقعی سرور اگر لازم باشه

  return fetch(destination + url.pathname + url.search, {
    headers,
    method: request.method,
    body: request.body,
  });
}
