import React, { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
// Import other pages as needed

function App() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        if (tawkMessengerRef.current) {
            tawkMessengerRef.current.minimize();
        }
    };

    const onLoad = () => {
        console.log('onLoad works!');
    };

    const onChatStarted = () => {
        console.log('Chat started!');
    };

    return (
        <BrowserRouter>
            <div className="App">
                <button onClick={handleMinimize}>Minimize the Chat</button>

                <TawkMessengerReact
                    propertyId="667486ca9d7f358570d1c3c9"
                    widgetId="1i0rit1si"
                    ref={tawkMessengerRef}
                    onLoad={onLoad}
                    onChatStarted={onChatStarted}
                />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Define other routes as needed */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
