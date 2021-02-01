import Nav from '../components/nav';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="pt-16">
        <div className="sm:pt-3 pt-1">
          <img
            src="/images/art1.jpg"
            alt="Five works by Hawley Moore on a Wall"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
