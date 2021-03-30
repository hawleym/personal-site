import Nav from '../components/nav';

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <div className="py-24">
        <div class="flex flex-wrap justify-center">
          <div class="w-4/12 sm:w-3/12 px-4">
            <img src="/images/about/me.jpeg" alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
          </div>
        </div>
        <h1 className="pt-10 text-5xl text-center text-gray-700">ABOUT ME</h1>
        <h3 className="pt-10 text-xl text-center text-gray-700">INTRO</h3>
        <p className="text-l mx-14 text-gray-900">
          Hi, I'm Hawley. I am an Analyst and Artist, currently living in
          New York. I love making things and being outside. 
        </p>
        <h3 className="pt-10 text-xl text-center text-gray-700">CURRENTLY</h3>
        <p className="text-l mx-14 text-gray-900">
          Currently, I work as a Data Analyst at Arthena where my primary responsibilities 
          include managing and maintaining data integrity within internal databases
          and analyzing art market data to create trend reports.
        </p>
        <h3 className="pt-6 text-xl text-center text-gray-700">EDUCATION</h3>
        <p className="text-l mx-14 text-gray-900"> 
          I received my BA in Economics and Studio Art at Bates College in Lewiston, Maine
          and completed senior theses in both disciplines. A large portion of my Studio Art 
          thesis can be found under the art tab of this website. My Economics thesis, titled 
          "Like Night and Day: Determinants of Lot Order and Price in the Day
          and Evening Sales of Post-War and Contemporary Art Auctions" tested art industry assumptions 
          about auctions through a series of regressions. If you are interested in learning more about this research,
          please contact me. While at Bates, I also played for the Women's Ice Hockey team and was a host and the 
          Creative Director for WRBC, the school's student run radio station.
        </p>
        <h3 className="pt-6 text-xl text-center text-gray-700">INTERESTS</h3>
        <p className="text-l mx-14 text-gray-900"> 
          There are a lot of things I like to fill my time with. Some of these are the following: yoga, 
          running, knitting, reading, painting, baking, biking, skiing, backpacking, and listening to music. 
          I'd like learn more about rock climbing and rug making.
        </p>
       </div>
    </div>
  );
}
