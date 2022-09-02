import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Category</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="deposit">R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="withdraw">- R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="withdraw">- R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="withdraw">- R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de sistemas</td>
            <td className="deposit">R$ 20,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
