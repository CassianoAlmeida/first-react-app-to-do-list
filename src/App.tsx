import Form from "./components/Form/Form";
import { useState } from "react"
import { ITask } from "./interfaces/ITask";
import Task from "./components/Task/Task";
import { MouseEvent } from "react";


function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<ITask[]>([])

  function createTask(event: MouseEvent): void {
    event.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000000),
      name: task
    }
    setTaskList([...taskList, newTask])
    console.log(taskList)
  }

  function deleteTask(taskid: number): void {
    console.log(taskList.length + '?')
    console.log('deleta')
    setTaskList(taskList.filter((task) => task.id !== taskid)) 
  }

  function editTask(taskid: number): void {
    let promptResult = prompt('Digite o novo nome da tarefa:')

    let newTaskName = () => {
      if(promptResult == null) {
        promptResult = "vazio"
      } 
      return promptResult
    } 

    let newTaskNameString = String(newTaskName())

    const idIndex = taskList.map(task => task.id).indexOf(taskid)

    let newArr = [...taskList]

    newArr[idIndex] = {
      id: taskid,
      name: newTaskNameString
    }

    setTaskList(newArr)
  }

  return (
    <div className="App">
      <>
        <Form
          name="Tarefa"
          label="Insira a próxima tarefa:"
          placeholder="Fazer compras, estudar, limpeza..."
          type="submit"
          content="Adicionar tarefa"
          handleClick={createTask}
          value={task}
          onChangeFunc={(event) => {
            const element : any = event.target
            setTask(element.value)
          }}
        />
        
        {taskList.map((task) => (
          <Task
            name={task.name}
            id={task.id}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
        }    
      </>
    </div>
  );
}

export default App;
