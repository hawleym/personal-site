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
       <div>
            <img
                src="/personal-site/images/art12.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art11.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art10.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art9.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art8.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art3.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art4.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
        <div>
            <img
                src="/personal-site/images/art5.jpg"
                alt="Five works by Hawley Moore on a Wall"
                width="100%"
            />
        </div>
      </div>
    </div>
  );
}