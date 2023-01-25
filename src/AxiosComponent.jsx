import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AxiosComponent = () => {
    const Base_url = "https://dummyjson.com"
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)

    const fetchDatathrougAxios = () => {
        axios.get(`${Base_url}/posts`)
            .then((response) => {
                // console.log(response)
                setPosts(response.data.posts)
            })
            .catch((error) => {
                console.log(error);
                setError(true)
        })
    }

    useEffect(() => {
        fetchDatathrougAxios()
    }, [])

    return (
        <div className='px-16'>
            <h1 className='text-4xl font-bold text-center py-8'>Axios library</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                   posts && posts.length > 0 ? posts.map((items) => {
                        const { id, title, body, } = items
                        return (
                            <div key={id} className="bg-slate-200 p-4 rounded-md">
                                <h1 className='text-xl font-semibold text-gray-700'>{title}</h1>
                                <p className='text-[16px]  text-gray-700 pt-4' >{body}</p>
                            </div>
                        )
                   }) : "Request failed with status code 404"
                }
            </div>
        </div>
    )
}

export default AxiosComponent