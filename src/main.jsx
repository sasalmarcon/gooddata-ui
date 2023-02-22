import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-kit/styles/css/main.css";
import "@gooddata/sdk-ui-ext/styles/css/main.css";
import tigerFactory, {
  ContextDeferredAuthProvider,
  redirectToTigerAuthentication,
} from "@gooddata/sdk-backend-tiger";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
const backend = tigerFactory()
  .onHostname("https://analytics.fmclarity.com") // this should be the domain where the GoodData Cloud or GoodData.CN is hosted
  .withAuthentication(
    new ContextDeferredAuthProvider(redirectToTigerAuthentication)
  );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace="ao7xbilxgdvyf5bdgmh7d0otm3v2rqon">
        <App />
      </WorkspaceProvider>
    </BackendProvider>
  </React.StrictMode>
);
