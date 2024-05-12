export const Outline = ({text} : {text: string})  => {
  return (
    <button className="px-4 py-2 rounded-xl text-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
      {text}
    </button>
  )
}

export const Solid = ({text} : {text: string})  => {
  return (
    <button className="px-4 py-2 bg-black text-white text-lg rounded-xl font-semibold hover:bg-black/[0.8] hover:shadow-lg">
      {text}
    </button>
  )
}