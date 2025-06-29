import "../common/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

fetch("https://white-board-1vx8gg8qh-pawansinghh01s-projects.vercel.app/")
  .then(res => res.json())
  .then(data => console.log(data));


import ModalManager from "@/common/components/modal/components/ModalManager";

import "react-toastify/dist/ReactToastify.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ThinkPad | Real-Time Whiteboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ToastContainer />
        <ModalManager />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
