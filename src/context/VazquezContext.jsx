import { createContext, useContext, useState } from "react"

const VazquezContext = createContext()

export function VazquezProvider({ children }) {
    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    return (

        <VazquezContext.Provider value={{openModal, toggleModal}}>
            {children}
        </VazquezContext.Provider>

    )
}

export function useVazquez() {
    return useContext(VazquezContext)
}