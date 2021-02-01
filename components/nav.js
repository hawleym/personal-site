import Link from 'next/link';

export default function Nav() {
  return (
    <header class="font-montserrat text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen">
      <nav>
        <ul className="p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <li>
            <Link href="/">
              <a className="text-gray-700 hover:text-white pr-3 rounded-md md:text-3xl sm:text-2xl text-xl font-medium">
                HAWLEY MOORE
              </a>
            </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/about">
              <a className="text-gray-700 hover:text-white px-3 rounded-md sm:text-3sm text-sm font-medium">
                About
              </a>
            </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/art">
              <a className="text-gray-700 hover:text-white px-3 rounded-md sm:text-3sm text-sm font-medium">
                Art
              </a>
           </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/music">
              <a className="text-gray-700 hover:text-white px-3 rounded-md sm:text-3sm text-sm font-medium">
                Music
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
