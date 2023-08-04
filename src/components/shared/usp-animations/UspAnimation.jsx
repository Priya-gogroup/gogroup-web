import './usp-animation.scss';

const Donut = ({hoverClass = ""}) => {

    return (
        <>
            <div className={`flex-box ${hoverClass? hoverClass : ''}`}>
                <div className='absolute-flex-center'><div className="center bg-fff"></div></div>
            </div>
        </>
    )
}

const SliderCircle = ({hoverClass = ""}) => {

    return (
        <>
            <div className= {`flex-box absolute-box ${hoverClass? hoverClass : ''}`}>
                <div className='absolute-flex-center bg-0C60F7 absolute-1'></div>
                <div className='absolute-flex-center absolute-2'>
                    <div className="center bg-0C60F7"></div>
                </div>
            </div>
        </>
    )
}

const Spinner = ({hoverClass = ""}) => {

    return (
        <>
            <div className={`flex-box ${hoverClass? hoverClass : ''}`}>
                <div className='animation-box'>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
        </>
    )
}

const Circle = () => {
    return (
        <>
            <div className="circle"></div>
        </>
    )
}

export {Donut, SliderCircle, Spinner, Circle};