export const getLaunches = () => (
  fetch('https://api.spacex.land/rest/launches?offset=0&limit=3&order=desc&sort=launch_date_utc')
    .then(res => res.json())
)

export const getLaunchesPage = (offset, launchesPerPage) => (
  fetch(`https://api.spacex.land/rest/launches?offset=${offset}&limit=${launchesPerPage}&order=desc&sort=launch_date_utc`)
    .then(res => res.json())
)

export const getAllLaunches = () => (
  fetch('https://api.spacex.land/rest/launches/')
    .then(res => res.json())
)