import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'


function Home() {
    return (
        <div>
            <Header />

            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </main>

            <Footer />
        </div>
    )
}

export default Home;
