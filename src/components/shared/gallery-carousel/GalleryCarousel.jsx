import { useEffect } from "react"
import { Splide } from "@splidejs/splide";
import './gallery-carousel.scss';

const Gallery = ({onClick,imagesList}) => {
    
    useEffect(() => {
        const splide = new Splide("#main-carousel", {
            width: '100%',
            height: '100%',
            pagination: false,
            cover: true
        });
        const initThumbnail = (thumbnail, index) => {
            thumbnail.addEventListener("click", function () {
                splide.go(index);
            });
        }
        var thumbnails = document.getElementsByClassName("thumbnail");
        var current;
        for (var i = 0; i < thumbnails.length; i++) {
            
            initThumbnail(thumbnails[i], i);
        }
        splide.on("mounted move", function () {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
            current.classList.remove("is-active");
            }

            thumbnail.classList.add("is-active");
            current = thumbnail;
        }
        });
        splide.mount();
    })

    return (
        <>
            <span className="close-icon" onClick={onClick}>&#10005;</span>
            <section id="main-carousel" className="splide" aria-label="My Awesome Gallery">
                <div className="splide__track">
                    <ul className="splide__list">
                        {
                            imagesList.length > 0 && imagesList.map(image => <li key={image.alt} className="splide__slide">
                                <img src={image.img} alt={image.alt} />
                            </li>)
                        }
                    </ul>
                </div>
            </section>


            <ul id="thumbnails" className="thumbnails">
                {
                    imagesList.length > 0 && imagesList.map(image => <li key={image.alt} className="splide__slide thumbnail">
                    <img src={image.img} alt={image.alt} />
                    </li>)
                }
            </ul>
        </>
    )
}

export default Gallery;