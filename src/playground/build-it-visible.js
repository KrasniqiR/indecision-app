class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.visibilityToggle =  this.visibilityToggle.bind(this)
    }

    visibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
                };
            }
        );

        console.log(this.state)
    }


    
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.visibilityToggle}>
            {this.state.visibility ? 'Hide details': 'Show details'}
            </button>
            {
                this.state.visibility && (
                <div>
                <p>'Hey. These are some details you can now see'</p>
                </div>
                )
            }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// const visibilityToggle = () => {
//     visibility = !visibility
//     render()
// }
// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={visibilityToggle}>
//         {visibility ? 'Hide details': 'Show details'}
//         </button>
        
//         {visibility && (
//             <div> 
//             <p>Hey. These are some details you can now see</p>
//             </div>)}
//         </div>
//     )

//     ReactDOM.render(template, document.getElementById('app'));
// };

// render();

