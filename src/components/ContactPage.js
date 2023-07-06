import React, { useState } from 'react';
import Link from '@mui/material/Link';


const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [allEntry, setAllEntry] = useState([]);

  var regName = /^[A-Za-z]+[A-Za-z]+$/;
  var regEmail = /^[a-zA-Z0-9.!#$%&*+/=?^_{|}]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending the data to a server
    if (name.trim() === "" || name.trim() == null || name.trim().length < 3 || name.trim().length > 25 ||
      !regName.test(name)) {
      alert("Please enter first name correctly.");
      return false;
    }
    else if (email.trim() === "" || email.trim() == null || !regEmail.test(email)) {
      alert("Please enter email correctly.");
      return false;
    }
    else {
      const newEntry = { id: new Date().getTime().toString(), name, email, message };
      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <header>
        <div class="grid-container" style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto auto',
          backgroundColor: 'lightblue',
          height: '50px',
          padding: '10px'
        }}>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/">Home</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/about">About</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/contact">Contact</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/todolist">To Do List</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/shoppingcart">Cart</Link></div>
        </div>
      </header>
      <h2 style={{
        textAlign: 'center'
      }}>Contact Us</h2>
      <div style={{
        textAlign: 'center'
      }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: &nbsp;</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              textAlign: 'center'
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="email">Email: &nbsp;</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              textAlign: 'center'
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="message">Message: &nbsp;</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              textAlign: 'center'
            }}
          ></textarea>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
