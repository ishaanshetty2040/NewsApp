import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "Sex assault victim calls for cricket abuse inquiry",
      description:
        "A man who was sexually assaulted by a former Durham coach as a child calls for an independent inquiry into abuse within the sport.",
      url: "http://www.bbc.co.uk/sport/cricket/63315077",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/4713/production/_127259181_cricket.jpg",
      publishedAt: "2022-10-19T12:52:23.8232924Z",
      content:
        "A man who was sexually assaulted by a former Durham cricket coach as a child has called for an independent inquiry into abuse within the sport.\r\nHe said he has received no support from the England an… [+3060 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Sadiq Naqvi",
      title:
        "In the neighbourhood of former Indian footballer Bhaichung Bhutia",
      description:
        "In the 1990s and 2000s, Bhutia’s magic on the field brought the sport back into contention in the cricket-crazy country.",
      url: "http://www.aljazeera.com/sports/2022/10/19/in-the-neighbourhood-of-former-indian-footballer-bhaichung-bhutia",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/10/IMG_2127.jpg?resize=1920%2C1440",
      publishedAt: "2022-10-19T05:46:01Z",
      content:
        "Gangtok, Sikkim On a cool monsoon morning, as a layer of mist hung over the lush hills in Gangtok, a group of young students wearing bright yellow, orange and green jerseys kicked about on the footba… [+9451 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=ae8469669fa74349924a9ec53c14b4f8";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Godspeed-Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
