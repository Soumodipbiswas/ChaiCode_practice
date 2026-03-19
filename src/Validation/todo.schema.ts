import { z } from 'zod'

export const todoValidationSchema = z.object({
    id: z.string().describe('ID of the todo'),
    title: z.string().describe('Title of the todo'),
    description: z.string().optional().describe('Description of the todo'),
    isComplete: z.boolean().default(false).describe('If the todo item is completed or not'),
})

export type Todo = z.infer<typeof todoValidationSchema>
// export interface ITodo {
//     id: string
//     title: string
//     description?: string
//     isComplete: boolean
// }