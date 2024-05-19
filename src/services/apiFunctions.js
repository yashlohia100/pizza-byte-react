const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export async function getPizzasApi() {
  const res = await fetch(`${API_URL}/pizzas`);

  if (!res.ok) throw new Error('Unable to get pizzas!');

  const data = await res.json();
  return data.pizzas;
}

export async function getOrderApi(id) {
  const res = await fetch(`${API_URL}/orders/${id}`);

  if (!res.ok) throw new Error('Unable to get order!');

  const data = await res.json();
  return data.order;
}

export async function createOrderApi(payload) {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to create order!');

  const data = await res.json();
  return data.order;
}

export async function loginApi(payload) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to login!');

  const data = res.json();
  return data.user;
}

export async function signupApi(payload) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to signup!');

  const data = await res.json();
  return data.user;
}

export async function getUserApi() {
  const res = await fetch(`${API_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data.user;
}

export async function logoutApi() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Unable to logout!');

  const data = await res.json();
  return data;
}
