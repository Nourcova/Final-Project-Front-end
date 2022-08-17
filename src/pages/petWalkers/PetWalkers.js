import React from 'react'

import logo from '../../assets/images/logo_pet_walkers.png'
import Button from '../../components/Button/Button'
import person from '../../assets/images/person.jpeg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './PetWalkers.css'
import '../../components/chat/Chat.css'
import Chat from '../../components/chat/Chat'

import initialDetails from '../../data/initialDitails'

import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((song) => song.name.includes(query));
  };
function PetWalkers() {
    let details = initialDetails[0].concat(initialDetails[1]);
    const [query, setQuery] = useState("");

   
      const filteredItems = getFilteredItems(query, details);

    /// for the Search
    const [searchField, setSearchField] = useState("");
    const filteredPersons = details.filter(
        person => {
          return (
            person
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase()) 
          );
        }
      );
      const handleChange = e => {
        setSearchField(e.target.value);
      };
      function searchList() {
        return (
            <div className='pet_walkers_main'>
            {pet_walkers.map(x => (
                <div className='container my-5' style={{ backgroundColor: "white" }}>
                    <div className='pet_walker row'>
                        <div className='pet_walker_info col-12 col-md-8'>
                            <img src={x.img}
                                alt="Card image cap" style={{
                                    width: "100px", height: "100px", borderRadius: "50%", marginRight: '2.5rem'
                                }} />
                            <div className='div_block'>
                                <p style={{ fontSize: '1.2rem' }}>{x.name}</p>
                                <p>{x.text}</p>
                            </div>
                        </div>

                        <div className='col-6 col-md-2'>
                            <Button text="View Profile" />
                        </div>
                        <div className='col-6 col-md-2'>
                            <Button text="Chat" onClick={joinRoom} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        );
      }
    ////
    let navigate = useNavigate();
    const [username, setUsername] = useState("nour");
    const [room, setRoom] = useState("123");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
    //   if (username !== "" && room !== "") {
        // socket.emit("join_room", room);
        setShowChat(true);
        let path = "/chat";
        navigate(path,{state:{name:'Peter'}});
    //   }
    };
    let pet_walkers1=initialDetails[0];
    let pet_walkers2 = initialDetails[1]
    let pet_walkers = pet_walkers1.concat(pet_walkers2)
    return (
        <>
            <div className='navbar'>
                <img src={logo} />

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value)}/>
                    <Button text="Search" />
                </form>
            </div>

            <div className='pet_walkers_main'>
                {filteredItems.map(x => (
                    <div className='container my-5' style={{ backgroundColor: "white" }}>
                        <div className='pet_walker row'>
                            <div className='pet_walker_info col-12 col-md-8'>
                                <img src={x.img}
                                    alt="Card image cap" style={{
                                        width: "100px", height: "100px", borderRadius: "50%", marginRight: '2.5rem'
                                    }} />
                                <div className='div_block'>
                                    <p style={{ fontSize: '1.2rem' }}>{x.name}</p>
                                    <p>{x.text}</p>
                                </div>
                            </div>

                            <div className='col-6 col-md-2'>
                                <Button text="View Profile" />
                            </div>
                            <div className='col-6 col-md-2'>
                                <Button text="Chat" onClick={joinRoom} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PetWalkers