// src/api.js
// Wrapper para usar la API definida en window (desde index.html)

export const submitAPI = (formData) => {
  // Usar la API global si existe
  if (typeof window.submitAPI === 'function') {
    return window.submitAPI(formData);
  }
  
  // Fallback local (por si acaso)
  console.warn('window.submitAPI no está disponible, usando fallback');
  return true;
};

export const fetchAPI = (date) => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }

  console.warn('window.fetchAPI no está disponible, usando fallback');
  const seededRandom = (seed) => {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
  };
  const result = [];
  const random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(`${i}:00`);
    if (random() < 0.5) result.push(`${i}:30`);
  }
  return result;
};