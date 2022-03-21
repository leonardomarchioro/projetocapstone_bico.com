import { useService } from "../../providers/Services";
import { useEffect } from "react";
import Button from "../Button";
import { toast } from "react-toastify";

const MyServices = () => {
  const { getSevicesClient, services, deleteService, attServiceReview } =
    useService();

  useEffect(() => {
    getSevicesClient();
  }, []);

  const success = (msg) => {
    toast.success(msg);
  };

  services.forEach((service) => {
    if (service.supplier.supplierId) {
      console.log("ok");
    } else {
      console.log("not");
    }
  });
  console.log(services);

  return (
    <div>
      <ul>
        {services.map((service) => {
          return (
            <li key={service.id} id={service.id}>
              <h2>{service.category}</h2>
              <span>{service.dateActual}</span>
              <Button
                text="Excluir"
                onClick={() => deleteService(service.id, success)}
              />
              <Button
                text="review"
                onClick={() =>
                  attServiceReview(service.id, {
                    score: 5,
                    comment: " trabalha direitinho o rapaz",
                  })
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MyServices;
