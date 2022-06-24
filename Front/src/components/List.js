const List = (props) => {

    const datos = props.items

    if(datos.length === 0){
        return(
            <p>No hay items</p>
        )
    }

    return (
        <>
            <h2>Lista</h2>
            <ul>
                {datos.map((item, index) =>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </>

    )
}

export default List;