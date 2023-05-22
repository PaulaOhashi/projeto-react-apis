import poison from "../assets/poison.png"
import grass from "../assets/grass.png"
import fire from "../assets/fire.png"
import bug from "../assets/bug.png"
import dark from "../assets/dark.png"
import dragon from "../assets/dragon.png"
import electric from "../assets/electric.png"
import fairy from "../assets/fairy.png"
import flying from "../assets/flying.png"
import normal from "../assets/normal.png"
import water from "../assets/water.png"
import ghost from "../assets/ghost.png"
import ground from "../assets/ground.png"
import psychic from "../assets/psychic.png"
import rock from "../assets/rock.png"
import steel from "../assets/steel.png"


export const getColors = (type) => {
    switch(type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#729F92";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF";
      default:
        return "#8A8A8A";
    }
  };

  export const getType = (type) =>{
    switch(type){
      case "grass":
        return {
          color:"#70B873",
          img:grass
        };
      case "fire":
        return {
          color:"#F44900",
          img:fire
        };
      case "water":
        return {
          color:"#33A4F5",
          img:water
        };
      case "poison":
        return {
          color:"#AD61AE",
          img:poison
        };
      case "normal":
        return {
          color:"#8A8A8A",
          img:normal
        };
      case "bug":
        return {
          color:"#316520",
          img:bug
        };
      case "flying":
        return {
          color:"#6892B0",
          img:flying
        };
      case "eletric":
        return {
          color:"#F2CB55",
          img:electric
        };
      default:
        return "#F78551";
    }
  };

