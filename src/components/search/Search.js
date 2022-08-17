// import React from 'react'
// import { useState } from 'react';
// import Button from '../Button/Button';

// import './Search.css'

// function Search({details}) {
//     const [searchField, setSearchField] = useState("");
//     const filteredPersons = details.filter(
//         person => {
//           return (
//             person
//             .name
//             .toLowerCase()
//             .includes(searchField.toLowerCase()) 
//           );
//         }
//       );
//       const handleChange = e => {
//         setSearchField(e.target.value);
//       };
      

//     return (
//         <div>
//             <form class="form-inline my-2 my-lg-0">
//                 <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {handleChange}/>
//                 <Button text="Search" />
//             </form>
//             {searchList()}
//         </div>
//     )
// }

// export default Search