import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addEpisode } from './store/episode'
import ItemsList from './components/itemsList'
import HeaderNav from './components/headerNav'
import ModalItem from './components/modal'
import Episodelist from './components/episodes'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import { setListCharacters } from './store/character'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const [page, setPage] = useState(1)
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&${filter}=${filterValue}`,
      )
      .then(async (res) => {
        const data = await res.data
        const characters = data.results
        const pages = data.info.pages
        await dispatch(setListCharacters({ characters, pages }))
      })
  }, [page, filterValue])

  const handleAction = () => {

    if (text.trim().length) {
      dispatch(addEpisode({ text }))
      setText('')
    }
  }

  const handlePageClick = async (event) => {
    setPage(event.selected + 1)
  }

  return (
    <>
      <HeaderNav
        setFilter={setFilter}
        setFilterValue={setFilterValue}
        setPage={setPage}
        handleAction={handleAction}
        value={text}
        updateText={setText}
        page={page}
      />
      <ModalItem
        className="d-flex justify-content-center align-items-center"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Routes>
        <Route
          path="/"
          element={<ItemsList page={page} setModalShow={setModalShow} />}
        />

        <Route path="/episode" element={<Episodelist />} />
      </Routes>
      <Footer handlePageClick={handlePageClick} />
    </>
  )
}

export default App
