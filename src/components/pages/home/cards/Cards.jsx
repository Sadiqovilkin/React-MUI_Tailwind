import React, { useState } from 'react'
import "./cards.scss"
import Search from '../../../search_sort/Search'
import Delete from './Delete'
import ViewSongs from './ViewSongs'
import AddSongs from './AddSongs'
const Cards = ({ data, setData, getData }) => {
    const [searchval, setSearchval] = useState("")
    const filteredData = data.filter((card) => {
        return card.name.toLowerCase().trim().includes(searchval.toLowerCase().trim())
    })
    // console.log(filteredData);
    return (
        <section id="cards">
            <div className="container">
                <Search setSearchval={setSearchval}  filteredData={filteredData} setData={setData}/>
                <div className="row">
                    {filteredData && filteredData.map((card) =>
                    
                        <div key={card.id} className="col-lg-4 col-md-6 col-sm-12 g-4">
                            <div style={{ minHeight: "430px" }} className="card p-3">
                                <div className="card_img">
                                    <img src={card.imgSrc} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>{card.name}</h3>
                                    <span>{card.age} years old</span>
                                    <p><span>{card.genre}</span> <span>Total Musics:{card.songs.length}</span></p>
                                </div>
                                <div className="card-btns d-flex justify-content-between  ">
                                    <ViewSongs songs={card.songs}/>
                                    <AddSongs card={card}/>
                                    <Delete getData={getData} id={card.id}/>
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