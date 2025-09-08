import { useState, ChangeEvent, FormEvent } from 'react'
import DefaultLayout from '@/layouts/default'
import emailjs from 'emailjs-com'
import { Divider } from '@heroui/react'
import { OptionsForm } from '@/components/OptionsForm'
import { VideoUploadSection } from './VideoUpload'
import { options } from './Options'

export default function VideoRequestForm() {
    const [video, setVideo] = useState<File | null>(null)
    const [email, setEmail] = useState('')
    const [choices, setChoices] = useState<string[]>([])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!video || !email || choices.length === 0) return

        const templateParams = {
            user_email: email,
            video_filename: video.name,
            selected_choices: choices.join(', '),
        }

        try {
            await emailjs.send(
                'service_bk5r1h8',
                'template_daeafj6',
                templateParams,
                'zJ-jyxeg0xQ2eO5zD'
            )
            setVideo(null)
            setEmail('')
            setChoices([])
            alert('E-posta başarıyla gönderildi.')
        } catch (error) {
            console.error('EmailJS hatası:', error)
            alert('E-posta gönderilirken bir hata oluştu.')
        }
    }

    return (
        <DefaultLayout>
            <div className="h-full flex items-center justify-center py-12">
                <div className="w-full max-w-4xl grid grid-cols-1 gap-8 justify-items-center">
                    <VideoUploadSection
                        file={video}
                        onFileSelected={setVideo}
                        onFileRemoved={() => setVideo(null)}
                    />

                    <Divider />

                    <OptionsForm
                        email={email}
                        choices={choices}
                        options={options}
                        onEmailChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        onChoicesChange={setChoices}
                        onSubmit={handleSubmit}
                        disabled={!video || !email || choices.length === 0}
                    />
                </div>
            </div>
        </DefaultLayout>
    )
}
