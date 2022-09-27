import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { dispatchCount, dispatchName } from './redux/store';
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

  const currentState : IState = useSelector((state : IState)=>state);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={name} name="name" onChange={onChange} />
        <input value={num} name="num" onChange={onChange} />
        <button>저장</button>
      </form>
      <div>{currentState.name}</div>
      <div>{currentState.num}</div>
      <button>+8</button>
    </>
  );
}

export default App;
