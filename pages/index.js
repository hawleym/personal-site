import Nav from '../components/nav';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="pt-16">
        <div className="pt-3">
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
