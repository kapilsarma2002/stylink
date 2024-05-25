const NavBar = () => {
  return (
    <div className="w-100vw h-[75px] top-0 border border-black px-4 flex flex-row justify-between items-center bg-white text-black">
      <div className="w-2/3 pl-8">logo</div>
      <div className="w-1/3  h-full flex flex-row justify-around items-center text-xl">
        <div>Dashboard</div>
        <div>Products</div>
        <div>Sign in</div>
      </div>
    </div>
  )
}

export default NavBar