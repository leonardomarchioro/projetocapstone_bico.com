import { Container } from "./styles";
import { GoStar } from "react-icons/go";
import { BiLogOutCircle } from "react-icons/bi";
import { useService } from "../../providers/Services";
import { useEffect } from "react";

const ReviewInformationPopUp = ({ supplierInfo, setOpenReview }) => {
  const { getReviewsSupplier, reviewsTaken } = useService();

  useEffect(() => {
    getReviewsSupplier(supplierInfo.id);
  }, []);

  return (
    <Container>
      <header>
        <h2>Reviews {supplierInfo.name}</h2>
        <BiLogOutCircle
          className="svg-icon"
          size={30}
          onClick={() => setOpenReview((prev) => !prev)}
        />
      </header>
      <ul>
        {reviewsTaken.map((service, index) => (
          <li key={index}>
            <div className="review-average">
              <h2>{service.category}</h2>
              <span>
                <GoStar size={16} color="#dddd0f" />
                {service.review.score}
              </span>
            </div>
            <p>{service.review.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ReviewInformationPopUp;
