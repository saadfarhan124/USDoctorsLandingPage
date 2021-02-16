import React from 'react';


import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {UserList} from '../Lists/Users';
import {UserShow} from '../Show/Users';

import {RotationList} from '../Lists/Rotations';

import authProvider from '../Providers/authProvider'
import MyLayout from '../Helpers/Layout';

import CustomLoginPage from '../Helpers/LoginPage'; 
import Dashboard from '../Dashboard';

const dataProvider = jsonServerProvider('http://app.usdoctors.co/api');

const Landing = () => {
    return (
       
          <Admin dashboard={Dashboard}  loginPage={CustomLoginPage} layout={MyLayout} title="USDoctors.co" dataProvider={dataProvider}  authProvider={authProvider}>
              
              <Resource options={{ label: 'Users' }} show={UserShow} name="users" list={UserList} />
              <Resource options={{ label: 'Rotations' }} show={UserShow} name="rotations" list={RotationList} />

          </Admin>
       
    )
}

export default Landing;


