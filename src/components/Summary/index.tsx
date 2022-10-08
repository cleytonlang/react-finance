import { Container } from "./styles";
import IncomeImg from "../../assets/get.svg";
import OutcomeImg from "../../assets/lost.svg";
import TotalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";
function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Deposits</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$1.800,00</strong>
      </div>
      <div>
        <header>
          <p>Cash outs</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}

export default Summary;
