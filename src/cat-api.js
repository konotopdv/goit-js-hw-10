// const url = 'https://api.thecatapi.com/v1';
// const api_key =
//   'live_DVnU0ZYbgHx4Gq16lymrax09mhyq6Jcimr8xzqh0EDlDYpfW7wM6568eXBaVraX3';

// export function fetchBreeds() {
//   return fetch(`${url}/breeds?api_key=${api_key}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(
//     `${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
const API_KEY =
  'live_DVnU0ZYbgHx4Gq16lymrax09mhyq6Jcimr8xzqh0EDlDYpfW7wM6568eXBaVraX3';
export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds`).then(response =>
    response.json()
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}&has_breeds=1`
  ).then(response => response.json());
}

export function fetchInfoById(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/${breedId}?api_key=${API_KEY}`
  ).then(response => response.json());
}
