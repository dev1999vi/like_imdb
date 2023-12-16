import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import SearchResult from './pages/search_result/SearchResult';
import PageNotFound from './pages/404/PageNotFound';


function App() {
  const {url} = useSelector((state)=> state.home)
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchConfig = ()=>{
      fetchDataFromApi("/configuration")
      .then((res)=> {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url))}
        )
    } 
    fetchConfig();
    genreCall();
  },[])

  const genreCall = async()=>{
    let promises = []
    let endpoint = ["tv", "movie"]
    let allGenres = {}

    endpoint.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=> allGenres[item.id] = item)
    })

    dispatch(getGenres(allGenres));
  }
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:mediaType/:id' element={<Details/>}/>
          <Route path='/search/:query' element={<SearchResult/>}/>
          <Route path='/explore/:mediaType' element={<Explore/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
