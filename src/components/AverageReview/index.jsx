import { GoStar } from "react-icons/go";
import { Container } from "./styles";
const AverageReview = ({ avarage }) => {
  return (
    <Container>
      <span>
        <GoStar size={25} color="#dddd0f" />
        <strong>{avarage > 0 ? avarage.toFixed(1) : "0"}</strong>
      </span>
    </Container>
  );
};
export default AverageReview;
