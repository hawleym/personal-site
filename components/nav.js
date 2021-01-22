import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="p-4 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <li>
          <Link href="/">
            <a className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-3xl font-medium">
              Hawley Moore
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/art">
            <a className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              My Art
            </a>
          </Link>
        </li>
        <li>
          <Link href="/mouse">
            <a className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              My Cat
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
