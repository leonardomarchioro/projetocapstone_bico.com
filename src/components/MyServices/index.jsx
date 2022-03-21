import { useService } from "../../providers/Services";
import { useEffect, useState } from "react";
import Button from "../Button";

const MyServices = () => {
  const { getSevicesClient, services, deleteService, attServiceReview } =
    useService();

  console.log(services);

  useEffect(() => {
    getSevicesClient();
  }, []);

  // console.log(services);
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
                onClick={() => deleteService(service.id)}
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
