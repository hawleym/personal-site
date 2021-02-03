import Nav from '../components/nav';

export default function ContactPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="pt-20 text-5xl text-center text-gray-700">
          Contact Me
        </h1>
        <p className="text-l p-5 text-center text-gray-900">
            Don't attempt to contact me. I'll find you.
        </p>
      </div>
    </div>
  );
}
