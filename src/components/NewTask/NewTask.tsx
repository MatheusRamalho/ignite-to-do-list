import { FormEvent, useState } from 'react'
import Image from 'next/image'

import { Icon } from '../Icon'

import logoSvg from '@/assets/logo-full.svg'

interface NewTaskProps {
    onNewTask: (taskTitle: string) => void
}

export function NewTask({ onNewTask }: NewTaskProps) {
    const [newTask, setNewTask] = useState('')

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault()
        onNewTask(newTask)
        setNewTask('')
    }

    return (
        <div className="relative w-full h-48 bg-gray-950 flex flex-col items-center justify-center border-b border-b-gray-700">
            <Image
                width={160}
                src={logoSvg}
                alt="Logo Todo, escrito to em azul e do em roxo, com um desenho de um foguete"
            />

            <div className="absolute -bottom-[44px] w-full max-w-[1024px] h-[5.5rem] p-4 rounded-lg">
                <form
                    className="flex items-center gap-4"
                    id="formBanner"
                    onSubmit={handleCreateNewTask}
                >
                    <input
                        className="flex-1 h-16 px-4 bg-gray-800 rounded-lg border border-gray-700 placeholder:text-sm text-white"
                        required
                        type="text"
                        id="new-task-input"
                        name="new-text-input"
                        placeholder="Adicione uma nova tarefa..."
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                    />

                    <button
                        type="submit"
                        className="cursor-pointer w-28 h-16 p-4 bg-blue-500 rounded-lg border-none font-bold text-white flex items-center justify-center gap-2 transition-colors hover:bg-blue-300"
                    >
                        Criar
                        <Icon
                            name="plus-circle"
                            customClass="size-5"
                            strokeWidth={2}
                        />
                    </button>
                </form>
            </div>
        </div>
    )
}
