'use client'
import { useRecoilState } from 'recoil'
import { sizeState } from './state'
import { SizeButton } from '@/components/button'

const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']

const Size = () => {
  const [selectedSize, setSelectedSize] = useRecoilState(sizeState)

  return (
    <div className="flex flex-col justify-between items-start w-full">
      <div className="mb-2 pl-2 text-lg">SELECT A SIZE</div>
      <div className="flex flex-row gap-2">
        {sizes.map((size, index) => (
          <SizeButton
            key={size}
            text={size}
            selected={size === selectedSize}
            onSelect={() => setSelectedSize(size)}
          />
        ))}
      </div>
    </div>
  )
}

export default Size
