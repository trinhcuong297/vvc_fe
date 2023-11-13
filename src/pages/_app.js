import { StickyNavbar } from '@/components/navbar';
import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <StickyNavbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}