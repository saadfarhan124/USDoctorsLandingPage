import React from 'react';


import { Admin, Resource, ListGuesser, EditGuesser  } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from '../Lists/Users';
import {PostList} from '../Lists/Posts';
import {PostEdit} from '../Forms/Post';
import {PostCreate } from '../Forms/CreatePost';
import Dashboard from '../Dashboard'
import authProvider from '../../authProvider'
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Landing = () => {
  

    return (
       
          <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
              <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
              <Resource name="users" list={UserList} />
          </Admin>
       
    )
}

export default Landing;


