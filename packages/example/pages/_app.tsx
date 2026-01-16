import { Sairin } from "@y1feng200156/sairin-core";

import sairinConfig from "../sairin.config";

// import theme style
import "@y1feng200156/sairin-theme-minimal/style.css";

export const sairin = new Sairin(sairinConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
