import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
  removeTask: (taskId: number) => void;
};

export const ListItem = ({ item, removeTask }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const removeTaskOnClick = () => {
    const taskId = item.id;
    removeTask(taskId);
  };

  return (
    <C.Container done={isChecked}>
      <div className="text">
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        <label>
          {item.name} - {isChecked ? "Concluido" : "Não Concluido"}
        </label>
      </div>
      <div className="icon" onClick={removeTaskOnClick}>
        🗑️
      </div>
    </C.Container>
  );
};
