import { FC } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
} from '@heroui/react'

interface Option {
    key: string
    label: string
    desc: string
}

interface Props {
    isOpen: boolean
    onClose: () => void
    options: Option[]
}

export const OptionsDetailsDrawer: FC<Props> = ({ isOpen, onClose, options }) => (
    <Drawer isOpen={isOpen} placement="right" onOpenChange={onClose} size="md" backdrop="opaque">
        <DrawerContent>
            <DrawerHeader>
                <h2 className="text-xl font-bold">Seçenek Detayları</h2>
            </DrawerHeader>
            <DrawerBody className="space-y-4">
                {options.map((opt) => (
                    <div key={opt.key} className="border rounded-lg overflow-hidden">
                        <img
                            src="/hero_poster.png"
                            alt={opt.label}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold mb-1">{opt.label}</h3>
                            <p className="text-sm text-gray-600">{opt.desc}</p>
                        </div>
                    </div>
                ))}
            </DrawerBody>
            <DrawerFooter className="flex justify-end">
                <Button variant="flat" color="primary" onPress={onClose}>
                    Kapat
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
)
