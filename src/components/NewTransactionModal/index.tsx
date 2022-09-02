import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import IncomeImg from "../../assets/get.svg";
import OutcomeImg from "../../assets/lost.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />{" "}
      </button>

      <Container>
        <h2>Create transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Amount" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={IncomeImg} alt="Deposit" />
            <span>Deposit</span>
          </button>
          <button type="button">
            <img src={OutcomeImg} alt="Cash out" />
            <span>Cash out</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Category" />
        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
