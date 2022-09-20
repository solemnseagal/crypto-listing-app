import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import axios from "axios";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const [news, setNews] = useState("");
  // const { data } = useGetCryptosQuery(100);
  // const { data: cryptoNews } = useGetCryptoNewsQuery({
  //   newsCategory,
  //   count: simplified ? 6 : 12,
  // });

  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news",
    params: {
      count: "100",
      safeSearch: "Off",
      textFormat: "Raw",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": process.env.BING_NEWS_API_KEY,
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setNews(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  if (!news?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {/* {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            // onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {news.value.map((currency) => (
              <Option value={currency.name}>{currency.description}</Option>
            ))}
          </Select>
        </Col>
      )} */}
      {/* {news.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))} */}
    </Row>
  );
};

export default News;
