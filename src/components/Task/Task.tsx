import { useState } from "react";
import deletebutton from "./assets/delete-icon.png";
import editbutton from "./assets/edit-icon.png";
import style from './task.module.scss';
import { MouseEvent } from "react";



interface TaskProps {
    name: string,
    id: number,
    deleteTask(taskid: number): void
    editTask(taskid: number): void
}

function Task({ name, id, deleteTask, editTask }: TaskProps) {
    const [checkBoxState, setCheckBoxState] = useState<boolean>(false)
    const standardText = `${style.task__text}`
    const crossedText = `${style.task__text} ${style.task__text__linethrough}`
    let textClassName = standardText

    function toggleClass() {
        if(!checkBoxState) {
            textClassName = standardText
        } else {
            textClassName = crossedText
        }
    }

    toggleClass()

    return(
        <div className={style.task} id={String(id)}>
            <input type="checkbox" checked={checkBoxState} onChange={(e) => setCheckBoxState(e.target.checked)}/>
            <span className={textClassName}>{name}</span>
            <div className={style.task__buttonbox}>
                <button 
                    className={style.task__buttonicon__delete}
                    onClick={() => deleteTask(id)}
                >
                    <img className={ style.task__buttonicon__img } id={String(id)} src={deletebutton} alt='delete button'/>
                </button>
                <button 
                    className={style.task__buttonicon__edit}
                    onClick={() => editTask(id)}
                >
                    <img className={ style.task__buttonicon__img } id={String(id)} src={editbutton} alt='edit button'/>
                </button>
            </div>
        </div>
    )
}

export default Task;