import { useState } from 'react';

const images = [
  { thumbnail: '/public/image/desktop.png', large: '/public/image/desktop.png' },
  { thumbnail: '/public/image/gaming.png', large: '/public/image/gaming.png' },
  { thumbnail: '/public/image/macbook.png', large: '/public/image/macbook.png' },
  { thumbnail: '/public/image/watch.png', large: '/public/image/watch.png' },
];

function ImageGallery() {
  const [mainImage, setMainImage] = useState(images[0].large);

  const handleThumbnailClick = (largeImageUrl) => {
    setMainImage(largeImageUrl);
    
  };

  return (
    <div className="image-gallery-container">
      {/* Main image display area */}
      <div className="main-image-display">
        <img src={mainImage} alt="Main product view" className="main-image w-25" />
      </div>

      {/* Thumbnail navigation */}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            // alt={`Thumbnail ${index + 1}`}
            className="thumbnail-image "
            onClick={() => handleThumbnailClick(image.large)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;