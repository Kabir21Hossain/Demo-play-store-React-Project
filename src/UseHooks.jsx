import { useState, useEffect } from 'react'
const useHooks = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('/data.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setApps(data)
    //         setLoading(false)
    //     })
    // },[])

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const response = await fetch('/data.json')
                const data = await response.json()
                setApps(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        setTimeout(dataFetch, 2000);

    }, [])

    return { apps, loading }
}

export default useHooks;