import Nav from '../components/nav';

const images = [
  {
    path: 11,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    x: 'sm:col-span-6',
  },
  {
    path: 12,
    description: 'Untitled, 2019. Oil and Acrylic on Wood.',
    y: 'sm:row-span-4',
  },
  {
    path: 9,
    description: 'Untitled, 2019. Oil and Acrylic on Wood.',
    x: 'sm:col-span-4',
  },
  {
    path: 2,
    description: 'Untitled, 2019. Oil and Acrylic on Wood.',
  },
  {
    path: 8,
    description: 'Untitled, 2019. Acrylic on Wood.',
  },
  {
    path: 7,
    description: 'Untitled, 2019. Plaster and Acrylic.',
  },
  {
    path: 3,
    description: 'Untitled, 2019. Oil and Acrylic on Wood.',
  },
  {
    path: 4,
    description: 'Untitled, 2019. Plaster and Acrylic.',
  },
  {
    path: 5,
    description: 'Gallery view of senior thesis show by Hawley Moore.',
    x: 'sm:col-span-3',
  },
  {
    path: 10,
    description: 'Gallery view of senior thesis show by Hawley Moore',
    x: 'sm:col-span-3',
  },
  {
    path: 1,
    description: 'Gallery view of senior thesis show by Hawley Moore',
    x: 'sm:col-span-4',
  },
  {
    path: 6,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
];

const displayImage = (props) => (
  <div
    className={`${props.y || 'sm:row-span-2'} ${
      props.x || 'sm:col-span-2'
    } relative`}
  >
    <img className="w-full" width="100%" src={`/images/art/${props.path}.jpg`}></img>
    <div className="opacity-0 hover:opacity-100 bg-white bg-opacity-50 absolute m-auto w-full h-full top-0 left-0">
      <a href={`/images/art/${props.path}.jpg`} title={props.description}>
        {props.description}
      </a>
    </div>
  </div>
);

export default function ArtPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-xl text-center text-gray-500 pt-20 mx-10">
          I paint with a combination of acylics and oils, and occasionally make sculptures out of plaster casts of my own hands.
        </h1>
        <h1 className="text-xl text-center text-gray-500 pt-3">
          I accept commissions. If you would like some of my art, please email{' '}
          <a
            href="mailto:art@hawleymoore.com"
            className="text-blue-500 hover:font-semibold"
          >
            art@hawleymoore.com
          </a>
          .
        </h1>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 justify-items-stretch place-content-center">
          {images.map(displayImage)}
        </div>
      </div>
    </div>
  );
}
