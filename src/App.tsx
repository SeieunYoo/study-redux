import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchCount, dispatchName } from './redux/store';
import { IState } from './redux/store';
import AddButton from './components/AddButton';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState({
    name: '',
    num: 0,
  });

  const { name, num } = data;

  const dispatch = useDispatch();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setData({ name: '', num: 0 });

    if (name.trim()) {
      dispatch(dispatchCount(num));
      dispatch(dispatchName(name));
    }
  }

  const currentState = useSelector((state: IState) => state);
  return (
    <Container>
      <h1>Count-Num</h1>
      {currentState.num !== 0 ? (
        <h2>
          {currentState.name}님의 숫자는 {currentState.num}
        </h2>
      ) : (
        <h2>당신의 이름과 숫자는?</h2>
      )}
      <form onSubmit={onSubmit}>
        <Input
          value={name}
          name="name"
          type="text"
          placeholder="이름을 입력하세요"
          onChange={onChange}
        />
        <Input
          value={num}
          name="num"
          type="number"
          placeholder="숫자를 입력하세요"
          onChange={onChange}
        />
        <SubmitButton>저장</SubmitButton>
      </form>

      <AddButton />
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-top: 5%;
`;

const Input = styled.input`
  font-family: 'HS-Regular';
  width: 10vw;
  height: 5vh;
  margin-right: 20px;
`;

const SubmitButton = styled.button`
  padding-top: 3px;
`;
