
import './App.css'
import {useState} from 'react'
import SeriesNumbers from './components/SeriesNumber';
import "tailwindcss";
import FormSeries from './components/SeriesForm';
import ShowResponse from './components/ShowResponse';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const handleOperation =(number)=>{
      setMessage('');

        if( number < 0){
          setMessage('Ingrese un numero valido');
        }else{
          setResponse(SeriesNumbers.operation(number));
        }
        return message;
    }
  return (
    <main >
      <h1 className=" justify-center mt-10 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Funciones Numericas
      </h1>
      <FormSeries message = {message} handleOperation ={handleOperation}/>
      <ShowResponse response={response}/>
    </main>
  )
}

export default App
