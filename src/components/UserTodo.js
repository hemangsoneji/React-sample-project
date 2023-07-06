import React from 'react';
import Link from '@mui/material/Link';

export const UserTodo = () => {
    var tododata = localStorage.getItem("userId");
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
        .then((response) => {
            console.log('resolved', response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            let tabledata = [];
            data.map((values) => {
                tabledata += `
		             <tr>
		             <td>${values.id}</td>
		             <td>${values.title}</td>
		             <td>${values.completed}</td>
                     <td><button class="edit" onClick="editing(${values.id})">Edit</button></td>
                     <td><button class="delete" value="Delete" onClick="deleting(${values.id})">Delete</button></td>
		             </tr>
		            `
            });
            document.getElementById("content").innerHTML = tabledata;
        })
        .catch((err) => {
            console.log('rejected', err);
        });
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
            <h1 style={{
                textAlign: 'center'
            }}>Users To-do List</h1>
            <div class="container mt-3" style={{
                textAlign: 'center'
            }}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody id="content"></tbody>
                </table>
            </div>
        </div>
    )
}

export default UserTodo;