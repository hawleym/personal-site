import Nav from '../components/nav';

export default function ContactPage() {
  return (
    <div>
      <Nav />
      <div className="flex h-screen justify-center items-center">
        <div className="text-center text-gray-700">
          <h1 className="text-5xl">CONTACT ME</h1>
          <p className="text-l pt-8">
            Feel free to get in touch with me at {' '}
            <a
              href="mailto: hello@hawleymoore.com"
              className="text-blue-500 hover:font-semibold"
            >
              hello@hawleymoore.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
