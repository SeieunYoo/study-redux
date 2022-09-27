import { useDispatch } from 'react-redux';
import { dispatchAddNum } from '../redux/store';
import { useState } from 'react';
import styled from 'styled-components';

function AddButton() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  function handleAddNum(number: number) {
    dispatch(dispatchAddNum(number));
    setSelected(number);
  }

  return (
    <>
      {selected !== 0 && <h2>+{selected}을 선택했습니다</h2>}
      <StyledButton onClick={() => handleAddNum(8)}>+8</StyledButton>
      <StyledButton onClick={() => handleAddNum(6)}>+6</StyledButton>
      <StyledButton onClick={() => handleAddNum(4)}>+4</StyledButton>
    </>
  );
}

export default AddButton;

const StyledButton = styled.button`
  margin: 10px;
`;
