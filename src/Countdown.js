import React from 'react';

export default class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Duración del timer por defecto de 3 minutos
            count: props.duration ? props.duration : 180
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state;
            this.setState({
                count: count - 1
            });
            // Color del texto rojo cuando solo queden 30 segundos
            let container = document.getElementById("container_countdown");
            if (count <= 31) {
                container.style.color = 'red';
            }
        }, 1000)
    }

    componentDidUpdate(_prevProps, prevState, _snapshot) {
        // Comprobación de la finalización del temporizador
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
            if (this.props.stopTimer) {
                this.props.stopTimer();
            }
        }
    }

    render() {
        let { count } = this.state;
        return (
            <div id="container_countdown">
                {(count - (count %= 60)) / 60 + (9 < count ? ':' : ':0') + count}
            </div>
        )
    }
}