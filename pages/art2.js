import Nav from '../components/nav';

const images = [{
        path: 11,
        description: "Untitled, 2019. Plaster and Acrylic on Wood.",
        x: 3,
    },
    {
        path: 9,
        description: "Untitled, 2019. Plaster and Acrylic on Wood.",
        x: 2,
    },
    {
        path: 6,
        description: "Untitled, 2019. Plaster and Acrylic on Wood.",
    },
    {
        path: 2,
        description: "Untitled, 2019. Plaster and Acrylic on Wood.",
    },
    {
        path: 8,
        description: "Untitled, 2019. Plaster and Acrylic on Wood.",
    }
]

const formatImage = (props) => {
return (<div class="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
<a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={{backgroundImage: `url(/images/art${props.path}.jpg)`}}>
    Link
</a>
</div>)}

export default function ArtPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-xl text-center text-gray-500 pt-20">
        I largely paint with a combination of acylics and oils. Sometimes I like making sculptures out of plaster casts of my own hands.
        </h1>
      </div>
    <div class="container mx-auto p-8">
    <div class="flex flex-row flex-wrap -mx-2">
        {images.map(formatImage)}
    </div>
    </div>
    </div>
  );
}