import { useState } from "react";
import { Container } from "./styles";
import { BsStarFill } from "react-icons/bs";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">
              <BsStarFill />
            </span>
          </button>
        );
      })}
    </Container>
  );
};

export default StarRating;
