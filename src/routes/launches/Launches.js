import React, { useEffect, useState } from 'react'
// import FooterManagement from './FooterManagement'
import Launch from '../../components/launch-card/Launch'
import Nav from '../../components/navbar/Nav'
import { getLaunchesPage, getAllLaunches } from '../../api/getAPI.js'
// import SearchBox from './components/search-box/search-box';
import SearchBox from '../../components/search-box/search-box'

const Launches = () => {
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [filteredLaunches,setFilteredLaunches] = useState(launches)
  const [offset, setOffset] = useState(0)
  // const [pageNumber, setPageNumber] = useState(0)
  const [allPages, setAllPages] = useState(0)

  const launchesPerPage = 10
  // const indexOfLastLaunch  = pageNumber * launchesPerPage

  useEffect(() => {
    const getAll = async() => {
      setLoading(true)
      const res = await getLaunchesPage(offset, launchesPerPage)
      setLaunches(res)
      setLoading(false)
    }
    getAll()
  }, [offset])

  useEffect(() => {
    const newFilteredLaunches = launches.filter((launch) => launch.mission_name.toLocaleLowerCase().includes(searchField))
    setFilteredLaunches(newFilteredLaunches)
  }, [launches, searchField])

  // useEffect(() => {
  //   const getAll = async() => {
  //     const res = await fetch('https://api.spacex.land/rest/launches/')
  //     const data = await res.json()
  //     const total = await data.length
  //     setAllPages(total)
  //   }
  //   getAll()
  // }, [])

  // useEffect(() => {
  //   setLoading(true)
  //   getLaunchesPage(offset, launchesPerPage).then(res => setLaunches(res))
  //   setLoading(false)
  // }, [offset])

  console.log( launches)
  //const filterdLaunches = launches.filter((launches) => launches.mission_name.toLocaleLowerCase().includes(searchField))

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>

      <Nav />
      <SearchBox onChangeHandler={onSearchChange} placeHolder={'search launches'} className={'search-box'} />
      {
        (!loading) ? (
          filteredLaunches.map((launch) => <Launch key={launch.mission_name} launch={launch} />)
        ) : (
          <p>Loading...</p>
        )
      }
      {/* <FooterManagement/> */}
    </div>
  )
}

export default Launches