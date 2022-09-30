
import Mood from './Mood'

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function LoggedMoods({ editingMood, sortingOrder, handleDeleteMood, handleEditMood}) {


    const [moods,setMoods] = useState([])

    useEffect(()=>{
        axios.get('api/moods')
            .then(res =>{
                sortingOrder==="Date"?
                    setMoods(res.data.sort((a, b) => b.timestamp - a.timestamp))
                    : setMoods(res.data.sort((a, b) => b.rating - a.rating))


            }).catch(err=>{
            console.log(err)
        })
    }, [ sortingOrder])



    return (
        <div className="App">
            { moods.map(theMood => <Mood onEdit = {handleEditMood} onDelete={handleDeleteMood} key={theMood.id} id={theMood.id} rating={theMood.rating} note={theMood.note} timestamp={theMood.timestamp}/>) }
        </div>
    )
}



