import { useDispatch } from 'react-redux';
import { dispatchAddNum } from '../redux/store';
import { useState } from 'react';
function AddButton() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  function handleAddNum(number: number) {
    dispatch(dispatchAddNum(number));
    setSelected(number);
  }

  return (
    <>
      {selected !== 0 && <div>+{selected}을 선택했습니다</div>}
      <button onClick={() => handleAddNum(8)}>+8</button>
      <button onClick={() => handleAddNum(6)}>+6</button>
      <button onClick={() => handleAddNum(4)}>+4</button>
    </>
  );
}

export default AddButton;
