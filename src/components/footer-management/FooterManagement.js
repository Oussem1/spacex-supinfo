import React from 'react'

const FooterManagement = ( { launchesPerPage, allLaunches, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<=10; i++) {
        pageNumbers.push(i);
      }

      const handleClickPage = () => {
      }
  return (
      <ul>
          {
              pageNumbers.map((i) => <li key={i}><button onClick={handleClickPage}>{i}</button></li>)
          }
      </ul>
  )
}

export default FooterManagement