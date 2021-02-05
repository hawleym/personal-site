import Link from 'next/link';

export default function Nav() {
  return (
    <header className="font-montserrat text-gray-700 bg-gray-200 bg-opacity-60 body-font fixed w-screen font-medium sm:text-3sm text-sm">
      <nav>
        <ul className="p-5 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <li>
            <Link href="/">
              <a className="pr-3 rounded-md md:text-3xl sm:text-2xl text-xl hover:text-white">
                HAWLEY MOORE
              </a>
            </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/about">
              <a className="px-3 rounded-md hover:text-white">
                About
              </a>
            </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/art">
              <a className="px-3 rounded-md hover:text-white">
                Art
              </a>
           </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/music">
              <a className="px-3 rounded-md hover:text-white">
                Music
              </a>
            </Link>
          </li>
          <li className="sm:pt-2 pt-1">
            <Link href="/contact">
              <a className="px-3 rounded-md hover:text-white">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
