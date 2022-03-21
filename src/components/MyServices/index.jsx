import { useService } from "../../providers/Services";
import { useEffect } from "react";
import MyServicesComponent from "../../MyServicesComponent";

const MyServices = () => {
  const { getSevicesClient, services } = useService();

  useEffect(() => {
    getSevicesClient();
  }, []);

  return (
    <div>
      <ul>
        {services.map((service) => {
          return <MyServicesComponent key={service.id} service={service} />;
        })}
      </ul>
    </div>
  );
};
export default MyServices;
