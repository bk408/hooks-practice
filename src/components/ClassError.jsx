import { Component } from "react";


class ErrorBoundaries extends Component{
    constructor(props) {
        super(props);
        this.state= {hasError: false}
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error boundary caught an error", error, errorInfo);
        this.setState({hasError: true})
    }


    render() {
        if (this.state.hasError) {
            return <h1>something went wrong</h1>
        }

        return this.props.children;
    }

}


export default ErrorBoundaries;