import React, { useState } from 'react'
import  "./cards.scss"
import Search from '../../../search_sort/Search'
const Cards = ({data,setData, getData}) => {
  
  return (
    <section id="cards">
        <div className="container">
            <Search setData={setData} getData={getData}/>
            <div className="row">
                { data && data.map((card)=>
                
                
                <div key={card.id} className="col-lg-3 col-md-6 col-sm-12 g-4">
                    <div style={{minHeight:"530px"}} className="card p-3">
                        <div className="card_img">
                            <img src={card.imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h3>{card.name}</h3>
                            <span>{card.age} years old</span>
                            <p><span>{card.genre}</span> <span>Total Musics:{card.songs.length}</span></p>
                        </div>
                        <div className="card-btns">
                            <button className='btn btn-warning '>View Songs</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Cards