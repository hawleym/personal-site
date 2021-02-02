import Nav from '../components/nav';

export default function ArtPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-xl text-center text-gray-500 pt-20">
        I largely paint with a combination of acylics and oils. Sometimes I like making sculptures out of plaster casts of my own hands.
        </h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 object-center pl-4 pr-4">
      <div className="col-span-3">
            <img
                src="/images/art/11.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
       <div className="row-span-2">
            <img
                src="/images/art/12.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div className="col-span-2">
            <img
                src="/images/art/9.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/2.jpg"
                alt="Blue Hands"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/8.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/10.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/3.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/4.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/5.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/images/art/1.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
      </div>
    </div>
  );
}