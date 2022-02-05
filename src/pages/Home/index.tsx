import { Simulator } from '../../container/simulator';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <div className="principal-title">
        <h1>Simulador de investimentos</h1>
      </div>
      <div className="content">
        <Simulator />
      </div>
    </Container>
  );
}
