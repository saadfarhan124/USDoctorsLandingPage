import React from 'react';


import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {UserList} from '../Lists/Users';
import {UserShow} from '../Show/Users';

import {RotationList} from '../Lists/Rotations';

import authProvider from '../../authProvider'
import MyLayout from '../Layout'


const dataProvider = jsonServerProvider('http://localhost/usdoctors/api');

const Landing = () => {
    return (
       
          <Admin layout={MyLayout} title="USDoctors.co" dataProvider={dataProvider}  authProvider={authProvider}>
              
              <Resource options={{ label: 'Users' }} show={UserShow} name="users" list={UserList} />
              <Resource options={{ label: 'Rotations' }} show={UserShow} name="rotations" list={RotationList} />

          </Admin>
       
    )
}

export default Landing;


