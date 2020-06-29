import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TabMgr from './components/TabMgr'

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Multi-Tasks</h1>
            <TabMgr/>
            <Footer />
        </div>
    )
}

export default App
