import Nav from '../components/nav';

const playlists = [
  {
    title: 'evergreen',
    src: 'https://open.spotify.com/embed/playlist/0oPXGmDixzBPiwb2icGcjD',
  },
  {
    title: 'took a fat L(earning experience)',
    src: 'https://open.spotify.com/embed/playlist/4D0ra63q1s3g6MBp4r94By'
  },
  {
    title: 'clementine',
    src: 'https://open.spotify.com/embed/playlist/6S79VsiQkS96T1kpgvnaiZ'
  },
  {
    title: 'it could be worse, you could have scurvy',
    src: 'https://open.spotify.com/embed/playlist/07aGGBr2tBXK7C9eHzc77F'
  },
  {
    title: 'kitchen limbo',
    src: 'https://open.spotify.com/embed/playlist/322AJJWNX7rBufEIboSVQq',
  },
  {
    title: "if you eat salad at my funeral, i'll be livid",
    src: 'https://open.spotify.com/embed/playlist/6bm9AZARvIG7plnSHDo6lf',
  },
  {
    title: 'coffee for dinner',
    src: 'https://open.spotify.com/embed/playlist/5Z9Hfijtg5vKzsJGB1V5XB',
  },
  {
    title: 'corn teen',
    src: 'https://open.spotify.com/embed/playlist/4I002ODgfX2auEon1JExkg',
  },
  {
    title: '2 PM',
    src: 'https://open.spotify.com/embed/playlist/6jgfkYkYcJ6HsQo3cbwo2j',
  },
  {
    title: 'lunch break',
    src: 'https://open.spotify.com/embed/playlist/2mS5GHS0Md6VwiEeasqWAy',
  },
  {
    title: 'purgatory is a strip mall parking lot',
    src: 'https://open.spotify.com/embed/playlist/7nx7g8gLRZCbrMuMFyeHgE',
  },
  {
    title: 'cathedral',
    src: 'https://open.spotify.com/embed/playlist/6M1CBeFUTN7oxUtbJLvKQi',
  },
];

const displayPlaylist = (props) => (
  <li className="py-2">
    <iframe
      title={props.title}
      src={props.src}
      width="100%"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  </li>
);

export default function MusicPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-2xl text-center text-gray-500 pt-20 mx-10">
          I spend a lot of time making playlists. 
          The best ones have mildly unhinged titles.
        </h1>
      </div>
      <ul className="grid gap-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 object-center pl-4 pr-4">
        {playlists.map(displayPlaylist)}
      </ul>
    </div>
  );
}
