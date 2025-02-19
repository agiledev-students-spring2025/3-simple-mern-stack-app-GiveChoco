import axios from "axios"
import JinImage from './Jin.jpg'
import { useState, useEffect } from 'react'

// const AboutMe =() => {
//     return(
//         <h2>
//             please work
//         </h2>
//     )
// }


const AboutMe = () => {
    const [bio, setBio] = useState(null);

    useEffect(() => {
        fetchJin()
      }, [])

    const fetchJin = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/JinLee/getInfo`)
            .then(response => {
                const bio = response.data.messages
                console.log("response: ", response)
                setBio(bio)
            })
    }
    

  return (
    <>
        <h2>User Information</h2>
        {bio ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <img src={JinImage} alt="photo of Jin Lee" style={{ width: '400px', height: '600px' }}></img>
                <p style = {{ fontSize: "25px", fontWeight: "bold", padding: "10px"}}>{bio[2].name}</p>
                <p style={{ width: '500px', textAlign: 'center', padding: "20px" }}>{bio[2].introduction}</p>
            </div>
        ) : (
            <p>Loading Jin Lee</p>
        )}
    </>
  )
}

export default AboutMe
