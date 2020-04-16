import React from "react";
import DExchangesPresenter from "./DExchangesPresenter";
import { getDetailExchanges } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    exchanges: []
  };

  componentDidMount() {
    this.getExchanges();
  }

  getExchanges = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const { data: exchanges } = await getDetailExchanges(id);
      this.setState({
        exchanges
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <DExchangesPresenter {...this.state} />;
  }
}
