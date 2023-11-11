import './App.css';
import Qr from './Component/Qr';

function App() {
  return (
    <div className="App">
      <div className=" items-center pt-[7%]  bg-blue-100 h-screen  ">
        
        <div className='h-max p-5  md:w-[30%] xl:w-[20%] w-[50%] shadow-2xl		rounded-xl mx-auto bg-white'>
          <Qr/>
        </div>
     
    </div>
    </div>
  );
}

export default App;
