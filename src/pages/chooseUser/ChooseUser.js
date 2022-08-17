import React from 'react'
import Button from '../../components/Button/Button'

import './ChooseUser.css'

function ChooseUser() {
    return (
        <>
            <div className='choose_user container my-5 text-center d-flex flex-column align-items-center justify-content-around' style={{height:"100vh"}}>
                <h2>
                <i class="fa-solid fa-user"></i>    Which type of user do you want to create?
                </h2>

                <div>
                    <button type="button" class="btn btn-outline-secondary mx-5">Pet Walker</button>
                    <button type="button" class="btn btn-outline-danger mx-5">User</button>
                </div>
                <div className='align-self-end'>
                    <Button text="Next" w="200px"/>
                </div>
            </div>
        </>
    )
}

export default ChooseUser