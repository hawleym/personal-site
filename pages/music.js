import Nav from '../components/nav';

export default function MusicPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-3xl text-center text-sage">
        I spend a lot of my free time making playlists. Feel free to listen to some of my favorites.
        </h1>
      </div>
      <ul className="grid gap-3 grid-cols-4 object-center">
        <li className="py-2">
            <iframe src="https://open.spotify.com/embed/playlist/322AJJWNX7rBufEIboSVQq" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
            <iframe src="https://open.spotify.com/embed/playlist/6bm9AZARvIG7plnSHDo6lf" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/5Z9Hfijtg5vKzsJGB1V5XB" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/4I002ODgfX2auEon1JExkg" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/6jgfkYkYcJ6HsQo3cbwo2j" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/2mS5GHS0Md6VwiEeasqWAy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
         <iframe src="https://open.spotify.com/embed/playlist/7nx7g8gLRZCbrMuMFyeHgE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </li>
        <li className="py-2">
          <iframe src="https://open.spotify.com/embed/playlist/6M1CBeFUTN7oxUtbJLvKQi" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
      </ul>
    </div>
  );
}