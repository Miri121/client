import { useSignal } from '@preact/signals-react';
import './App.css'

function App() {
  const isOpen = useSignal(true);
  const toggle = () => {
    // no changes
    isOpen.value = !isOpen.value;
  };

  //not printing
  console.log(isOpen.value)

  return (
    <>
       <div style={{ color: 'red', width: '100%', height: '100%',border:"1px solid red" }} onClick={toggle} >
          {isOpen.value ? 'signal true' : 'signal false'}
        </div>
    </>
  )
}

export default App
