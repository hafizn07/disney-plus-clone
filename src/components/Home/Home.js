import React, { useEffect } from 'react'
import ImageSlider from '../Image slider/ImageSlider'
import Movies from '../Movies Page/Movies'
import Viewers from '../Viewers/Viewers'
import './Home.css'
import db from '../../Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../features/movie/movieSlice'

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
      db.collection("movies").onSnapshot((snapshot)=>{
        let tempMovies = snapshot.docs.map((doc)=>{
            return { id: doc.id, ...doc.data() }
        })
        dispatch(setMovies(tempMovies));

      })
    }, [])
    


    return (
        <div className="main_section">
            <ImageSlider />
            <Viewers />
            <Movies />
            
        </div>

    )
}

export default Home