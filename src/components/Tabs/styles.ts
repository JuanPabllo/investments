import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 500px;
    margin-top: 20px;
  }

  .tabs-container {
    display: flex;
    margin-top: 15px;

    .tab {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-weight: 500;
      justify-content: center;
      border-radius: 10px;
      width: 100px;
      height: 40px;
      background-color: #fff;
      color: #000;
      border: 1.5px solid #000;
    }

    .active {
      background-color: #ed8e53;
      color: #fff;
    }

    .tab-two {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .tab-two-second {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .tab-two-third {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
