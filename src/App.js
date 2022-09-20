import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  TopHeader,
  Navbar,
} from "./components";
import "./App.css";
import { Footer } from "antd/lib/layout/layout";

const { Sider, Content } = Layout;

const App = () => (
  <div className="app">
    <Layout>
      <TopHeader />
      <Layout className="contents">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="250"
          style={{
            position: "fixed",
            zIndex: 3,
            height: "100vh",
            paddingTop: "4rem",
          }}
        >
          <Navbar />
        </Sider>
        <Layout className="main">
          <Content>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Content>

          <Footer>
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Copyright © 2021
              <Link to="/">Cryptoverse Inc.</Link> <br />
              All Rights Reserved.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
);

export default App;
