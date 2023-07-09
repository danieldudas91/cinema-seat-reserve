import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Seats = () => {
    const [seats, setSeats] = useState([])
    const seatsUrl = "/seats"
    const buyUrl = "/buy"
    const navigate = useNavigate()
    const reloadTime = 7200000
    const ok = 200

    useEffect( () =>{
      fetchData()
      setInterval(() => fetchData(), reloadTime);
    }, [])

    const fetchData = async () => {
      const result = await axios.get(seatsUrl);
      if (result.status === ok){
        setSeats(result.data);
      } 
      else{
        console.log(result.status)
      }
      };

    const startBuying = (seatId) => {
      axios.post(seatsUrl, {"id": seatId})
      navigate(`${buyUrl}/${seatId}`)
    }

  return (
    <>
    <h1>Seat reservation</h1>
    <div className='container'>
        {seats.map(
            seat => 
            <div className="card" key={seat.id}>
            <div className="card-body">
            <h5 className="card-title">Seat {seat.id}</h5>
            {seat.is_reserved
                ? <p className="card-text">The seat is reserved</p>
                : seat.user_email 
                  ? <p className="card-text">The seat is sold</p>
                  : <button onClick={() => startBuying(seat.id)} className="btn btn-primary">Buy seat</button>
            }
          </div>
          </div>
        )}
    </div>
    </>
  )
}

export default Seats