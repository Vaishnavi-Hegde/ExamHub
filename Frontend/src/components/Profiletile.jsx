import "../App.css"
function Profiletile(props){
    return(
        <div className="profile-Div">
            <div className="ProfilePhoto">
                <img className="profileimg" src={props.image} alt={props.alttext} />
            </div>
            <div className="ProfileDis">
                <h2>{props.usn}</h2>
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}
export default Profiletile;