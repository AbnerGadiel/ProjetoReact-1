function Card({props}){
    return (
        <div>
            <img src="../imagens/{props.fotoPerfil}"/>
            <h1>{props.nome}</h1>
            <p>{props.Biografia}</p>
        </div>
    )
}

export default Card;