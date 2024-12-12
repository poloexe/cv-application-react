import React, { useState } from 'react'
import Display from '../Display';

const GeneralInfo = ()=> {
    const [person, SetPerson] = useState({fullName: '', email: '', phoneNumber: '' });
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleNameEvent = (e)=>{
        const newFullName = e.target.value;
        setFullName(newFullName);
        SetPerson({fullName: newFullName, email: email, phoneNumber: phoneNumber });
    }
    const handleEmailEvent = (e)=>{
        const newEmail = e.target.value;
        setEmail(newEmail);
        SetPerson({fullName: fullName, email: newEmail, phoneNumber: phoneNumber });
    }
    const handleNumberEvent = (e)=>{
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
        SetPerson({fullName: fullName, email: email, phoneNumber: newPhoneNumber });
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmit(true);
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        setSubmit(false);
    }
  return (
    <>
        <form action="">
            <fieldset>
                <legend>General Information</legend>
                {submit ? (
                    <>
                    <p><i><b>Name:</b></i> {person.fullName} </p>
                    <p><i><b>Email:</b></i> {person.email}</p>
                    <p><i><b>Phone Number:</b></i> {person.phoneNumber}</p>

                    <button onClick={handleEdit}>Edit</button>
                    </>
                ) : (
                    <>
                    <label>Full Name: </label>
                    <input type="text"  value={fullName} onChange={handleNameEvent}/> <br /> <br />
    
                    <label>Email Address: </label> 
                    <input type="email" value={email} onChange={handleEmailEvent}/> <br /> <br />
    
                    <label>Phone Number: </label>
                    <input type="number" pattern="[0-9]{10}" value={phoneNumber} onChange={handleNumberEvent}/> <br /> <br />
                    <button onClick={handleSubmit}>Submit</button>
                    </>
                )
                }
            </fieldset>
        </form>
    </>
  );
}

export default GeneralInfo;