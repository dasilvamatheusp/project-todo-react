import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox} 
      />
      <label>
        {item.name} -{isChecked ? 'Concluido' : 'Não Concluido'} 
      </label>
    </C.Container>
  );
};
