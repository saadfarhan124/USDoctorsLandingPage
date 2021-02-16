// in src/Dashboard.js
import React, {useState, useEffect} from "react";
import CountCard from './Cards/UserCount'
import AppsIcon from '@material-ui/icons/Apps';
import { useMediaQuery } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NewRotations from './Helpers/NewRotations';
import NewStudents from './Helpers/NewStudents';
import Welcome from './Helpers/Welcome';
import Dollar from '@material-ui/icons/AttachMoney' 

const axios = require('axios');

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },

};



const Spacer = () => <span style={{ width: '1em' }} />;

const Dashboard =  () => {

    const [studentList, setStudentList] = useState([]);
    const [studentCount, setStudentCount] = useState(0);

    const [rotationList, setRotationList] = useState([]);
    const [rotationCount, setRotationCount] = useState(0);

    const [totalAmountEarned, setTotalAmountEarned] = useState(0);

    const baseUrl = 'http://app.usdoctors.co';

    const fetchStudents = async () => {
        const response = await axios.get(`${baseUrl}/api/podcast/user_count`);
        setStudentCount(response.data);
    }

    const fetchStudentList = async () => {
        const response = await axios.get(`${baseUrl}/api/users/recent`);
        setStudentList(response.data);
    }

    const fetchRotations = async () => {
        const response = await axios.get(`${baseUrl}/api/rotations/count`);
        setRotationCount(response.data);
    };

    const fetchRotationList = async () => {
        const response = await axios.get(`${baseUrl}/api/rotations/recent`);
        setRotationList(response.data);
    };

    const fetchTotalAmountEarned = async () => {
        const response = await axios.get(`${baseUrl}/api/rotations/amount/`);
        setTotalAmountEarned(response.data);
    }

    useEffect(() => {
        fetchStudents();
        fetchStudentList();
        fetchRotations();
        fetchRotationList();
        fetchTotalAmountEarned();
    }, [studentCount, rotationCount])

    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('xs')
    );
    const isSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('md')
    );
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn}>
                <div style={styles.singleCol}>
                    <Welcome />
                </div>
                <div style={styles.singleCol}>
                    <CountCard style={styles.topMargin} title="Total Amount Earned" value = {totalAmountEarned} icon ={Dollar} />
                </div>
                <div style={styles.singleCol}>
                    <CountCard style={styles.topMargin} title="Students" value = {studentCount} icon ={Dollar} />
                </div>
                <div style={styles.singleCol}>
                    <NewStudents style={styles.topMargin} />
                </div>
                <div style={styles.singleCol}>
                    <CountCard style={styles.topMargin} title="Rotations" value = {rotationCount} icon ={AppsIcon} />
                </div>
                <div style={styles.singleCol}>
                    <NewRotations style={styles.topMargin} />
                </div>
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn}>
            <div style={styles.singleCol}>
                <Welcome />
            </div>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <CountCard title="Total Amount Earned" value = {totalAmountEarned} icon ={Dollar} />
                    <Spacer />
                </div>
                <div style={styles.leftCol}>
                    <CountCard title="Students" value = {studentCount} icon ={PersonIcon} />
                    <Spacer />
                </div>
                <div style={styles.rightCol}>
                    <CountCard title="Rotations" value = {rotationCount} icon ={AppsIcon} />
                    <Spacer />
                </div>
            </div>
            <div style={styles.singleCol}>
                <NewStudents />
            </div>
            <div style={styles.singleCol}>
                <NewRotations />
            </div>
        </div>
    ) : (
        <>
            <div style={styles.flexColumn}>
                <div style={styles.singleCol}>
                    <Welcome />
                </div>
            </div>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <CountCard title="Total Amount Earned" value = {totalAmountEarned} icon ={Dollar} />
                </div>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <CountCard title="Students" value = {studentCount} icon ={PersonIcon} />
                        <Spacer />                       
                    </div>
                    <div style={styles.singleCol}>
                        <NewStudents list={studentList} />
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <CountCard title="Rotations" value = {rotationCount} icon ={AppsIcon} />
                        <Spacer />
                    </div>
                    <div style={styles.singleCol}>
                        <NewRotations list={rotationList} />
                    </div>
                </div>
              
            </div>
        </>
    );
  
};

export default Dashboard;