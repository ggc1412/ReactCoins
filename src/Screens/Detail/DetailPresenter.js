import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Markets from "../../Screens/Markets";
import Exchanges from "../../Screens/DetailExchange";

const Container = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Desc = styled.div`
  margin: 20px 0;
`;

const Specs = styled.div``;

const Spec = styled.div`
  margin-bottom: 5px;
`;

const Col = styled.span`
  font-weight: bold;
`;

const ButtonSection = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Button = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 20px;
  padding: 8px;
  border-radius: 5px;
  border: 3px solid #2ecc71;
  background-color: ${props => (props.selected ? "#2ecc71" : "white")};
  color: ${props => (props.selected ? "white" : "black")};
`;

const DetailPresenter = ({ loading, result, error, coinOp, updateSelect }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Title>
          {result.name} / {result.symbol}
        </Title>
        <Desc>{result.description}</Desc>
        <Specs>
          <Spec>
            <Col>Rank:</Col> {result.rank}
          </Spec>
          <Spec>
            <Col>Open Source:</Col> {result.open_source ? "Yes" : "No"}
          </Spec>
          <Spec>
            <Col>Proof Type:</Col> {result.proof_type}
          </Spec>
          <Spec>
            <Col>Structure:</Col> {result.org_structure}
          </Spec>
        </Specs>
        <ButtonSection>
          <Button selected={coinOp === "markets" ? true : false}>
            <Link to={`/coins/${result.id}/markets`} onClick={updateSelect}>
              markets
            </Link>
          </Button>
          <Button selected={coinOp === "exchanges" ? true : false}>
            <Link to={`/coins/${result.id}/exchanges`} onClick={updateSelect}>
              exchanges
            </Link>
          </Button>
        </ButtonSection>
      </Container>
      <Router>
        <Route path="/coins/:id/exchanges" component={Exchanges} />
        <Route path="/coins/:id/markets" component={Markets} />
      </Router>
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  coinOp: PropTypes.string
};

export default DetailPresenter;
