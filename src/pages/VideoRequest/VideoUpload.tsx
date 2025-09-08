import { VideoDropZone } from '@/components/VideoDropZone'
import { FC } from 'react'

interface Props {
    file: File | null
    onFileSelected: (f: File) => void
    onFileRemoved: () => void
}

export const VideoUploadSection: FC<Props> = ({
    file,
    onFileSelected,
    onFileRemoved,
}) => (
    <div
        className={`
      flex flex-col rounded-md p-4 items-center justify-center w-full
      ${file ? 'max-w-xl border-none' : 'max-w-md border-2 border-dashed'}
    `}
    >
        <VideoDropZone
            file={file}
            onFileSelected={onFileSelected}
            onFileRemoved={onFileRemoved}
        />
    </div>
)
