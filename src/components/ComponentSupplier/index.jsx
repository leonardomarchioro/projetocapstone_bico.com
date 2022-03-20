import { useService } from "../../providers/Services";
import Button from "../Button";
import { Container, ContainerInfo, Div } from "./styles";

const ServiceSupplier = () => {
  const { getAllServices } = useService();

  return (
    <Container>
      <ContainerInfo>
        <Div>
          <h3>Name:</h3>
          <span>Category:</span>
        </Div>
        <Button
          onClick={() => console.log("estou funcionando")}
          text={"Candidatar-se"}
        />
      </ContainerInfo>
      <p>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus provident saepe sunt nobis? Doloribus recusandae minus illum
        aut minima voluptatem at, aliquid a deleniti atque, sint corporis. Esse,
        quisquam voluptate.
      </p>
    </Container>
  );
};

export default ServiceSupplier;
