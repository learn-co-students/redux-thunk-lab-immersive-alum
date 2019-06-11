import React from 'react'

const CatList = props => {
  const renderPic = pic => {
    return (<img src={pic.url}/>)
  }

  // debugger;

  return (
    <div>
      {props.catPics.map(p => renderPic(p))}
    </div>
)
}

export default CatList
