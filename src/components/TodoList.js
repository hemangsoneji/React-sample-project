import React from 'react';
import Link from '@mui/material/Link';

export const TodoList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log('resolved', response);
            return response.json();
        }).then(data => {
            console.log(data);
            let tabledata = [];
            data.map((values) => {
                tabledata += `
		<tr>
		<td>${values.id}</td>
		<td>${values.name}</td>
		<td>${values.email}</td>
        <td><a href="/peruser"><button class="todo" onClick="todoId(${values.id})">To-do List</button></a></td>
		</tr>
		`
            });

            document.getElementById("content").innerHTML = tabledata;
        }).catch((err) => {
            console.log('rejected', err);
        });


    let todoId = (id) => {
        console.log(id);
        localStorage.setItem("userId", id);
    }


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
            <h3 style={{
                textAlign: 'center'
            }}>Users Data</h3>
            <div class="container mt-3" style={{
                textAlign: 'center'
            }}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>To-do List</th>
                        </tr>
                    </thead>
                    <tbody id="content"></tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;