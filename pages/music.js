import Nav from '../components/nav';

export default function MusicPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-3xl text-center text-gray-500 pt-20">
        I spend a lot of my free time making playlists. Feel free to listen to some of my favorites.
        </h1>
      </div>
      <ul className="grid gap-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 object-center pl-4 pr-4">
        <li className="py-2">
            <iframe src="https://open.spotify.com/embed/playlist/322AJJWNX7rBufEIboSVQq" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
            <iframe src="https://open.spotify.com/embed/playlist/6bm9AZARvIG7plnSHDo6lf" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/5Z9Hfijtg5vKzsJGB1V5XB" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/4I002ODgfX2auEon1JExkg" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/6jgfkYkYcJ6HsQo3cbwo2j" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/2mS5GHS0Md6VwiEeasqWAy" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
         <iframe src="https://open.spotify.com/embed/playlist/7nx7g8gLRZCbrMuMFyeHgE" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/6M1CBeFUTN7oxUtbJLvKQi" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
      </ul>
    </div>
  );
}