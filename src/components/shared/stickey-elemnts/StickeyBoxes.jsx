import { Circle, SliderCircle, Spinner } from '../usp-animations/UspAnimation';
import './stickey-boxes.scss';

const StickeyBoxes = () => {

    return (
        <>
            <div className="stickeyBoxes">
                <div id='box-1' className='box box-1'>
                    <SliderCircle hoverClass="slider"/>
                    <h3 className='box-header'>We start ventures internally</h3>
                    <p className='text'>We love building products. Therefore we create new ones internally where we have a strong conviction. In this setup, we are running the entire tech process as well as the business side.</p>
                    <p className='text'>When the company is gaining traction, we usually spin it out into a separate entity, tightly linked to GoGroup.</p>
                </div>
                <div id='box-2' className='box box-2'>
                    <Circle hoverClass='circle'/>
                    <h3 className='box-header'>We initiate with founders</h3>
                    <p className='text'>There are a lot of amazing ideas just waiting to be built. We team up with ambitious founders to bring them to life. That means building up a very strong foundation on the tech side, supporting on the business side and connecting to successful investors. </p>
                    <p className='text'>We build and grow together for the longterm.</p>
                </div>
                <div id='box-3' className='box box-3'>
                    <Spinner hoverClass='spinner' />
                    <h3 className='box-header'>We partner with experts</h3>
                    <p className='text'>Oftentimes, industry experts see opportunities that are not visible from the outside. These experts can be corporates, hidden champions or other knowledgable parties. When they have an idea that gets us excited, we partner up and build a venture with them.</p>
                    <p className='text'>In these cases we run the product-development and drive a startup culture into the ventures.</p>
                </div>
            </div>
        </>
    )
}

export default StickeyBoxes;