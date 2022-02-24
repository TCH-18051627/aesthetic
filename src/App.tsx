import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState<string>('美学评价平台');
  const onClick = (v: any) => {
    setTitle('美学分析');
  };

  return (
    <div className="App">
      <header className="App-header" onClick={onClick}>
        {title}
      </header>
    </div>
  );
}

export default App;
