import { atom } from 'recoil'

export const quantityState = atom({
  key: 'quantityState',
  default: 1,
})

export const sizeState = atom({
  key: 'sizeState',
  default: 'S',
})

export const cartState = atom({
  key: 'cartState',
  default: [],
})
