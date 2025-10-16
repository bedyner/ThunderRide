import { useState } from 'react';

import'.//App.css'

import './index.css'
import './output.css';
import MainApp from './component/MainApp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <MainApp/>
    

    </>
  );
}

export default App;
