import { Dumbbell } from 'lucide-react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Link href="/#hero"><Dumbbell className="w-6 h-6 text-black hover:cursor-pointer" /></Link>
              </div>
              <div>
                <Link href="/#hero"><div className="text-xl font-bold text-white hover:cursor-pointer">Luv the Gym</div></Link>
                <div className="text-xs text-gray-400">Luv, Bareilly</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#benefits" className="text-gray-300 hover:text-white transition">Gym Benefits</Link>
              <Link href="/#membership" className="text-gray-300 hover:text-white transition">Membership</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
              <button className="px-6 py-2.5 bg-green-500 hover:bg-green-600 cursor-pointer text-black font-semibold rounded-full transition">
                Start 7 day free trial
              </button>
            </nav>
            <div className="text-gray-300 text-sm">Luv: 766XXXXXXX</div>
          </div>
        </div>
      </header>
  )
}

export default Header
