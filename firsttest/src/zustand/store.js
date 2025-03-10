// we will create an app to count cigerretes

//bioiler plate
import { create } from "zustand";
import axios from "axios"

const useStore = create((set) => ({
    // we can access this state so other components can use
    cigCount:0,
    increaseCigs: () => {set((state) => ({cigCount: state.cigCount + 1}))},
    decreaseCigs: () => {set((state) => ({cigCount: state.cigCount - 1}))},

    personName: [],
    fetchPerson: async () => {
        try {
            const response = await axios.get("/api/person")
            // const personName = Array.isArray(response.data) ? response.data : [];
            const personName = response.data;
            console.log(response)
            console.log('got person', personName)
            // set({personName:personName});
        } catch (error) {
            console.log('an error has occured in the fetch person', error)
        }
    },
    // newPersonName : (nameOfPerson) => 
    //     set((state) => ({
    //         personName: [...state.personName, nameOfPerson],
    //     })),

    // newPersonName: ((nameOfPerson) => {
    //     set((state) => ({personName: [...state.personName, nameOfPerson]}))
    // })
}))

export default useStore