'use client'
import { Heart } from 'lucide-react'

export const Outline = ({ text }: { text: string }) => {
  return (
    <button className="px-4 py-2 rounded-xl text-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
      {text}
    </button>
  )
}

export const WishlistIcon = ({
  text,
  isWidthFull,
}: {
  text: string
  isWidthFull: boolean
}) => {
  return (
    <button
      className={`${
        isWidthFull ? 'w-full' : ''
      } flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-xl text-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200`}
    >
      <Heart />
      {text}
    </button>
  )
}

export const Solid = ({
  text,
  isWidthFull,
  onClick
}: {
  text: string
  isWidthFull: boolean,
  onClick: any
}) => {
  return (
    <button
      className={`${
        isWidthFull ? 'w-full' : ''
      } px-4 py-2 bg-black text-white text-lg rounded-xl font-semibold hover:bg-black/[0.8] hover:shadow-lg`}
    >
      {text}
    </button>
  )
}

export const SizeButton = ({
  text,
  selected,
  onSelect,
}: {
  text: string
  selected: boolean
  onSelect: () => void
}) => {
  return (
    <button
      className={`px-4 py-2 text-lg rounded-xl font-semibold hover:shadow-lg ${
        selected ? 'bg-black text-white' : 'bg-white text-black'
      } hover:bg-black hover:text-white`}
      onClick={onSelect}
    >
      {text}
    </button>
  )
}
