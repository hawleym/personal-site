import Nav from '../components/nav';
import Image from 'next/image'

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
        <Image
            src="/images/mouse1.jpg"
            alt="Cat on the couch"
            width={700}
            height={933}
        />
      </div>
    </div>
  );
}