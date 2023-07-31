import { useState } from "react";
import * as C from "./App.styles";
import { StyleSheetManager } from "styled-components";
import { Item } from "./types/Item";
import { AddArea } from "./components/AddArea/index";
import { ListItem } from "./components/ListItem/index";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const removeTask = (taskId: number) => {
    const updatedList = list.filter((item) => item.id !== taskId);
    setList(updatedList);
  };

  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "done"}>
        <C.Container>
          <C.Area>
            <C.Header>Lista de Tarefas</C.Header>
            <AddArea onEnter={handleAddTask} onSubmitClick={handleAddTask} />
            {list.map((item, index) => (
              <ListItem key={index} item={item} removeTask={removeTask} />
            ))}
          </C.Area>
        </C.Container>
      </StyleSheetManager>
    </>
  );
};

export default App;
