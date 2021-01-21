import Nav from '../components/nav';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-900">
          Hawley Moore
        </h1>
        <h2 className="text-2xl pt-5 text-center text-gray-900">
          This is my website.
        </h2>
        <p className="text-l pt-5 text-center text-gray-900">
          Hi, I'm Hawley. I work at Arthena.
        </p>
      </div>
    </div>
  );
}
