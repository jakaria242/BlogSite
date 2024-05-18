import React, { useEffect, useState } from 'react'
import myContext from './myContext';
import { collection, onSnapshot, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
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


    // Blog Delete Function 
    const deleteBlogs = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "blogPost", id));
            getAllBlogs()
            toast.success("Blogs deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <myContext.Provider value={{  
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog,
            deleteBlogs,
            }}>
            {children}
        </myContext.Provider>
    )
}

export default MyState