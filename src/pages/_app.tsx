import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {ReactElement} from "react";
import {EmotionCache} from "@emotion/react";
import {NextComponentType, NextPageContext} from "next";
import {SidebarProvider} from "@/context/SidebarContext";
import {TAlphaTwelve, ThemeProviderWrapper} from "@/themes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CssBaseline} from "@mui/material";

declare module '@mui/material/styles' {
    export interface Theme extends TAlphaTwelve {
        default: 'AlphaTwelve';
    }
}

declare module '@mui/material' {
    export interface Theme extends TAlphaTwelve {
        default: 'AlphaTwelve';
    }
}

interface MyAppProps extends AppProps<ReactElement | null> {
  emotionCache?: EmotionCache;
  Component: NextComponentType<NextPageContext, unknown, unknown> & {
    getLayout: (page: ReactElement) => ReactElement;
  };
}

export default function App({ Component, pageProps }: MyAppProps) {

    const getLayout = Component?.getLayout ?? ((page) => page);

    return (<SidebarProvider>
        <ThemeProviderWrapper theme={'AlphaTwelve'}>
              {getLayout(<Component {...pageProps} />)}
            <ToastContainer />
            <CssBaseline />
        </ThemeProviderWrapper>
      </SidebarProvider>)

}
