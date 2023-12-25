import Layout from "@/components/Layout"
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextNProgress color="#a3e33a" startPosition={0.6} stopDelayMs={500} height={3}
      options={{ easing: 'ease', speed: 500, showSpinner: false }}
    /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
