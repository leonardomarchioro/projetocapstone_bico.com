import { useUser } from "../../providers/User";
import { GoStar } from "react-icons/go";
import { Container } from "./styles";

const Average = () => {
  const { supplier } = useUser();

  const sumScore = supplier[0].services_taken.reduce((prev, curr) => {
    return curr.review.score + prev;
  }, 0);

  const average = sumScore / supplier[0].services_taken.length;

  return (
    <Container>
      <span>
        <GoStar size={25} color="#dddd0f" />
        <strong>{average.toFixed(1)}</strong>
      </span>
    </Container>
  );
};
export default Average;
