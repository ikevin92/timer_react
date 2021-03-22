import React, { Component, useEffect, useRef, useState } from "react";
import "./index.css";

// export default class Timer extends Component {

//   render() {
//     return (
//       <div className="mt-100 layout-column align-items-center justify-content-center">
//          <div className="timer-value" data-testid="timer-value"></div>
//          <button className="large" data-testid="stop-button">Stop Timer</button>
//       </div>
//     );
//   }
// }


const index = () => {

    // console.log( { props } );

    const [ segundos, setSegundos ] = useState( 100 );


    // const { tiempo, estado } = segundos;

    const [ stop, setStop ] = useState( true );
    const ref = useRef();

    console.log( ref );

    const botonSubmit = () => {
        console.log( 'click en botonSubmit' );
        // clearInterval( segundos );

        // setSegundos( segundos );
        // clearInterval( ref.current );
        setStop( !stop );

    };

    // const cuentaRegresiva = () => {
    //     setSegundos( s => ( s > 0 ) ? s - 1 : 0 );
    // };

    useEffect( () => {
        // const tiempo = setInterval( timeLeft, 1000 );
        // Clear timeout if the component is unmounted
        // return () => clearTimeout( timer );

        if ( stop ) {
            console.log( stop );
            // ref.current && clearInterval( ref.current );
            ref.current = setInterval( () => setSegundos( ( s ) => ( s > 0 ) ? s - 1 : s ), 1000 );
        } else {
            setSegundos( segundos );
            clearInterval( ref.current );
        }





        // setTimeLeft( timer );
    }, [ stop ] );



    return (
        <div className="mt-100 layout-column align-items-center justify-content-center">
            <div className="timer-value" data-testid="timer-value">{ segundos }</div>
            <button className="large" data-testid="stop-button" onClick={ botonSubmit }>Stop Timer</button>
        </div>
    );
};

export default index;


