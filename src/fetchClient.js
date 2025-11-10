const API_BASE = import.meta.env.VITE_API_BASE_URL;

async function request(path, { method = 'GET', body, headers = {} } = {}) {
  const token = localStorage.getItem('jwt');
  if (token) headers['Authorization'] = `Bearer ${token}`;
  headers['Content-Type'] = 'application/json';

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
    credentials: 'include'
  });

  if (res.status === 401) {
    const refresh = localStorage.getItem('refresh_token');
    if (refresh) {
      const r = await fetch(`${API_BASE}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: refresh })
      });
      if (r.ok) {
        const { jwt, refreshToken } = await r.json();
        localStorage.setItem('jwt', jwt);
        localStorage.setItem('refresh_token', refreshToken);
        return request(path, { method, body, headers });
      }
    }
    localStorage.removeItem('jwt');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
    return;
  }

  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}

export default { request };