const api =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000'
    : 'production server';

export default api;
