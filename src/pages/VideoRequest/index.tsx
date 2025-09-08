import { useState, ChangeEvent, FormEvent } from 'react'
import DefaultLayout from '@/layouts/default'
import { Divider } from '@heroui/react'
import { OptionsForm } from '@/components/OptionsForm'
import { VideoUploadSection } from './VideoUpload'
import { options } from './Options'

export default function VideoRequestForm() {
    const [video, setVideo] = useState<File | null>(null)
    const [email, setEmail] = useState('')
    const [choices, setChoices] = useState<string[]>([])
    const [submitting] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log("sending email with choices:", choices)
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
                        disabled={submitting || !video || !email || choices.length === 0}
                    />
                </div>
            </div>
        </DefaultLayout>
    )
}
