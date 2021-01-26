import Link from 'next/link';

export default function Nav() {
  return (
    <header class="text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen">
      <nav>
        <ul className="p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <li>
            <Link href="/">
              <a className="text-gray-700 hover:text-white px-3 rounded-md text-3xl font-medium">
                HAWLEY MOORE
              </a>
            </Link>
          </li>
          <li className="pt-2">
            <Link href="/about">
              <a className="text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium">
                About
              </a>
            </Link>
          </li>
          <li className="pt-2">
            <Link href="/art">
              <a className="text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium">
                Art
              </a>
           </Link>
          </li>
          <li className="pt-2">
            <Link href="/mouse">
              <a className="text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium">
                Cat
              </a>
            </Link>
          </li>
          <li className="pt-2">
            <Link href="/music">
              <a className="text-gray-700 hover:text-white px-3 rounded-md text-3sm font-medium">
                Music
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
