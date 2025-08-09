
// src/data/tours.ts
export const categories = [
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Culture', value: 'Culture' },
  { label: 'Nature', value: 'Nature' },
  { label: 'Wildlife', value: 'Wildlife' },
  { label: 'Featured', value: 'Featured' },
  { label: 'Relaxation', value: 'Relaxation' }
]



export const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $500', value: '0-500' },
  { label: '$500 - $1000', value: '500-1000' },
  { label: '$1000 - $2000', value: '1000-2000' },
  { label: 'Over $2000', value: '2000+' }
]

export interface Tour {
  id: number
  title: string
  description: string
  image: string
  price: number
  duration: string
  rating: number
  category: string
  featured: boolean
}
