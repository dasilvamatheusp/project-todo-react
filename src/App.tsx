import { useState } from 'react'
import * as C from "./App.styles";
import { StyleSheetManager } from "styled-components";
import { Item } from './types/Item'
import { ListItem  } from './components/ListItem'
import { AddArea } from './components/AddArea/index'

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tarefa', done: false },
    { id: 2, name: 'Tarefa 2', done: true },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'done'}>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          <AddArea 
            onEnter={handleAddTask}
          />
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </C.Area>
      </C.Container>
    </StyleSheetManager>
    </>
  );
};

export default App;
