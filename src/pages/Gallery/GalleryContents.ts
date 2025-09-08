interface CourselImage {
  id: number;
  src: string;
  alt: string;
}

export interface IGalleryCard {
  id: number;
  title: string;
  date: string;
  description: string;
  images: CourselImage[];
}

export const galleryImages: CourselImage[] = [
  {
    id: 1,
    src: "https://picsum.photos/800/600?random=1",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "https://picsum.photos/800/600?random=2",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "https://picsum.photos/800/600?random=3",
    alt: "Gallery Image 3",
  },
];

export const galleryCard: IGalleryCard[] = [
  {
    id: 1,
    title: "Summer Exhibition 2025",
    date: "2025-07-15",
    description:
      "Annual summer exhibition featuring contemporary art pieces and installations",
    images: [
      {
        id: 1,
        src: "https://picsum.photos/800/600?random=10",
        alt: "Summer Exhibition Image 1",
      },
      {
        id: 2,
        src: "https://picsum.photos/800/600?random=11",
        alt: "Summer Exhibition Image 2",
      },
    ],
  },
  {
    id: 2,
    title: "Tech Innovation Showcase",
    date: "2025-07-20",
    description: "Exhibition of cutting-edge technology and research projects",
    images: [
      {
        id: 3,
        src: "https://picsum.photos/800/600?random=12",
        alt: "Tech Showcase Image 1",
      },
      {
        id: 4,
        src: "https://picsum.photos/800/600?random=13",
        alt: "Tech Showcase Image 2",
      },
    ],
  },
  {
    id: 3,
    title: "Scientific Research Conference",
    date: "2025-07-25",
    description:
      "International conference presenting latest research findings and discoveries",
    images: [
      {
        id: 5,
        src: "https://picsum.photos/800/600?random=14",
        alt: "Conference Image 1",
      },
      {
        id: 6,
        src: "https://picsum.photos/800/600?random=15",
        alt: "Conference Image 2",
      },
    ],
  },
];
