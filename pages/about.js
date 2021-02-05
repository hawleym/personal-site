import Nav from '../components/nav';

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="pt-20 text-5xl text-center text-gray-700">About Me</h1>
        <p className="text-l p-5 text-center text-gray-900">
          Hi, I'm Hawley. I am a Data Analyst and Artist, currently living in
          New York. I love learning new things and find fulfillment in creating
          with what I've learned. For example, I've made this website, knitted
          some sweaters, made some candles and enjoy baking. I also make art,
          playlists, and own an adorable cat named Mouse.
        </p>
        <p className="text-l p-5 text-center text-gray-900">
          On that note, this page/entire website is unfinished and currently
          under construction.
        </p>
      </div>
    </div>
  );
}
