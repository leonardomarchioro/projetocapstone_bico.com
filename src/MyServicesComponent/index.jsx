import Button from "../components/Button";
import { useService } from "../providers/Services";

const MyServicesComponent = ({ service }) => {
  const { deleteService, attServiceReview } = useService();

  return (
    <li key={service.id} id={service.id}>
      <h2>{service.category}</h2>
      <span>{service.dateActual}</span>
      {/* <Button text="X" onClick={() => deleteService(service.id)} />
      <Button
        text="+"
        onClick={() =>
          attServiceReview(service.id, {
            score: 5,
            comment: " trabalha direitinho o rapaz",
          })
        }
      /> */}
    </li>
  );
};

export default MyServicesComponent;
