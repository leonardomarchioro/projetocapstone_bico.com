import { useService } from "../providers/Services";
import { GoStar } from "react-icons/go";
// import { Container } from "./styles";
import { useEffect } from "react";

const AverageReviewModal = ({ service }) => {
  const { averageSupplier, UpdateAverage } = useService();

  console.log(averageSupplier);
  useEffect(() => {
    UpdateAverage(service.supplier[0].id, "supplier");
  }, []);

  return (
    <div>
      <span>
        <GoStar size={25} color="#dddd0f" />
        <strong>
          {averageSupplier > 0 ? averageSupplier.toFixed(1) : "0"}
        </strong>
      </span>
    </div>
  );
};
export default AverageReviewModal;
