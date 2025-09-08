import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader } from "@heroui/react";

type PublicationType = {
    id: number;
    title: string;
    date: string;
    description: string;
    author: string;
    link: string;
};

const publications: PublicationType[] = [
    {
        id: 1,
        title: "Yayın 1 Başlığı",
        date: "2024-05-10",
        description: "Bu yayın, bilimsel araştırmaların güncel gelişmelerini ele almaktadır. İçeriğinde çeşitli makaleler, analizler ve uzman görüşleri yer almaktadır. Katılımcıların deneyimleri ve önerileriyle zenginleştirilmiş bir kaynak sunar.",
        author: "Yazar Adı 1",
        link: "https://example.com/yayin-1"
    },
    {
        id: 2,
        title: "Yayın 2 Başlığı",
        date: "2024-06-15",
        description: "İkinci yayın, teknoloji ve inovasyon alanındaki yenilikleri kapsamaktadır. Sektördeki önemli gelişmeler, yeni projeler ve uygulamalar detaylı bir şekilde incelenmiştir. Okuyuculara yol gösterici bilgiler sunar.",
        author: "Yazar Adı 2",
        link: "https://example.com/yayin-2"
    },
    {
        id: 3,
        title: "Yayın 3 Başlığı",
        date: "2024-07-01",
        description: "Bu yayında eğitim ve öğretim yöntemleri üzerine yapılan araştırmalar paylaşılmıştır. Modern eğitim teknikleri, dijital araçlar ve öğretmenlerin deneyimleri ile ilgili kapsamlı bilgiler içerir.",
        author: "Yazar Adı 3",
        link: "https://example.com/yayin-3"
    }
];

const truncateDescription = (desc: string, maxWords: number = 50) => {
    const words = desc.split(" ");
    if (words.length <= maxWords) return desc;
    return words.slice(0, maxWords).join(" ") + " ...";
};

export const Publication = () => {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center">
                <h2 className="mb-6 text-2xl font-bold">Yayınlar</h2>
                <div className="flex flex-col items-center w-full space-y-6 gap-4">
                    {publications.map(pub => (
                        <Card key={pub.id} className="w-full max-w-4xl shadow-lg p-3">
                            <CardHeader>
                                <span className="font-bold text-lg">{pub.title}</span>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-10 relative">
                                    <div className="text-dark dark:text-white">{truncateDescription(pub.description)}</div>
                                    <div className="relative">
                                        <div className="text-sm">Tarih : {pub.date}</div>
                                        <div className="text-sm">Yazar : {pub.author}</div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 pt-2 pr-2 mt-4">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-700 hover:text-blue-900 transition bg-transparent px-0 py-0"
                                        >
                                            Makaleye Göz At
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}