import { useUser } from "../../providers/User";
import { useService } from "../../providers/Services";
import { GoStar } from "react-icons/go";
import { Container } from "./styles";
import { useEffect } from "react";
const AverageReviewProfile = () => {
  const { supplier } = useUser();
  const { average, UpdateAverage } = useService();

  console.log(average);

  useEffect(() => {
    console.log(supplier[0]);
    UpdateAverage(supplier[0].id, "profile");
  }, []);

  return (
    <Container>
      <span>
        <GoStar size={25} color="#dddd0f" />
        <strong>{average > 0 ? average.toFixed(1) : "0"}</strong>
      </span>
    </Container>
  );
};
export default AverageReviewProfile;
