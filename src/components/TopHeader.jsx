import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import { Button, Typography, Avatar } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const { Header } = Layout;

const TopHeader = () => {
  return (
    <div className="logo-container">
      <Avatar src={icon} size="large" />
      <Typography.Title level={2} className="logo">
        <Link to="/">Cryptoverse</Link>
      </Typography.Title>
    </div>
  );
};

export default TopHeader;
