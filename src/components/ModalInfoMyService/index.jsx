import { useService } from "../../providers/Services";
import { toast } from "react-toastify";
import { ContainerModal, Div, Modal } from "./style";
import { BiLogOutCircle } from "react-icons/bi";
const ModalInfoMyService = ({ service, setShowModalInfo }) => {
  const { getServiceTakenSupplier, regectSupplierToService } = useService();

  console.log(service.supplier[0].id);

  const success = (msn) => {
    toast.success(msn);
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  return (
    <ContainerModal>
      <Modal>
        <h2>Candidato: {service.supplier[0].name}</h2>
        <span>E-mail: {service.supplier[0].email}</span>
        <span>Telefone: {service.supplier[0].phone}</span>
        <button
          className="button-close"
          onClick={() => setShowModalInfo(false)}
        >
          <BiLogOutCircle className="icon" />
        </button>
        <Div>
          <button
            className="button-modal"
            backgroundColor="red"
            onClick={() => {
              setShowModalInfo(false);
              regectSupplierToService(service.id, success, error);
            }}
          >
            Rejeitar
          </button>
          <button
            className="button-modal"
            onClick={() => {
              setShowModalInfo(false);
              getServiceTakenSupplier(
                service.category,
                service.id,
                {
                  score: "5",
                  review: "tudo ok",
                },
                service.supplier[0].id,
                success,
                error
              );
            }}
          >
            Aceitar
          </button>
        </Div>
      </Modal>
    </ContainerModal>
  );
};

export default ModalInfoMyService;
