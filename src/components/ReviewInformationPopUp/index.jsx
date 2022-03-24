import { Container } from "./styles";
import { GoStar } from "react-icons/go";

const ReviewInformationPopUp = ({ supplierInfo, setOpenReview }) => {
  return (
    <Container>
      <header>
        <span onClick={() => setOpenReview((prev) => !prev)}>Voltar</span>
        <h2>Reviews {supplierInfo.name}</h2>
      </header>
      <ul>
        {supplierInfo.services_taken.map((service, index) => (
          <li key={index}>
            <h2>{service.category}</h2>
            <span>
              <GoStar size={16} color="#dddd0f" />
              {service.review.score}
            </span>
            <p>{service.review.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ReviewInformationPopUp;
