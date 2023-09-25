import L_REAL_ESTATE from "../../assets/img/Projects/real-estate.webp";
import L_SPEECH from "../../assets/img/Projects/speech-to-comment.webp";
import L_SPOTIFY from "../../assets/img/Projects/spotify-analyzer.webp";

// Tech

//  Real Estate
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_BT4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_PGSQL from "../../assets/img/skills/postgresql.svg";

// Speech
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_NODE from "../../assets/img/skills/nodejs.svg";
import L_HTML from "../../assets/img/skills/html-5.svg";
import L_CSS from "../../assets/img/skills/css3.svg";

//Spotify
import L_REACT from "../../assets/img/skills/react.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_ML from "../../assets/img/skills/ml.svg";

export const projects = {
  covid: [
    {
      date: "29/11/2020",
      name: "Real-Estate-App",
      src: L_REAL_ESTATE,
      description:
        "Django Real Estate Web app to explore properties, rental housing and connect to the realtors.",
      features: [
        "Web app to search for realtors and properties to buy, sell or rent",
        "Backend built with Django where realtors can post about properties with their contact.",
        "Front end built with pre-built theme",
        "Users can register, search or even inquire about properties directly connecting to the realtors.",
      ],
      tech: [
        {
          name: "Python",
          imgSrc: L_PYTHON,
        },
        {
          name: "Django",
          imgSrc: L_DJANGO,
        },
        {
          name: "PostGreSQL",
          imgSrc: L_PGSQL,
        },
        {
          name: "Bootstrap",
          imgSrc: L_BT4,
        },
      ],
      siteUrl: "https://anis-real-estate-web-app.herokuapp.com/",
      gitUrl: "https://github.com/anis-agwan/real-estate-web-app",
    },
  ],
  masters: [
    {
      date: "03/21/2023",
      name: "Speech-To-Code-Comment",
      src: L_SPEECH,
      description:
        "An extension to make development easy by writing comments from speech input. This extension takes in voice speech input and writes down at the cursor pointed.",
      features: [
        "This extension makes use of the in built browser's Speech Recognition module to take in the speech inputs",
        "With the help of VS code api, convert the speech to text",
        "Write the comments to their respective programming language.",
      ],
      tech: [
        {
          name: "NodeJS",
          imgSrc: L_NODE,
        },
        {
          name: "Javascript",
          imgSrc: L_JAVASCRIPT,
        },
        {
          name: "HTML",
          imgSrc: L_HTML,
        },
        {
          name: "CSS",
          imgSrc: L_CSS,
        },
      ],
      siteUrl: "",
      gitUrl: "https://github.com/anis-agwan/Speech-to-Comment-Extension",
    },
    {
      date: "12/08/2022",
      name: "Spotify Song Analyzer",
      src: L_SPOTIFY,
      description:
        "A web application to compare the popularity of songs on Spotify, X i.e Twitter and Reddit",
      features: [
        "This application makes use of Natural Language processing to detect the sentiments of tweets and comments on X and reddit.",
        "Using TextBlob of Spacy, it detects the positive or negative sentiments and displays the results using the graphs.",
        "Collected data from X and Reddit, processed the NLP model of Spacy for sentiment analysis and displayed the result using ReactJS webapp.",
      ],
      tech: [
        {
          name: "ReactJS",
          imgSrc: L_REACT,
        },
        {
          name: "Javascript",
          imgSrc: L_JAVASCRIPT,
        },
        {
          name: "Python",
          imgSrc: L_PYTHON,
        },
        {
          name: "Flask",
          imgSrc: L_FLASK,
        },
        {
          name: "Machine Learning",
          imgSrc: L_ML,
        },
      ],
      siteUrl: "",
      gitUrl:
        "https://github.com/anis-agwan/Social-Media-Data-Science-project.git",
    },
  ],
};
