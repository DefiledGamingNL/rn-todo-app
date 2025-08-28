import {create} from 'zustand';


interface TodoStore {
    newTodo: string;
    setNewTodo: (todo: string) => void;
}

export const useTodoStore = create<TodoStore>(
    (set) => ({
        newTodo: '',
        setNewTodo: (todo: string) => set({newTodo: todo}),
    })
)