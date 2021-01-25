import Link from 'next/link';

export default function Nav() {
  return (
    <header class="text-gray-700 bg-sage bg-opacity-60 body-font">
      <nav>
        <ul className="p-4 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <li>
            <Link href="/">
              <a className="text-sage-dark hover:text-white px-3 py-2 rounded-md text-4xl font-medium">
                Hawley Moore
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/art">
              <a className="text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium">
                My Art
              </a>
           </Link>
          </li>
          <li>
            <Link href="/mouse">
              <a className="text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium">
                My Cat
              </a>
            </Link>
          </li>
          <li>
            <Link href="/music">
              <a className="text-sage-dark hover:text-white px-3 py-2 rounded-md text-3sm font-medium">
                Music
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
