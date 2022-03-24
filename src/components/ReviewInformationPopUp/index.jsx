import { Container } from "./styles";
import { GoStar } from "react-icons/go";
import { BiLogOutCircle } from "react-icons/bi";

const ReviewInformationPopUp = ({ supplierInfo, setOpenReview }) => {
  return (
    <Container>
      <header>
        <h2>Reviews {supplierInfo.name}</h2>
        {/* <span onClick={() => setOpenReview((prev) => !prev)}>Voltar</span> */}
        <BiLogOutCircle
          className="svg-icon"
          size={30}
          onClick={() => setOpenReview((prev) => !prev)}
        />
      </header>
      <ul>
        {supplierInfo.services_taken.map((service, index) => (
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
