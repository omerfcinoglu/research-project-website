import DefaultLayout from "@/layouts/default"
import { galleryCard } from "./GalleryContents"
import LightGallery from "lightgallery/react"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import { useRouter } from "next/router"

const GalleryDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const card = galleryCard.find((c) => c.id === Number(id))

    if (!card) {
        return (
            <DefaultLayout>
                <div className="p-8">Gallery not found.</div>
            </DefaultLayout>
        )
    }

    return (
        <DefaultLayout>
            <div className="max-w-3xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-2">{card.title}</h1>
                <p className="text-gray-500 mb-4">{card.date}</p>
                <p className="mb-6">{card.description}</p>
                <LightGallery plugins={[lgZoom, lgThumbnail]} speed={500}>
                    {card.images.map((img) => (
                        <a
                            key={img.id}
                            data-lg-size="1600-1067"
                            data-src={img.src}
                            data-sub-html={`<h4>${img.alt}</h4>`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-64 object-cover mb-4 rounded"
                            />
                        </a>
                    ))}
                </LightGallery>
            </div>
        </DefaultLayout>
    )
}

export default GalleryDetail