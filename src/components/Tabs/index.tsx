import { useState } from 'react';
import { Container } from './styles';
import Tooltip from '../../Assets/images/icons/tooltip.svg';
import { TabsProps } from './interfaces';

export function Tabs({ title, content }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <div className="info">
        <span>{title}</span>
        <img src={Tooltip} alt="Dica" />
      </div>
      <div className="tabs-container">
        {content.map((item, index) => (
          <div
            onClick={() => setActiveTab(item.id)}
            className={`tab ${activeTab === item.id ? 'active' : ''} ${
              index === 0 ? 'tab-two' : ''
            }  ${index === 1 ? 'tab-two-second' : ''}  ${
              index >= 1 ? 'tab-two' : ''
            } 
            ${index === 2 ? 'tab-two-third' : ''}
            `}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}
