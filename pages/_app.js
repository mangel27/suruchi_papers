import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css'
import override from '@/styles/themes';
import { ThemeProvider,extendTheme } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  const theme = extendTheme(override);
   return (
     <ThemeProvider theme={theme}>
       <title>Suruchi Papers</title>
       <Header/>
       <Component {...pageProps} />
       <Footer/>
    </ThemeProvider>
  )
}
