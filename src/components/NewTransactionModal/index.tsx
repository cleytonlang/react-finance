import Modal from "react-modal";
import { api } from "../../services/api";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import IncomeImg from "../../assets/get.svg";
import OutcomeImg from "../../assets/lost.svg";
import { FormEvent, useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };

    api.post("/transactions", data);
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Create transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={IncomeImg} alt="Deposit" />
            <span>Deposit</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={OutcomeImg} alt="Cash out" />
            <span>Cash out</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}
