import { Container } from "./styles";
import { BsStarFill } from "react-icons/bs";

const StarRating = ({ setRating, setHover, rating, hover }) => {
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
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
