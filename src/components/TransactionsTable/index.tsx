import { Container } from "./style";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>Título</td>
            <td>Valor</td>
            <td>Categoria</td>
            <td>Data</td>
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
