"use server"
import {client, e} from '@/lib/edgedb'
import { redirect } from 'next/navigation'

export async function deleteTask(id: string) {
    console.log(id)

    const deleteTask = e.delete(e.Task, task => ({
        filter_single: {id: id}
    }))

    await deleteTask.run(client)

    redirect('/')
}