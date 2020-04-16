import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const MarketsPresenter = ({ loading, markets }) =>
  loading ? (
    <Loader />
  ) : (
    markets.map(market => <Market key={market.id} {...market} />)
  );

MarketsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_id: PropTypes.string.isRequired,
      exchange_name: PropTypes.string.isRequired,
      market_url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MarketsPresenter;
