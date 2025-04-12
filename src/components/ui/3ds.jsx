import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import "./3d.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../../ui/Footer";

const projects = [
  {
    title: "Ecommerce Website",
    description: "A modern eCommerce website offering a wide range of quality products ",
    image: "/images/ecomm.png",
    website:"",
    github: "https://github.com/Sanjay112005/react-ecomm"
  },
  {
    title: "Blood Bank",
    description: "Front-End blood bank application",
    image: "/images/blood.png",
    website:"https://blood-eta-rose.vercel.app/",
    github: "https://github.com/Sanjay112005/Blood"
  },
  {
    title: "Movie Review Website",
    description: "Get real time IMDB of movie using  API ",
    image: "/images/mov.png",
    website:"https://mov-sepia.vercel.app/",
    github: "https://github.com/Sanjay112005/mov"
  },
  {
    title: "Movie Success Prediction  ",
    description: "A  Webiste to predict the movie success rate",
    image: "/images/movie.png",
    website:"https://visionary-syrniki-eb60d0.netlify.app/",
    github: "https://github.com/Sanjay112005/prediction"
  },
  {
    title: "Car-Rent Frontend",
    description: "The Website which displays the list of cars for rent in ther company",
    image: "/images/car.png",
    website:"https://carwe.netlify.app/",
    github: "https://github.com/Sanjay112005/carwebsite"
  },
  {
    title: "Farm Management system",
    description: "A simple Farm Management system which displays dairy products ",
    image: "/images/farm.png",
    website:"",
    github: "https://github.com/Sanjay112005/farms-"
  },

];

export default function ThreeDCardDemo() {
  return (
    <div className="cards-wrappe">
      {projects.map((project, index) => (
        <CardContainer key={index} className="card-containe">
          <CardBody className="card-body">
            <CardItem translateZ={50} className="card-tit">
              {project.title}
            </CardItem>
            <CardItem translateZ={60} className="card-tex">
              {project.description}
            </CardItem>
            <CardItem translateZ={100} className="card-imag">
              <img
                src={project.image}
                alt={project.title}
                height="1000"
                width="1000"
              />
            </CardItem>
            <div className="card-footer">
            {project.website && (
  <CardItem
    translateZ={20}
    as="a"
    href={project.website}
    target="_blank"
    rel="noopener noreferrer"
    className="card-link"
  >
    <div className="eyes">
      <FontAwesomeIcon icon={faEye} style={{ color: "#000000" }} />
    </div>
  </CardItem>
)}

<CardItem
    translateZ={20}
    as="a"
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className={`card-button ${!project.website ? 'ml-auto' : ''}`}
  >
    GitHub
  </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        
      ))}
<Footer />
    </div>
    
  );
}
