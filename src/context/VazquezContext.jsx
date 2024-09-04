import { useContext } from "react"

const VazquezContext = useContext()

export function VazquezProvider({ children }) {


    return (

        <VazquezContext.Provider value={{}}>
            {children}
        </VazquezContext.Provider>

    )
}

export function useVazquez() {
    return useContext(VazquezContext)
}