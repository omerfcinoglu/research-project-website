import { Carousel } from '@/components/Carousel'
import { Button, Card, CardBody } from '@heroui/react'
import { IGalleryCard } from './GalleryContents'

export const GalleryCard = ({ title, date, description, images }: IGalleryCard) => {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1110px]"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Carousel
                            images={images}
                            autoPlay={true}
                            interval={3000}
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h5 className="text-3xl font-bold text-foreground/90">{title}</h5>
                                <p className="text-small text-foreground/80">{date}</p>
                                <p className="text-large font-medium mt-2">{description}</p>
                            </div>
                            <Button
                                isIconOnly
                                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                radius="full"
                                variant="light"
                                onPress={() => { }}
                            >
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
