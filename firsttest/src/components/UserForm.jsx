import React, { useEffect, useState } from "react"
import useStore from "../zustand/store"
// import { useEffect, useState } from "react"

const UserForm = () => {
    const personName = useStore((state) => state.personName)

    const fetchPerson = useStore((state) => state.fetchPerson)
    // const createPerson = useStore((state) => state.createPerson)

    const [nameInput, setNameInput] = useState("")
    useEffect(() => {
        fetchPerson();
    }, []);

    const handleNewPersonName = (e) => {
        try {
            e.preventDefault();
            console.log('in the submit function')

            const newName = { name: nameInput };
            console.log("this is the new person: ", newName)

            // createPerson(newName)
            setNameInput("")
        } catch(err) {
            console.log('handleNewPerson error', err)
        }
    }

    // const [nameInput, setNameInput] = useState('') 
    // const newPersonName = useStore((state) => state.newPersonName)
   

    
  return (
    <div>
        <form onSubmit={handleNewPersonName}>
            <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)}  placeholder='enter your full name here'/>
            <button type="submit">submit</button>
        </form>

        <ul>
            {personName.map((person) => {
                return (
                    <li key={person.id}>{person.name}</li>
                );
            })}
        </ul>
    </div>
  )
}

export default UserForm;