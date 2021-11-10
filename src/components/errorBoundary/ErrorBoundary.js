import { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage'

// Предохранители ловят ошибки только в методах жизненного цикла, конструкторах и в рендере
// Они не ловят ошибки внутри обработчиков событий, внутри самого предохранителя

class ErrorBoundary extends Component {
    state ={
        error: false,

    }

    static getDerivatedStateFromError(error) {
        return {error: true};
    }


    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        } else {
            return this.props.children;
        }
    }
}
export default ErrorBoundary;