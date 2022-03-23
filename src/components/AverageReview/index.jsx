import { useUser } from "../../providers/User";
import { useService } from "../../providers/Services";
import { GoStar } from "react-icons/go";
import { Container } from "./styles";
import { useEffect } from "react";
const AverageReview = ({ service = false, asideProfile = false }) => {
  const { supplier } = useUser();
  const { average, UpdateAverage } = useService();

  useEffect(() => {
    if (asideProfile) {
      UpdateAverage(supplier[0].id);
    } else if (!asideProfile) {
      UpdateAverage(service.supplier[0].id);
    }
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
export default AverageReview;
