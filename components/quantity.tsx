'use client'

import { useRecoilState } from 'recoil'
import { quantityState } from './state'

const Quantity = () => {
  const [quantity, setQuantity] = useRecoilState(quantityState)

  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1)
  const decrement = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))

  return (
    <div className="flex items-center justify-center">
      <div>{'Quantity : '}</div>
      <button className="ml-2 px-3 py-2 bg-gray-200 rounded-lg" onClick={decrement}>
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="mx-3 text-center w-10"
      />
      <button className="px-3 py-2 bg-gray-200 rounded-lg" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Quantity
