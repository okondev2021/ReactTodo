import {db} from '../dexie'
import { useRef } from "react"

const TASKINPUT = () => {

    const inputref = useRef(null)

    const addTask = (event) => {
        event.preventDefault()
        var task = inputref.current.value
        if(task !== ""){
            db.todo.add({
                task: task,
                status: 0
            })
            inputref.current.value = ""
        }
        else{
            alert('Enter valid task')
        }
    }

    // 0 forfalse, 1 for true

    return (
        <div className="flex items-center w-full gap-4 px-4 rounded-md mt-9 mobile:mt-5 h-14 mobile:h-11 bg-light-100 dark:bg-dark-200">
            <label className="w-6 h-6 rounded-full mobile:h-5 mobile:w-5 border-1 border-light-200 dark:border-dark-400" htmlFor="taskInput"></label>
            <form onSubmit={(e) => addTask(e)}>
                <input ref={inputref} name='taskInput' className="w-full outline-none mobile:text-xs dark:bg-dark-200" placeholder="Create a new todo..." type="text" id="taskInput" />
            </form>
        </div>
    )
}

export default TASKINPUT