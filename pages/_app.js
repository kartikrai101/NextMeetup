import Layout from '../components/layout/Layout'; // importing the Layout component

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (// wrapping the Component component into the Layout component! 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
