import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  // {
  //   original: "/toninas/1.jpg",
  //   thumbnail: "/toninas/1.jpg",
  // },
  // {
  //   original: "/toninas/2.jpg",
  //   thumbnail: "/toninas/2.jpg",
  // },
  // {
  //   original: "/toninas/3.jpg",
  //   thumbnail: "/toninas/3.jpg",
  // },
  {
    original: "/proytoninas/5.jpg",
    thumbnail: "/proytoninas/5.jpg",
  },
  {
    original: "/proytoninas/1.jpeg",
    thumbnail: "/proytoninas/1.jpeg",
  },

  {
    original: "/proytoninas/2.jpg",
    thumbnail: "/proytoninas/2.jpg",
  },
  {
    original: "/proytoninas/3.jpg",
    thumbnail: "/proytoninas/3.jpg",
  },
  {
    original: "/proytoninas/4.jpg",
    thumbnail: "/proytoninas/4.jpg",
  },
  {
    original: "/toninas/4.jpg",
    thumbnail: "/toninas/4.jpg",
  },
  {
    original: "/toninas/5.jpeg",
    thumbnail: "/toninas/5.jpeg",
  },
  {
    original: "/toninas/6.jpeg",
    thumbnail: "/toninas/6.jpeg",
  },
];

const Gallery = () => {
  return (
    <div className="my-12">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
