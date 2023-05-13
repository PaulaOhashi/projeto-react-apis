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
        return "#70B873";
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
        return "#62B957";
      case "fire":
        return "#FD7D24";
      case "water":
        return "#4A90DA";
      case "poison":
        return "#A552CC";
      case "normal":
        return "#9DA0AA";
      case "bug":
        return "#8CB330";
      case "flying":
        return "#748FC9";
      case "eletric":
        return "#F2CB55";
      default:
        return "#F78551";
    }
  };