import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="p-4 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <li>
          <Link href="/">
            <a className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
