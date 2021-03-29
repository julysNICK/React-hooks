import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('chamou inverte', action.payload);
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('nunhuma action encotrada');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Mudar
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'inverter',
          })
        }
      >
        inverter
      </button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOiSA' })}>SEM ACTION</button>
    </div>
  );
}

export default App;
