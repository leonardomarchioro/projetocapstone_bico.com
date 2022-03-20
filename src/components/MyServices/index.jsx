import { useService } from "../../providers/Services";
import { useEffect, useState } from "react";

const MyServices = () => {
  const { getSevicesClient, services } = useService();

  useEffect(() => {
    getSevicesClient();
  }, []);
  console.log(services);
  return (
    <div>
      <ul>
        {services.map((service, i) => {
          return (
            <li>
              <h2>{service.category}</h2>
              <span>{service.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MyServices;
