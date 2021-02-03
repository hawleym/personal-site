import Nav from '../components/nav';

const images = [
  {
    path: 11,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    x: 6,
  },
  {
    path: 12,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    y: 4,
  },
  {
    path: 9,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    x: 4,
  },
  {
    path: 2,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
  {
    path: 8,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
  {
    path: 7,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
  {
    path: 3,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
  {
    path: 4,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
  {
    path: 5,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    x: 3,
  },
  {
    path: 10,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    x: 3,
  },
  {
    path: 1,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
    x: 4,
  },
  {
    path: 6,
    description: 'Untitled, 2019. Plaster and Acrylic on Wood.',
  },
];

const displayImage = (props) => (
  <div
    className={`row-span-${props.y || 2} col-span-${
      props.x || 2
    } w-full h-96 min-h-full bg-cover bg-center flex-grow`}
    style={{ backgroundImage: `url(/images/art/${props.path}.jpg)` }}
  >
    <a href={`/images/art/${props.path}.jpg`} title={props.description}>
      {props.description}
    </a>
  </div>
);

export default function ArtPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-xl text-center text-gray-500 pt-20">
          I largely paint with a combination of acylics and oils. Sometimes I
          like making sculptures out of plaster casts of my own hands.
        </h1>
        <h1 className="text-xl text-center text-gray-500 pt-5">
          I accept commissions. If you would like some of my art, please
          email{' '}
          <a 
            href="mailto:I-really-like-your-art-please-sell-me-some-of-your-art@hawleymoore.com"
            className="text-blue-500 hover:font-semibold"  
          >i-really-like-your-art-please-sell-me-some-of-your-art@hawleymoore.com</a>.
        </h1>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-6 gap-4 justify-items-stretch place-content-center">
          {images.map(displayImage)}
        </div>
      </div>
    </div>
  );
}
