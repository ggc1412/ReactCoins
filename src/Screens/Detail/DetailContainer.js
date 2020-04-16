import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getDetailCoins } from "../../api";

export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null
  };

  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      coinOp: pathname.split("/").length > 3 ? pathname.split("/")[3] : null
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let result = null;
    try {
      ({ data: result } = await getDetailCoins(id));
    } catch {
      this.setState({ error: "Can't find coin." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  updateSelect = e => {
    const {
      target: { innerHTML }
    } = e;
    this.setState({
      coinOp: innerHTML
    });
  };

  render() {
    return <DetailPresenter {...this.state} updateSelect={this.updateSelect} />;
  }
}
