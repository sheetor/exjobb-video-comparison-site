import Head from 'next/head'
import Meta from '../components/Meta'

const about = () => {
    return (        
        <div>
            <Meta title='About' />
            <h1> About</h1>
            <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src="/videos/5.mp4" />
      </video>
        </div>
    )
}

export default about