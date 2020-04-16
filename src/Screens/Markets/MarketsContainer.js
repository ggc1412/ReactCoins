import React from "react";
import MarketsPresenter from "./MarketsPresenter";
import { getDetailMarkets } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    markets: []
  };

  componentDidMount() {
    this.getMarkets();
  }

  getMarkets = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const { data: markets } = await getDetailMarkets(id);
      this.setState({
        markets
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <MarketsPresenter {...this.state} />;
  }
}
