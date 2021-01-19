import React from'react';
import UserSearch from '../../../components/User/Search/Search';

import axios from 'axios';

import './Search.css';

const PageUserSearch = () =>{


    return(


        <div className="Search">

           <UserSearch />
        </div>
       
    );
};
export default PageUserSearch;