import React, { useEffect, useState } from'react';
import axios from 'axios';
import UserCard from '../Card/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import Select from 'react-select';


import './Search.css';

/*
const headers = {
    Authorization: "token 43b3dc84568c99b778a9e0fd0a53568c9b7c45d1"
} */


const locationOptions = [

    { value: '', label: 'Escolha uma localização...' },
    { value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
    { value: 'São Paulo', label: 'São Paulo' },
    { value: 'Minas Gerais', label: 'Minas Gerais' }
  ]

  const companyOptions = [

    { value: '', label: 'Escolha uma empresa...' },
    { value: 'Git Hub', label: 'Git Hub' },
    { value: 'EJCM', label: 'EJCM' },
    { value:'Minerva Bots', label: 'Minerva Bots' }
  ]

      
  

 

const UserSearch = () => {

    const [location, setLocation] = React.useState('');
    const [company, setCompany] = React.useState('');
    
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {

        const params = {};

        if(search){
            params.name_like = search;
        }

        if(company){
            params.company = company;
        }

        if(location){
            params.location = location;
        }

      


        axios.get('http://localhost:5000/users', {params})
        .then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }, [search, location, company]);

    return(

        <div className="Search">

            <header>
                <h2>Encontre outros usuários</h2>
            </header>

            <input 
                className="searchBar" 
                type="search"
                placeholder="Buscar usuário"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            ></input>

            <div className="selectDiv">

            <FormControl >
            <InputLabel>Localização</InputLabel>
                <Select placeholder = {location}
                        className="select" 
                        options={locationOptions}
                        name="location"
                        value={location}
                        onChange = {event => setLocation(event.value)}
                />
                 
                
            </FormControl>

            <FormControl >
            <InputLabel>Empresa</InputLabel>
                <Select placeholder={company}
                        className="select" 
                        options={companyOptions}
                        name="company"
                        value={company}
                        onChange = {f => setCompany(f.value)}  />
            </FormControl>
            </div>
         
          

            {users.map((user)=>(
                <UserCard user={user} />
            ))}
        </div>
       
    );
};

export default UserSearch;