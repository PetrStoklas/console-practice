import React from 'react';
import { Button, Typography } from "antd"
import './App.css';
import "antd/dist/antd.css";


function App() {
    const { Title } = Typography
  return (
    <div className="App">
        <Title level={1}>my-app</Title>
        <Title level={2}>0</Title>
        <br />
        <Button type="primary">Click me</Button>
    </div>
  );
}

export default App;
