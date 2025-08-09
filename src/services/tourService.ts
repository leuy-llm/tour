// src/services/tourService.ts
import tours from '../mock/tours.json'

export async function getAllTours() {
  // simulate small network delay so skeleton can be seen
  await new Promise((r) => setTimeout(r, 300))
  return tours
}
