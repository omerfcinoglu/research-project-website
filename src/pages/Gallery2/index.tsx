import { useNavigate } from "react-router-dom"
import DefaultLayout from "@/layouts/default"
import { GalleryCard } from "./GalleryCard"
import { galleryCard } from './GalleryContents'

export const Gallery2 = () => {
    const navigate = useNavigate();

    const handleCardClick = (id: number) => {
        navigate(`/gallery2/${id}`);
    }

    return (
        <DefaultLayout>
            <div className="flex flex-col gap-8 p-8 max-w-[1200px] mx-auto">
                {galleryCard.map((card, i) => (
                    <div
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        className="cursor-pointer transition-transform hover:scale-[1.02]"
                    >
                        <GalleryCard
                            id={i}
                            title={card.title}
                            date={card.date}
                            description={card.description}
                            images={card.images}
                        />
                    </div>
                ))}
            </div>
        </DefaultLayout>
    )
}