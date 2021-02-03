import { NextSeo } from 'next-seo';
import Nav from '../components/nav';

export default function IndexPage() {
  return (
    <>
    <NextSeo
      title="Hawley Moore"
      description="Hawley Moore is a Data Analyst and Artist, currently living in New York."
    />
    <Nav />
    <div className="pt-16">
      <div className="mt-1 sm:mt-3 h-screen bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(/images/art/1.jpg)` }}
      >
      </div>
    </div>
    </>
  );
}
