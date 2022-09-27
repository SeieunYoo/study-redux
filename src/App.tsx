import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchCount, dispatchName, dispatchAddNum } from './redux/store';
import { IState } from './redux/store';
import AddButton from './components/AddButton';

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
    <>
      <form onSubmit={onSubmit}>
        <input value={name} name="name" type="text" onChange={onChange} />
        <input value={num} name="num" type="number" onChange={onChange} />
        <button>저장</button>
      </form>
      {currentState.num !== 0 && (
        <div>
          {currentState.name}님의 숫자는 {currentState.num}
        </div>
      )}
      <AddButton />
    </>
  );
}

export default App;
