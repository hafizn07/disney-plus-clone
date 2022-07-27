import styled from "styled-components";
import React, { useEffect } from 'react'
import ImageSlider from '../Image slider/ImageSlider'
import Movies from '../Movies Page/Movies'
import Viewers from '../Viewers/Viewers'
import db from '../../Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../features/movie/movieSlice'

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies));

    })
  }, [])



  return (


    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>

  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("Assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home

