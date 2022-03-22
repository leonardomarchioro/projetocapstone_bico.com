import Button from "../components/Button";
import { useService } from "../providers/Services";
import { Div, Li } from "./styles";

const MyServicesComponent = ({ service }) => {
  const { deleteService, attServiceReview } = useService();
  console.log(service);
  return (
    <>
      {service.supplier.length == undefined ? (
        <Li key={service.id} id={service.id}>
          <Div>
            <h2>{service.category}</h2>
            Disponível
          </Div>
          <span>{service.dateActual}</span>
        </Li>
      ) : (
        <Li key={service.id} id={service.id} backgroundColor="red">
          <Div>
            <h2>{service.category}</h2>
            Indisponível
          </Div>
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
        </Li>
      )}
    </>
  );
};

export default MyServicesComponent;
