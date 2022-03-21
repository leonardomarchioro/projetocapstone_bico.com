import { useService } from "../../providers/Services";
import { useEffect } from "react";
import MyServicesComponent from "../../MyServicesComponent";

const MyServices = () => {
  const { getSevicesClient, services } = useService();

  console.log(services);

  useEffect(() => {
    getSevicesClient();
  }, []);

  // console.log(services);
  return (
    <div>
      <ul>
        {services.map((service) => {
          return <MyServicesComponent service={service} />;
        })}
      </ul>
    </div>
  );
};
export default MyServices;
