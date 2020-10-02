import React from 'react';
import { connect } from 'react-redux'

import { decrement, increment } from "./redux/actions"

import { Button, Typography } from "antd"
import './App.css';
import styles from './mainStyle.module.less';

import MyTable from "./MyTable";

interface Props {
    minutes: number;
    hours: number;
    decrement: () => void;
    increment: () => void;
}

const App: React.FC<Props> = ({ minutes, hours , decrement: dispatchDecrement, increment: dispatchIncrement }) => {
    const { Title } = Typography
  return (
    <div className="App">
        <Title level={1}>COUNTER</Title>
        <br />
        <br />
        <br />
        <Title level={2}>minutes {minutes}</Title>
        <Title level={3}>hours {hours}</Title>
        <br />
        <Button type="primary" onClick={dispatchIncrement} className={styles.myButton}> + </Button>
        <Button onClick={dispatchDecrement}> - </Button>
        <br />
        <br />
        <br />
        <MyTable />
    </div>
  );
}

const mapStateToProps = (state: { minutes: number, hours: number }) => ({
        minutes: state.minutes,
        hours: state.hours,
    })

export default connect(mapStateToProps, { decrement, increment })(App);
