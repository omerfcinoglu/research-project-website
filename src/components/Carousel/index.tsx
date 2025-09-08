import { useState, useEffect } from 'react'
import { Button } from '@heroui/react'

interface CarouselProps {
    images: {
        id: number
        src: string
        alt: string
    }[]
    autoPlay?: boolean
    interval?: number
}

export const Carousel = ({ images, autoPlay = true, interval = 3000 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!autoPlay) return

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, interval)

        return () => clearInterval(timer)
    }, [autoPlay, images.length, interval])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="relative w-full h-full">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <Button
                isIconOnly
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50"
                onClick={prevSlide}
            >
                ←
            </Button>

            <Button
                isIconOnly
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50"
                onClick={nextSlide}
            >
                →
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all
                            ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}