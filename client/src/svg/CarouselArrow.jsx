import React from 'react'

const CarouselArrow = ({ className, onClick }) => {
    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 39 44" fill="none">
            <path d="M39 22L0.750002 43.6506L0.750004 0.349364L39 22Z" fill="white" />
        </svg>
    )
}

export default CarouselArrow