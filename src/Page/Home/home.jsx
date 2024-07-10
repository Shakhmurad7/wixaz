import React from 'react'
import PageContainer from '../../PageContainer/PageContainer'

function Home() {
  return (
    <>
    <PageContainer>
        <div className="nav-container">
          <div className="nav-text">
            <h2>Create a website without limits</h2>
            <h3>Build and scale with confidence. From a powerful website builder to advanced business solutions—we’ve got you covered</h3>
            <div className="nav-block">
                <button>Get Started</button>
                <p>Start for free. No credit card required.</p>
            </div>
          </div>
          <div className="nav-img">
            <img src="./Screenshot_1.png" />
          </div>

        </div>
    </PageContainer>
    </>
  )
}

export default Home