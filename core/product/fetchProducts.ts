export function fetchProductsList() {
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
}