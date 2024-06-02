function Credittile(props){
    return(
        <div className="creditCard">
            <h5>{props.creditType}</h5>
            <h3>{props.noOfCredits}</h3>
        </div>
    )
}
export default Credittile;