
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";


export default function Add({onError, onNewMood, onEditMood, id, note, rating }) {

    const [moodText, setMoodText] = useState(note)
    const [moodRating, setMoodRating] = useState(rating)

    const [errorMsg, setErrorMsg ] = useState(false)




    const handleSubmit = (event) =>{
        // setErrorMsg(false)


        event.preventDefault()
        if(moodText !== "") {
            setErrorMsg(false)
            id===""?
                onNewMood({moodText, moodRating})
                : onEditMood({id, moodText, moodRating})

            setMoodText("")

        }else{
            setErrorMsg(true)
        }
    }


  return (
    <div className="App">

        <form onSubmit={handleSubmit}>
            <input type="number" id="rating" name="rating" min="0" max="10" placeholder="Rating" value={moodRating} onChange={(e)=>setMoodRating(e.target.value)}/><br/>
            {errorMsg && <div><p>kjhfmgludrhlmdriuh</p></div>}
            <input type="text" id="note" name="note" placeholder="Note" value={moodText} onChange={(e)=>setMoodText(e.target.value)}/><br/><br/>
            <button type="submit">Submit</button>
            <button type="Button" onClick={()=>{
                window.location.reload(false);
                setErrorMsg(false)

            }}>Cancel</button>

        </form>



    </div>
  )
}