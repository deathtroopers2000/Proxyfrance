export const config = {
  matcher: '/:path*',
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const destination = 'https://51.178.149.237';

  const headers = new Headers(request.headers);
  headers.set('Host', '51.178.149.237'); // یا دامنه واقعی سرور اگر لازم باشه

  return fetch(destination + url.pathname + url.search, {
    headers,
    method: request.method,
    body: request.body,
  });
}
