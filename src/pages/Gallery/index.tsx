import DefaultLayout from '@/layouts/default'
import LightGallery from 'lightgallery/react';
import "./gallery.css"
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const galleryItems = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    size: '1600-1067',
    title: `Gallery Image ${index + 1}`,
    description: `Description for image ${index + 1}`,
    largeUrl: `https://picsum.photos/1600/1067?random=${index}`,
    thumbnailUrl: `https://picsum.photos/240/160?random=${index}`
}))

export const Gallery = () => {
    return (
        <DefaultLayout>
            <LightGallery
                elementClassNames="masonry-gallery-demo"
                plugins={[lgZoom, lgThumbnail]}
                speed={500}
            >
                {galleryItems.map((item) => (
                    <a
                        key={item.id}
                        className="gallery-item"
                        data-lg-size={item.size}
                        data-src={item.largeUrl}
                        data-sub-html={`<h4>${item.title}</h4><p>${item.description}</p>`}
                    >
                        <img
                            className="img-responsive"
                            src={item.thumbnailUrl}
                            alt={item.title}
                        />
                    </a>
                ))}
            </LightGallery>
        </DefaultLayout>
    )
}