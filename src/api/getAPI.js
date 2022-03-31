export const getLastLaunches = () => (
  fetch('https://api.spacex.land/rest/launches-past?offset=0&limit=3')
    .then(res => res.json())
)

export const getNextLaunch = () => (
  fetch('https://api.spacex.land/rest/launch-next')
    .then(res => res.json())
)

export const getAllLaunches = () => (
  fetch('https://api.spacex.land/rest/launches/')
    .then(res => res.json())
)

export const getLaunchById = (id) => (
  fetch(`https://api.spacex.land/rest/launch/${id}`)
    .then(res => res.json())
)