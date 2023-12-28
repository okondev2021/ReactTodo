import {db} from '../dexie'
import checkMark from '../images/icon-check.svg'
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'react'

import crossSvg from '../images/icon-cross.svg'

const TASKLIST = () => {

    const screenWidth = window.innerWidth

    const [query, setquery] = useState(null);

    const tasks = useLiveQuery( () => db.todo.reverse().toArray())

    useEffect( () => {
        setquery(tasks)
    }, [tasks])


    const testing = async (val) => {
        if(val === 'all'){
            setquery(await db.todo.reverse().toArray())
        }
        else if(val === 'completed'){
            setquery(await db.todo.where('status').equals(1).reverse().toArray())
        }
        else{
            setquery(await db.todo.where('status').equals(0).reverse().toArray())
        }
    }

    const completeTask = (id) => {
        db.todo.update(id, {
            "status": 1
        })
    }

    const checkMarkImage =  <img src={checkMark} alt="" />

    const numberOfIncompleteTasks = useLiveQuery( async () => await db.todo.where('status').equals(0).toArray())?.length

    const deleteCompletedTasks = () => {
        db.todo.where('status').equals(1).delete()
    }
    const querySelector = (
        <>
            <button onClick={ () => testing('all')} className='text-primary-Bright-Blue'>All</button>
            <button className=' dark:text-light-400 text-light-400' onClick={ () => testing('pending')}>Active</button>
            <button className=' dark:text-light-400 text-light-400' onClick={ () => testing('completed')}>Completed</button>
        </>
    )

    const mobileQuery = (
        <div className='items-center justify-center hidden w-full gap-4 p-4 mt-2 rounded-md shadow-md bg-light-100 dark:bg-dark-200 mobile:flex'>
            {querySelector}
        </div>
    )
    const taskFooter = (
        <div className='flex items-center justify-between p-4 text-xs'>
            <section className=' text-light-400'>
                <p>{numberOfIncompleteTasks} items left</p>
            </section>
            <section className='flex items-center justify-between gap-3'>
                {screenWidth > 430 && querySelector}
            </section>
            <section>
                <p className='cursor-pointer mobile:text-light-400 dark:text-light-400' onClick={deleteCompletedTasks}>Clear Completed</p>
            </section>
        </div>
    )

    const [tasksFooterDisplay, setTasksFooterDisplay] = useState(false)

    useEffect(() => {
        if (tasks?.length > 0) {
            setTasksFooterDisplay(true)
        }
        else{
            setTasksFooterDisplay(false)
        }
    }, [tasks]);


    const deleteTask = (id) => {
        db.todo.delete(id)
    }



    return(
        <>
            <div className='w-full my-6 font-medium rounded-md shadow-lg bg-light-100 dark:bg-dark-200'>
                {query?.map( (task) => (
                    <div key={task.id} className='flex items-center justify-between p-4 cursor-pointer border-b-1 dark:border-dark-600'>
                        <div className='flex items-center gap-4'>
                            <span onClick={() => completeTask(task.id)} className={` bg-transparent h-6 w-6 mobile:h-5 mobile:w-5 rounded-full border-1 border-light-200 dark:border-dark-400 cursor-pointer hover:border-primary-Bright-Blue flex justify-center items-center ${task.status === 1 ? 'bg-gradient-to-r  from-left to-right': ' bg-light-100'}`}>
                                {task.status === 1 && checkMarkImage}
                            </span>
                            <p className={`${task.status === 1 ? 'completeTask': 'inCompleteTask'} mobile:text-sm dark:text-light-400`}>{task.task}</p>
                        </div>
                        <img onClick={ () => deleteTask(task.id)} src={crossSvg} alt="" />
                    </div>
                ))}
                <div>
                    {tasksFooterDisplay? taskFooter: ""}
                </div>
            </div>
            {tasksFooterDisplay && mobileQuery}
        </>

    )
}

export default TASKLIST