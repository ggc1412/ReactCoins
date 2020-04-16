import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import DetailExchanges from "../../Components/DetailExchange";

const DExchangesPresenter = ({ loading, exchanges }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges.map(exchange => (
      <DetailExchanges key={exchange.id} {...exchange} />
    ))
  );

DExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default DExchangesPresenter;
