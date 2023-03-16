import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return "Internal Error.";
    }

    return this.props.children;
  }
}

const ErrorTemplate = () => {
  // ReferenceError: foo is not defined.
  foo;
  return "OK";
};

class Error extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        {/* If ErrorTemplate throws, the boundary will catch it. */}
        <ErrorTemplate {...this.props} />
      </ErrorBoundary>
    );
  }
}

export default Error;