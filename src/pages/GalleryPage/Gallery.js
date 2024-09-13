import React, { useState } from 'react';
import NavbarM from '../../components/Navbar/NavbarM';
import ImagesViewer from 'react-images-viewer';
import './GalleryViewer.css'; // Ensure correct path

const GalleryPage = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400'
  ];

  const openViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <NavbarM />
      <h1>Galéria</h1>
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openViewer(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      {isViewerOpen && (
        <ImagesViewer
          src={images}
          currentIndex={currentImage}
          isOpen={isViewerOpen}
          onClose={closeViewer}
        />
      )}
    </>
  );
};

export default GalleryPage;
