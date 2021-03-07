import React,{useState,useEffect} from 'react'
import Header from './../includes/Header'
import Footer from './../includes/Footer'
import {FaTrash , FaEdit } from 'react-icons/fa';
export default function About() {
    const [user, setUser] = useState([]);
    // useEffect( ()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((data) => (console.log(data.json)
    // }, ())
    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
                data.json().then((result)=>{
                    
                    setUser(result)
                })
            })
    },[])
    return (
        <div className="wrap d-flex flex-column">
            <Header/>
            
                <main className="min-height-100 py-5">
                    <div class="container">
                        <h1>About PAGE</h1>
                        <div className="searchtable float-right my-4 d-flex border border-primary">
                            <input type="search" placeholder="Search.." className="p-2 border-0" />
                            <input type="submit" value="Search" className="btn btn-primary " />
                        </div>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((item , i)=>
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.id}</td>
                                            <td>{item.id}</td>
                                            <td>{item.id}</td>
                                            <td>{item.id}</td>
                                            <td>{item.id}</td>
                                            <td><FaTrash /></td>
                                            <td><FaEdit /></td>
                                        </tr>
                                    )  
                                }
                                {/* <tr>
                                    <td>2</td>
                                    <td>Vibhav</td>
                                    <td>vibhavranjan0@gmail.com</td>
                                    <td>Noida</td>
                                    <td>8082938932</td>
                                    <td>Google.com</td>
                                    <td>Google</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vibhav</td>
                                    <td>vibhavranjan0@gmail.com</td>
                                    <td>Noida</td>
                                    <td>8082938932</td>
                                    <td>Google.com</td>
                                    <td>Google</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vibhav</td>
                                    <td>vibhavranjan0@gmail.com</td>
                                    <td>Noida</td>
                                    <td>8082938932</td>
                                    <td>Google.com</td>
                                    <td>Google</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </main>
                
            <Footer />
        </div>
    )
}
