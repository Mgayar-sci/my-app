import React from 'react'

const Search = (props) => {
  return (
    <input type='search' onChange={props.onChange}/>
  )
}

export default Search