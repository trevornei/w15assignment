import React from 'react'
import UsersCont from './UsersCont'
import FormCont from './FormCont'

export default function MeatAndPotatoesCont({ getUsers }) {

  // const MOCK_API_URL = 'https://650c446e47af3fd22f676202.mockapi.io/users'

  // const [users, setUsers] = useState([{
  //   address: 'Missoula',
  //   name: 'TDawg',
  //   profilePicture: 'https://loremflickr.com/640/480/people',
  //   state: 'MT',
  //   id: 1,
  // }])

  // const [newUserName, setNewUser] = useState('')
  // // const []

  // console.log(users)

  // function getUsers() {
  //   fetch(MOCK_API_URL)
  //     .then(data => data.json())
  //      .then(data => {
  //        console.log(data);
  //      })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  // function deleteUsers(id) {
  //   fetch(`${MOCK_API_URL}/${id}`, {
  //     method: 'DELETE',
  //   }) .then(() => getUsers())
  // }

  // function postUsers(id) {
    
  //   let data = {
  //   address: "Owensboro",
  //   name: "Eleanor Ortiz",
  //   profilePicture: "https://loremflickr.com/640/480/people",
  //   state: "Missouri",
  //   }
    
  //   fetch(MOCK_API_URL, {
  //     method: 'POST', 
  //     headers: { "Content-Type": "application/json" }, 
  //     body: JSON.stringify()
  //   })
  // }


  

  return (
    <div className='flex flex-row items-center justify-center w-full h-3/4 bg-cyan-600 mx-auto rounfded-xl'>
        <UsersCont getUsers={getUsers}/>
        <FormCont/>    
    </div>
  )
}
