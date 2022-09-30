
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";


export default function Edit({onNewMood, note, rating}) {

    const [moodText, setMoodText] = useState(note)
    const [moodRating, setMoodRating] = useState(rating)


    const handleSubmit = (event) =>{

        event.preventDefault()
        let editedMood = {moodText, moodRating}
        // let newMood = {moodText, moodRating}


        // onNewMood(newMood)
        // setMoodText("")


    }




  return (
    <div className="App">

        <form onSubmit={handleSubmit}>
            <input type="number" id="rating" name="rating" min="0" max="10" placeholder="Rating" value={moodRating} onChange={(e)=>setMoodRating(e.target.value)}/><br/>
            <input type="text" id="note" name="note" placeholder="Note" value={moodText} onChange={(e)=>setMoodText(e.target.value)}/><br/><br/>
            <button type="submit">Post</button>
        </form>



    </div>
  )
}








// <form action="" method="get">
//     <label htmlFor="rating">Rating:</label><br/>
//     <input type="number" id="rating" name="rating" min="0" max="10"/><br/>
//     <label htmlFor="Note">note:</label><br/>
//     <input type="text" id="note" name="note" p;ac /><br/><br/>
//     {/*<input type="hidden" id="timestamp" name="timestamp" value="3487"/>*/}
//     <input type="submit" value="Submit"/>
// </form>

