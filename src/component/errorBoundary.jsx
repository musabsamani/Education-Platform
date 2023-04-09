import React, { Component } from "react";
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can use this method to log the error or perform other error handling tasks
        console.error("Error caught by ErrorBoundary:", error);
        console.error("Error info:", info);
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.props.fallBack || "Something went wrong!"}</div>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
