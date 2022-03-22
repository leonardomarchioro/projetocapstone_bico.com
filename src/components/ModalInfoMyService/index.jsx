import { useService } from "../../providers/Services";
import { toast } from "react-toastify";
import { ContainerModal, Div, Modal } from "./style";
import { BiLogOutCircle } from "react-icons/bi";

const ModalInfoMyService = ({
  service,
  setShowModalInfo,
  setShowModalReview,
}) => {
  const { regectSupplierToService } = useService();

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
        <BiLogOutCircle size={30} onClick={() => setShowModalInfo(false)} />
        <Div>
          <button
            className="button-modal fechar"
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
              console.log("teste");
              setShowModalReview(true);
              setShowModalInfo(false);
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
