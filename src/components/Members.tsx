import { staticMembers } from '@/constants/staticMembers';
import { Member } from '@/interfaces/IMember';
import { Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Image, useDisclosure } from '@heroui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import MemberCard from './MemberCard';

export const Members = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [members] = useState<Member[]>(staticMembers);

    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleCardClick = (member: Member) => {
        setSelectedMember(member);
        onOpen();
    };

    return (
        <section ref={sectionRef} className="container mx-auto px-4 mt-6">
            <Divider />
            <h2 className="text-3xl font-bold text-center mt-4">Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
                {members.map((member, idx) => (
                    <motion.div
                        key={member._id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                        <MemberCard
                            member={member}
                            isEditable={false}
                            onSeeDetails={() => handleCardClick(member)}
                        />
                    </motion.div>
                ))}
            </div>

            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                {selectedMember?.name}
                            </DrawerHeader>
                            <DrawerBody>
                                <Image
                                    src={selectedMember?.image}
                                    className="w-24 h-24 rounded-full mb-4"
                                />
                                <p>{selectedMember?.description}</p>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </section>
    );
}
