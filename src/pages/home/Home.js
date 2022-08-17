import React from 'react'
import './Home.css'

import hero_background from '../../assets/images/hero_background.jpg'
import person from '../../assets/images/person.jpeg'
import person2 from '../../assets/images/person2.jpg'
import icon1 from '../../assets/images/icon1.webp'
import icon2 from '../../assets/images/icon2.webp'
import icon3 from '../../assets/images/icon3.webp'
import logo from '../../assets/images/logo_pet_walkers.png'
import initialDetails from '../../data/initialDitails'

import Button from '../../components/Button/Button'

import {useNavigate} from 'react-router-dom'

function Home() {
    let pet_walkers1 = initialDetails[0]
    let pet_walkers2 = initialDetails[1]

    let navigate = useNavigate();
    const showMore =()=>{
        let path = "/petwalkers";
        navigate(path);
    }
    return (
        <div>
            <div className='hero_image' style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ position: "absolute", zIndex: "10" }}>
                    <p className='hero_text'>
                        Hi! Search for a PetWalker here :)
                    </p>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="submit" className="btn btn-success my-2 my-sm-0" >Search</button>

                    </form>
                </div>
                <img src={hero_background} alt="hero_background" className='hero_image' />
            </div>

            <div className='home_main'>
                <div className='container home_description'>
                    <h2 style={{marginBottom:'30px'}}>
                        When nature calls, dog walkers on Rover answer
                    </h2>
                    <p>You can't always predict a super busy day at work,
                        but you can anticipate your dog's needs.
                        Instead of rushing home at lunch,
                        book a dog walker to give your dog a 30- or 60-minute dog walk.
                        Your dog walker can stop by as many times as you need—on whatever days you need them.
                    </p>
                </div>

                <div className='container'>
                    <h2 style={{ textAlign: 'center', marginBottom:'30px' }}>
                        How to find the perfect dog walker
                    </h2>
                    <div className='home_how_to'>
                        <div className='row'>


                            <div className='col-12 col-md-4'>
                                <div className='image_section'>
                                    <img src={icon1} />
                                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Search Dog Walkers</p>
                                    <p>Search to find dog walkers in your neighborhood.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='image_section'>
                                    <img src={icon2} />
                                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Search Dog Walkers</p>
                                    <p>Connect with a dog walker who's a good fit for you, your dog, and your lifestyle.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='image_section'>
                                    <img src={icon3} />
                                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Search Dog Walkers</p>
                                    <p>It’s that easy! All payments are processed through Rover's secured platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{ marginTop: "80px", textAlign:"center" }}>
                    <h1 style={{ textAlign: 'center' }}>
                        Our Best Pet Walkers
                    </h1>

                    {/* <!--Carousel Wrapper--> */}
                    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" data-interval="false">

                        {/* <!--Slides--> */}
                        <div className="carousel-inner" role="listbox">

                            {/* <!--First slide--> */}
                            <div className="carousel-item active">
                                <div className="row justify-content-center mb-5">
                                    {pet_walkers1.map(x => (

                                        <div className="col-md-3" style={{ paddingTop: "50px" }}>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <img src={x.img}
                                                        alt="Card image cap" style={{
                                                            width: "100px", height: "100px", borderRadius: "50%",
                                                            position: "absolute",
                                                            left: "35%",
                                                            bottom: "65%",
                                                        }} />
                                                    <div style={{ marginTop: "40px" }}>
                                                        <h4 className="card-title">{x.name}</h4>
                                                        <p className="card-text">{x.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <!--/.First slide--> */}

                            {/* <!--Second slide--> */}
                            <div className="carousel-item">

                                <div className="row justify-content-center mb-5">
                                    {pet_walkers2.map(x => (
                                        <div className="col-md-3" style={{ paddingTop: "50px" }}>
                                            <div className="card mb-2">
                                                <div className="card-body">
                                                    <img src={x.img}
                                                        alt="Card image cap" style={{
                                                            width: "100px", height: "100px", borderRadius: "50%",
                                                            position: "absolute",
                                                            left: "35%",
                                                            bottom: "65%",
                                                        }} />
                                                    <div style={{ marginTop: "40px" }}>
                                                        <h4 className="card-title">{x.name}</h4>
                                                        <p className="card-text">{x.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/*<!--/.Carousel Controllers-->*/}
                            <a className="carousel-control-prev" href="#multi-item-example" role="button" data-slide="prev">
                                <span className="dot">&lt;</span>
                            </a>
                            <a className="carousel-control-next" href="#multi-item-example" role="button" data-slide="next">
                                <span className="dot">&gt;</span>
                            </a>
                            {/*<!--/.Carousel Controllers-->*/}
                        </div>
                        {/* <!--/.Slides--> */}

                    </div>
                    {/* <!--/.Carousel Wrapper--> */}

                   <Button text="Show more" onClick={showMore}/>
                </div>
            </div>
            <div className='footer'>
                <div>
                    <img src={logo}></img>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Contacts</p>
                    <p>Facebook</p>
                    <p>instagram</p>
                    <p>Phone</p>

                </div>
                <div>
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>About us</p>
                    <p>Why us</p>
                    <p>FAQ</p>

                </div>
            </div>
        </div>
    )
}

export default Home