import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const Reservation = () => {
    const [email, setEmail] = useState("") 
    const indexUrl = "/"
    const seatsUrl = "/seats"
    const params = useParams()
    const navigate = useNavigate()
    const ok = 200

    const sendEmail = (email) => {
      axios.put(seatsUrl, {"email": email, "id": params.id}).then((response) => {
        if(response.status === ok){
          navigate(indexUrl)
        }
      })
    }

    const deleteReservation = (seatId) => {
        axios.delete(seatsUrl, {data:{"id": seatId}}).then((response) => {
          if(response.status === ok){
            navigate(indexUrl)
          }
        })
    }
    
  return (
    <>
    <form className='form'>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" onChange ={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
    </div>
    <button type="button" onClick={() => sendEmail(email)} className="btn btn-primary">Submit</button>
    </form>
    <button className= "btn btn-primary" id='backButton' onClick={() => deleteReservation(params.id)}>Back</button>
    </>
  )
}

export default Reservation