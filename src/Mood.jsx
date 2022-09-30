import './App.css'
import DeleteNote from './DeleteNote'

export default function Mood({id,rating,note,timestamp, onDelete, onEdit}) {
    let ts = new Date(timestamp);
    let stars=""

    for (let i=0; i<10; i++){
        i < rating? stars+="★" : stars+="☆"
    }

    return (
        <div className="App">
            <div className={"moodCard"}>
                <p>{ts.toUTCString()}</p>
                <p>{note}</p>
                <p>{stars}</p>
                <button className={"noteCardsBtn"}  onClick={()=>onDelete(id)}>Delete</button>
                <button className={"noteCardsBtn"} onClick={()=>onEdit(id, rating, note) }> Edit</button>


            </div>

        </div>
    )
}


