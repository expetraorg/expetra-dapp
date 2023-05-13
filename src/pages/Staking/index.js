import React from "react";
import ReactDOM from "react-dom";
import TripleToggleSwitch from "../../components/Switcher";
import { H1Text, Gradient, Container } from "../StakingMainPage/StakeMainPageElements";
import './StakingStyles.css';
const Example = (props) => {
  const labels = {
    left: {
      title: "NFT staking",
      value: "left"
    },
    right: {
      title: "Staked NFTS",
      value: "right"
    },
    center: {
      title: "Unstaked NFTs",
      value: "center"
    }
  };

//   const onChange = (value) => console.log("value", value);

  return (
    <>
    <div className="bg-container ellipse-left"/>
      <div className="bg-container ellipse-right"/>
      <Container>
      
      <H1Text className="text-header">Stake your <Gradient>NFTs</Gradient></H1Text>
      </Container>
      <TripleToggleSwitch labels={labels} />
    
      

    </>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);
export default Example;