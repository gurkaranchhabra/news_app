import { Container, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  let sources = {
    world: "india_english_world",
    india: "india_english",
    entertainment: "india_english_entertainment",
    sports: "india_english_sports",
    business: "india_english_business",
  };

  const API_KEY = "WidC9P3ROrCvgToOcOXCyyeIqHczzM";

  let baseUrl = `https://newsapi.in/newsapi/news.php?key=${API_KEY}&category=`;

  const [results, setResults] = useState([]);
  const [headlines, setHeadlines] = useState("Top Headlines");

  const [indiaResults, setIndiaResults] = useState([]);
  const [entertainmentResults, setEntertainmentResults] = useState([]);
  const [sportsResults, setSportsResults] = useState([]);
  const [businessResults, setBusinessResults] = useState([]);

  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  useEffect(() => {
    fetchFunction(baseUrl + sources.world);
    console.log(baseUrl + sources.india);
    fetch(baseUrl + sources.india)
      .then((data) => data.json())
      .then((res) => {
        let newArr = res.News.splice(0, 20);
        setIndiaResults(newArr);
      });
    fetch(baseUrl + sources.entertainment)
      .then((data) => data.json())
      .then((res) => {
        let newArr = res.News.splice(0, 30);
        setEntertainmentResults(newArr);
      });
    fetch(baseUrl + sources.sports)
      .then((data) => data.json())
      .then((res) => {
        let newArr = res.News.splice(0, 30);
        setSportsResults(newArr);
      });
    fetch(baseUrl + sources.business)
      .then((data) => data.json())
      .then((res) => {
        console.log(res.News);
        let newArr = res.News.splice(0, 30);
        setBusinessResults(newArr);
      });
  }, []);

  const fetchFunction = (url) => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setResults(res.News);
      });
  };

  return (
    <div className="App">
      <Container maxW="1300px">
        <NavBar
          sources={sources}
          isDark={isDark}
          toggleColorMode={toggleColorMode}
        />
        <Main
          results={results}
          indiaResults={indiaResults}
          sportsResults={sportsResults}
          entertainmentResults={entertainmentResults}
          politicsResult={businessResults}
          isDark={isDark}
          headlines={headlines}
        />
      </Container>
    </div>
  );
}

export default App;

//bbcResults={indiaResults}
//toiResults={toiResults}
//wsjResults={wsjResults}
//abcNews={abcNews}
