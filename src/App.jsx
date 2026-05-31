
import './App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <p className="bg-amber-200 text-xl">i love you</p>
      <button className="btn btn-primary btn-soft" onClick={() => toast.success('App installed successfully!')}>hi click me</button>

    </>
  )
}

export default App
