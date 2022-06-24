import { useState} from 'react';
import List from './List';
const Form = (props) => {

    const [texto, setTexto] = useState('');
    const [dataArray, setDataArrays] = useState([]);

    const sentFormHandler = (e) =>{
        e.preventDefault(); 

        const sentData = async () =>{

            const response = await fetch('http://localhost:4747/',{
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    data: texto
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()    
            setDataArrays(data.items)
        }

        sentData();
        setTexto('');
    }

    const setTextHandler = (e) =>{
        const texto = e.target.value;
        setTexto(texto)
    }

    return (
        <>
            <h2>Formulario</h2>
            <form onSubmit={sentFormHandler}>
                <input onChange={setTextHandler} type='text' value={texto}></input>
                <button>Enviar</button>
            </form>
            <List items={dataArray} />
        </>

    )
}

export default Form;