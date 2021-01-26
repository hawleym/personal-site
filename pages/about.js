import Nav from '../components/nav';

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="pt-20 text-5xl text-center text-gray-700">
          About Me
        </h1>
        <p className="text-l p-5 text-center text-gray-900">
          Hi, I'm Hawley. I work at Arthena. Welcome to my website. I also make art, playlists, and own an adorable cat named Mouse.
        </p>
      </div>
    </div>
  );
}
