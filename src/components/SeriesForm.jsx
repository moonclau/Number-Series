import {useState} from "react";
import PropTypes from 'prop-types';
const SeriesForm = ({message,handleOperation}) => {
    const [number, setNumber] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleOperation(number);
        
    }
return(
    <section className="mt-10 justify-center align-middle" >
     <div className="relative z-10 flex justify-center p-4 text-center">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 md:w-5/6">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h2 className="mt-2"> Ingresa un numero:</h2>
                    <p className="text-sm text-gray-500"> debe ser un numero valido, entero.</p>
                    <form onSubmit={handleSubmit} >
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <input type="number" name="number" id="number" className=" min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"  
                            value={number}
                            onChange={(e) => setNumber(e.target.value === '' ? '' : parseInt(e.target.value))}/>
                        </div>
                        <div className='text-sm text-red-600'>{message}</div>
                        <button type="submit" className=" mt-10 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Calcular
                        </button>
                    </form>
                </div>
            </div>
        </div>
            

     </div>
    </section>
)

} 
export default SeriesForm;
SeriesForm.propTypes = {
    message: PropTypes.string,
    handleOperation: PropTypes.func
  }