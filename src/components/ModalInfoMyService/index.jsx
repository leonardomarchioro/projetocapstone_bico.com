import { useService } from "../../providers/Services";
import { toast } from "react-toastify";
import { ContainerModal, Modal } from "./style";

const ModalInfoMyService = ({
  service,
  setShowModalInfo,
  setShowModalReview,
}) => {
  const { getServiceTakenSupplier, regectSupplierToService } = useService();

  console.log(service.supplier[0].id);

  const success = (msn) => {
    toast.success(msn);
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  return (
    <>
      <ContainerModal>
        <Modal>
          <h2>Candidato: {service.supplier[0].name}</h2>
          <span>E-mail: {service.supplier[0].email}</span>
          <span>Telefone: {service.supplier[0].phone}</span>
          <button onClick={() => setShowModalInfo(false)}>X</button>
          <button
            onClick={() => {
              setShowModalInfo(false);
              regectSupplierToService(service.id, success, error);
            }}
          >
            Rejeitar
          </button>
          {/* <button
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
        </button> */}
          <button
            onClick={() => {
              console.log("teste");
              setShowModalReview(true);
              setShowModalInfo(false);
            }}
          >
            Aceitar
          </button>
        </Modal>
      </ContainerModal>
    </>
  );
};

export default ModalInfoMyService;
