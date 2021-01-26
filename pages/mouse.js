import Nav from '../components/nav';

export default function MousePage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="pt-20 text-5xl text-center text-gray-500">
        Meet my cat, Mouse.
        </h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 object-center pl-4 pr-4">
        <div>
            <img
                src="/personal-site/images/mouse1.jpg"
                alt="Cat on the couch"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/mouse2.jpeg"
                alt="Sleeping Cat"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/mouse3.jpeg"
                alt="Cat"
                width="100%"
            />
        </div>
      </div>
    </div>
  );
}