import React, { useState } from "react";
import { AppButton } from "../AppButton/AppButton";
import { AppInput } from "../AppInput/AppInput";
import Modal from "react-modal";
import { SCTransferBlock } from "../../TransfersElems/TransfersElems.style";
import { AppLink } from "../AppLink/AppLink";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface AppModalProps {
  modalIsOpen: boolean;
}

export const AppModal = ({ modalIsOpen, }: AppModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Добавление коментов"
    >
      <SCTransferBlock>
        <div className="transferPart transferIn">
          <h3>Счет списания</h3>
          <AppInput
            isDisabled={false}
            hasError={false}
            placeholder="Номер карты"
            iconName="card"
          />
          <AppInput
            hasError={false}
            placeholder="Сумма перевода"
            iconName="cash"
          />
          <AppLink align="right" linkLabel="Выбрать по номеру телефона" />
        </div>
        <div className="transferPart transferOut">
          <h3>Счет зачисления</h3>
          <AppInput
            hasError={false}
            placeholder="Номер карты"
            iconName="card"
          />
          <AppLink align="right" linkLabel="Выбрать по номеру телефона" />
        </div>
        <AppButton buttonLabel="Перевести" isDisabled={false} />
      </SCTransferBlock>
    </Modal>
  );
};
