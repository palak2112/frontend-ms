import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";

import { Offline, Online } from "react-detect-offline";
import { useEffect } from "react";
import { getDocumentsByRequestId } from "api/requestApi";
import { updateDocument } from "api/documentApi";
import { documentsUpload } from "api/uploadApi";

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  //Old Code
  //write the ArrayBuffer to a blob, and you're done
  //var bb = new BlobBuilder();
  //bb.append(ab);
  //return bb.getBlob(mimeString);

  //New Code
  return new Blob([ab], { type: mimeString });
}

const handleNetworkChange = async () => {
  let flag = false;
  for (const [key, value] of Object.entries(localStorage)) {
    console.log(`${key}: ${value}`);
    if (key.startsWith("doc")) {
      flag = true;
      // Upload file to AWS
      const blob = dataURItoBlob(localStorage.getItem(key));
      const fd = new FormData();

      fd.append("file", blob, blob.name);

      const res = await documentsUpload(fd);

      console.log("uploaded url", res.data.data);

      const documentDetail = await getDocumentsByRequestId(key.split("-")[1]);
      const payload = {
        data: {},
      };

      console.log("docs", documentDetail.data.data.data);
      let count = 0;
      for (const doc_key of Object.keys(documentDetail.data.data.data)) {
        if (count == key.split("-")[2]) {
          payload["data"][doc_key] = res.data.data;
        } else {
          payload["data"][doc_key] = documentDetail.data.data.data[doc_key];
        }
        count++;
      }

      console.log({ payload });
      const docDetail = await updateDocument(
        payload,
        documentDetail.data.data.id
      );

      console.log("updated doc", docDetail.data.data);

      if (docDetail.status === 200) localStorage.removeItem(key);
    }
  }
  if (flag) window.location.reload();
};

const App = () => {
  useEffect(() => {
    handleNetworkChange();
  }, []);

  return (
    <div>
      <Offline
        onChange={() => {
          handleNetworkChange();
        }}
      ></Offline>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <Suspense fallback="loading...">
            <HashRouter>
              <Switch>
                <Route path={`/auth`} component={AuthLayout} />
                <Route path={`/admin`} component={AdminLayout} />
                <Route path={`/rtl`} component={RTLLayout} />
                <Redirect from="/" to="/admin" />
              </Switch>
            </HashRouter>
          </Suspense>
        </React.StrictMode>
      </ChakraProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
