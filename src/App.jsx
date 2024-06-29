

import './App.css'

import AudioRef from './components/AudioRef'
import Ref from './components/Ref'
import Counter from './pages/IncDecReducer'
import IncrementCounter from './pages/IncrementCounter'


function App() {
 

  return (
    <div>
      <Ref />
      <AudioRef />  
      <Counter />
      <IncrementCounter />
     
    </div>
  )
}

export default App
