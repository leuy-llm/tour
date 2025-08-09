import toursMockData from '../mock/tours.json';

// Force Promise return
export function getAllTour() {
  return new Promise((resolve) => {
    resolve(toursMockData);
  });
}
