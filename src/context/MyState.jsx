import React, { useEffect, useState } from 'react'
import myContext from './myContext';
import { collection, onSnapshot, orderBy, query  } from 'firebase/firestore';
import { fireDb } from '../config/FirebaseConfig';

function MyState({children}) {
    const [searchkey, setSearchkey] = useState('')
    const [loading, setloading] = useState(false);

    const [getAllBlog, setGetAllBlog] = useState([]);

    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(
                collection(fireDb, "blogPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });
                
                setGetAllBlog(blogArray)
                // console.log(productsArray)   
                         setloading(false)
    
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    
    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <myContext.Provider value={{  
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog,
            }}>
            {children}
        </myContext.Provider>
    )
}

export default MyState