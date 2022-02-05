import { Tabs } from '../../components/Tabs';
import { Container } from './styles';
import { formatObjectShowTabs } from './helper';

export function Simulator() {
  const { income, indexing } = formatObjectShowTabs();

  return (
    <Container>
      <h2>Simulador</h2>
      <div className="form-simulator">
        <div className="form-group">
          <Tabs title="Rendimendo" content={income} />
        </div>
        <div className="form-group">
          <Tabs title="Tipos de indexação" content={indexing} />
        </div>
      </div>
    </Container>
  );
}
