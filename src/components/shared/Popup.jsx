import Gallery from "./gallery-carousel/GalleryCarousel";
import './popup.scss';
function Popup({ clue, onClick }) {
    return (
      <>
        
        <div className="Overlay" onClick={onClick} />
        <div className="Popup">
          <Gallery imagesList={clue}  onClick={onClick}/>
        </div>
      </>
    );
  }

export default Popup;