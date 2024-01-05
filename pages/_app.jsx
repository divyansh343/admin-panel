import Layout from "@/components/Layout"
import '../styles/globals.css'
import { Toaster } from "react-hot-toast"


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextNProgress color="#a3e33a" startPosition={0.6} stopDelayMs={500} height={3}
      options={{ easing: 'ease', speed: 500, showSpinner: false }}
    /> */}
      <Layout>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
