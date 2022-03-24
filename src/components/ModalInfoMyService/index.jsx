import { useService } from "../../providers/Services";
import { toast } from "react-toastify";
import { ContainerModal, Div, Modal } from "./style";
import { BiLogOutCircle } from "react-icons/bi";
import AverageReview from "../AverageReview";
import { useState, useCallback, useEffect } from "react";
import ReviewInformationPopUp from "../ReviewInformationPopUp";
const ModalInfoMyService = ({ service, setShowModalInfo }) => {
  const { regectSupplierToService, UpdateAverage, AceptSupplierToService } =
    useService();
  const [avarage, setAvarage] = useState(0);
  const [openReview, setOpenReview] = useState(false);
  const getAvarage = useCallback(async () => {
    const avarageUpdated = await UpdateAverage(service.supplier[0].id);
    setAvarage(avarageUpdated);
  }, [UpdateAverage, service.supplier]);

  const success = (msn) => {
    toast.success(msn);
  };
  const error = () => {
    toast.error("Houve algum erro, tente mais tarde");
  };

  useEffect(() => {
    getAvarage();
  }, [getAvarage]);
  return (
    <ContainerModal>
      {!openReview ? (
        <Modal>
          <h2>
            Candidato: <br />
            {service.supplier[0].name}
          </h2>

          <AverageReview avarage={avarage} />
          <div className="Infos">
            <span onClick={() => setOpenReview(!openReview)}>
              Reviews do Biqueiro
            </span>
            <span>
              E-mail: <br />
              {service.supplier[0].email}
            </span>
            <span>Telefone: {service.supplier[0].phone}</span>
          </div>
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
                AceptSupplierToService(service.id, success, error);
                setShowModalInfo(false);
              }}
            >
              Aceitar
            </button>
          </Div>
        </Modal>
      ) : (
        <ReviewInformationPopUp
          supplierInfo={service.supplier[0]}
          setOpenReview={setOpenReview}
        />
      )}
    </ContainerModal>
  );
};

export default ModalInfoMyService;
