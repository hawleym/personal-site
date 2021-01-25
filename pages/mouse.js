import Nav from '../components/nav';

export default function MousePage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-sage">
        Meet my cat, Mouse.
        </h1>
      </div>
      <div>
        <img
            src="/images/mouse1.jpeg"
            alt="Cat on the couch"
        />
      </div>
    </div>
  );
}