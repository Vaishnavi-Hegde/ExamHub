import "../App.css"
function Announcement(props){
    return(
       <div className="Annocement-discription">
        <h1 className="Annocement-Heading">{props.title}</h1>
        <p className="Annoucemet-paragraph">{props.discription}</p>
       </div>
    )
}
export default Announcement;