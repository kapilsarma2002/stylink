import Logo from '@/components/logo'
import {
  LayoutDashboard,
  ListCollapse,
  Settings,
  ShoppingCart,
  LogOut,
  ClipboardList
} from 'lucide-react'
import Link from 'next/link'

const linksTop = [
  { href: '/dashboard', name: 'Dashboard', Icon: LayoutDashboard },
  { href: '/products', name: 'Products', Icon: ListCollapse },
  { href: '/orders', name: 'Orders', Icon: ClipboardList },
]

const linksBottom = [
  { href: '/cart', name: 'Cart', Icon: ShoppingCart },
  { href: '/', name: 'Sign out', Icon: LogOut },
]

const Sidebar = () => {
  return (
    <div className="w-full h-full py-3">
      <div className="px-4 ml-8 mt-4">
        <Link href="/dashboard">
          <Logo />
        </Link>
      </div>
      <div className="h-[calc(100vh-6rem)] mt-8 px-4 py-4 flex flex-col items-center justify-between">
        <div>
          {linksTop.map((link) => {
            return (
              <div key={link.href}>
                <Link href={link.href}>
                  <div className="flex gap-2 items-center hover:bg-white border hover:border-black/20 border-transparent py-2 px-6 rounded-lg transition-all">
                    <link.Icon size={16} />
                    <span>{link.name}</span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <div>
          {linksBottom.map((link) => {
            return (
              <div key={link.href}>
                <Link href={link.href}>
                  {link.name === 'Sign out' ? (
                    <div className="flex gap-2 items-center hover:bg-black border hover:text-white hover:border-black/30 border-transparent py-2 px-6 rounded-lg transition-all">
                      <link.Icon size={16} />
                      <span>{link.name}</span>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center hover:bg-white border hover:border-black/20 border-transparent py-2 px-6 rounded-lg transition-all">
                      <link.Icon size={16} />
                      <span>{link.name}</span>
                    </div>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
