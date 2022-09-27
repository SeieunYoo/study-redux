import { stat } from 'fs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchCount, dispatchName, dispatchAddNum } from './redux/store';

function App() {
  const [data, setData] = useState({
    name: '',
    num: 0,
  });

  interface IState {
    name: string;
    num: number;
  }

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

  function handleAddNum(number: number) {
    dispatch(dispatchAddNum(number));
  }

  const currentState = useSelector((state : IState)=>state);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={name} name="name" type="text" onChange={onChange} />
        <input value={num} name="num" type="number" onChange={onChange} />
        <button>저장</button>
      </form>
      <div>{currentState.name}</div>
      <div>{currentState.num}</div>
      <button onClick={() => handleAddNum(8)}>+8</button>
      <button onClick={() => handleAddNum(6)}>+6</button>
      <button onClick={() => handleAddNum(4)}>+4</button>
    </>
  );
}

export default App;
