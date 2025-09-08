import { FC, ChangeEvent, FormEvent, useState } from 'react'
import {
    Input,
    Button,
    CheckboxGroup,
    Checkbox,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@heroui/react'

interface Option {
    key: string
    label: string
    desc: string
}

interface Props {
    email: string
    choices: string[]
    options: Option[]
    onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChoicesChange: (c: string[]) => void
    onSubmit: (e: FormEvent) => void
    disabled: boolean
}

export const OptionsForm: FC<Props> = ({
    email,
    choices,
    options,
    onEmailChange,
    onChoicesChange,
    onSubmit,
    disabled,
}) => {
    const [openKey, setOpenKey] = useState<string | null>(null)

    return (
        <form onSubmit={onSubmit} className="flex flex-col justify-between max-w-md w-full">
            <Input
                label="Email"
                name="user_email"
                placeholder="Enter your email"
                value={email}
                onChange={onEmailChange}
                className="mb-4"
            />

            <CheckboxGroup value={choices} onChange={onChoicesChange} className="mb-4">
                {options.map((opt) => {
                    const isOpen = openKey === opt.key

                    return (
                        <Checkbox key={opt.key} value={opt.key} name="choices">
                            <div className="flex items-center gap-2">
                                <Popover
                                    isOpen={isOpen}
                                    onOpenChange={(open) => {
                                        if (!open) setOpenKey(null)
                                    }}
                                    placement="right"
                                    showArrow
                                    offset={6}
                                >
                                    <PopoverTrigger>
                                        <span
                                            className="cursor-pointer"
                                            onMouseEnter={() => setOpenKey(opt.key)}
                                            onMouseLeave={() => setOpenKey(null)}
                                        >
                                            {opt.label}
                                        </span>
                                    </PopoverTrigger>

                                    <PopoverContent
                                        className=" max-w-screen-xl"
                                        onMouseEnter={() => setOpenKey(opt.key)}
                                        onMouseLeave={() => setOpenKey(null)}
                                    >
                                        <div className="p-2 text-lg font-bold">{opt.label}</div>
                                        <div className="p-2 text-sm font-medium">Details will be here</div>
                                        <img
                                            src="https://cataas.com/cat"
                                            alt={opt.label}
                                            className="p-2 w-full h-auto object-cover"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </Checkbox>
                    )
                })}
            </CheckboxGroup>

            <div className="flex flex-row gap-4 justify-center items-center">
                <Button type="submit" variant="solid" color="primary" disabled={disabled}>
                    Submit
                </Button>
            </div>
        </form>
    )
}
