// in src/Dashboard.js
import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import CountCard from './Cards/UserCount'
import AppsIcon from '@material-ui/icons/Apps';
import { useMediaQuery, Theme } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NewRotations from './Helpers/NewRotations';
import NewStudents from './Helpers/NewStudents';
import Welcome from './Helpers/Welcome';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },

};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard =  () => {

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
                    <CountCard style={styles.topMargin} title="Students" value = {23} icon ={PersonIcon} />
                </div>
                <div style={styles.singleCol}>
                    <NewStudents style={styles.topMargin} />
                </div>
                <div style={styles.singleCol}>
                    <CountCard style={styles.topMargin} title="Rotations" value = {23} icon ={AppsIcon} />
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
                    <CountCard title="Students" value = {23} icon ={PersonIcon} />
                    <Spacer />
                </div>
                <div style={styles.rightCol}>
                    <CountCard title="Rotations" value = {23} icon ={AppsIcon} />
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
                    <div style={styles.flex}>
                        <CountCard title="Students" value = {23} icon ={PersonIcon} />
                        <Spacer />                       
                    </div>
                    <div style={styles.singleCol}>
                        <NewStudents />
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <CountCard title="Rotations" value = {23} icon ={AppsIcon} />
                        <Spacer />
                    </div>
                    <div style={styles.singleCol}>
                        <NewRotations />
                    </div>
                </div>
            </div>
        </>
    );
  
};

export default Dashboard;