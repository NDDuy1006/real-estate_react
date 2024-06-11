import { useState } from "react"
import "./gallery.scss"

interface IProps {
  images: string[]
}

function Gallery({ images }: IProps) {
  const [imageIndex, setImageIndex] = useState<number | null>(null)
  
  const changeSlide = (direction: string) => {
    if (imageIndex !== null) {
      if (direction === "backward") {
        if (imageIndex === 0) {
          setImageIndex(images.length - 1);
        } else {
          setImageIndex(imageIndex && imageIndex - 1);
        }
      } else {
        if (imageIndex === images.length - 1) {
          console.log("Image Index --- +++", imageIndex);
          
          setImageIndex(0);
        } else {
          setImageIndex(imageIndex + 1);
          // setImageIndex(imageIndex && imageIndex + 1)
          // this does not work because imageIndex === 0 has the falsy value, the "imageIndex + 1" never runs
        }
      }
    }
  };

  return (
    <div className="gallery">
      {imageIndex !== null && (
        <div className="slider">
          <div className="arrow" onClick={() => changeSlide("backward")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="img-container">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt=""
              onClick={() => changeSlide("forward")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}
      <div className="primary">
        <img
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="secondadries">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery