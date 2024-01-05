import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {

    return { hasError: true };
  }

  componentDidCatch(error) {console.log(error, 'catch')}

  render() {
    if (this.state.hasError) {
      return <h1>SOmething went wrong</h1>;
    }

    return this.props.children;
  }
}
