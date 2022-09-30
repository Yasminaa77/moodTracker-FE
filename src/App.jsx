
import './App.css'
import LoggedMoods from "./LoggedMoods"
import Add from "./Add"
import {useEffect, useState} from "react"
import axios from "axios";


function App() {
    const [showForm, setShowForm]= useState(false)
    const [editingMood, setEditingMood]= useState({id:"", rating:"0", note:""})
    const [sortingOrder, setSortingOrder] = useState("Date")
    const [sortingBtn, setSortingBtn] = useState("Rate")



    ///---------------orderMood------------


    const handleOrder= ()=>{

        if (sortingOrder==="Date") {
            setSortingOrder("Rate")
            setSortingBtn("Date")

        }else{
            setSortingOrder("Date")
            setSortingBtn("Rate")
        }

    }


    ///---------------newMood------------

    const handleAddNewMood=()=>{
        setShowForm(true)
    }

    const handleNewMood = (newMood)=>{

        axios.post('api/moods', {newMood})
            .then(res => {
                console.log(" data has been saved successfully")
            }).catch(err => {
            console.log(err)
        })
        setShowForm(false)
    }




    ///---------------deleteMood------------

    const handleDeleteMood=(id)=>{

        axios.delete(`api/moods/${id}`)
            .then(res => {
                console.log("the Mood ha been deleted successfully")

            }).catch(err => {
            console.log(err)
        })
        window.location.reload();

    }



    ///---------------editMood------------

    const handleEditMood=(id, rating, note)=>{
        setShowForm(true)
        setEditingMood ({"id":id,"rating":rating, "note": note})
    }


    const handleTheEditedMood=(editedMood)=>{

        axios.put('api/moods', { editedMood })
            .then(res => {
                console.log(` data; ${id} has been Edited successfully`)
            }).catch(err => {
            console.log(err)
        })
        window.location.reload(false);
        //????

        setEditingMood ({"id":"","rating":"0", "note": ""})
        setShowForm(false)
    }







    return (

        <div className="App">
            <h1>My Mood Journal  </h1>
            { showForm ?
                <>
                    <h2>How Are you feeling?</h2>
                    <Add onNewMood={handleNewMood} onEditMood={handleTheEditedMood} id={editingMood.id} note={editingMood.note} rating={editingMood.rating}  />
                </>
                :
                <>
                    <button onClick={handleOrder}> Sort By {sortingBtn} </button>
                    <button onClick={handleAddNewMood}> Add Mood</button>

                    <LoggedMoods editingMood = {editingMood} sortingOrder={sortingOrder} handleDeleteMood={handleDeleteMood} handleEditMood={handleEditMood} />
                </>
            }

        </div>
    )
}

export default App

