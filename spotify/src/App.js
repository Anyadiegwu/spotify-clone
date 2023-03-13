import { useEffect } from 'react';
import './App.css';
import Homepage from './Pages/MainPage/HomePage';
import Login from './Pages/MainPage/LoginPage/Login';
import { reducerCases } from './Utils/Constant';
import { useStateProvider } from './Utils/StateProvider';

function App() {
  const [{token}, dispatch ] = useStateProvider();
  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type: reducerCases.SET_TOKEN, token});
    }
  },[token, dispatch])


  return (
    <div className="App">

      { token ? <Homepage /> :
        <Login />
      }


     
    </div>
  );
}

export default App;
