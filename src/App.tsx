import { useState } from "react";
import { useMessageData } from "./hooks/useMessageData";
import ErrorMessage from "./Errors";
import { ElementConfigContext } from "./context/context";
import Element from "./components/Element";
import { useGetAccessToken } from "./hooks/useGetAccessToken";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState<string | undefined>();

  const { messageData } = useMessageData();
  useGetAccessToken(setAccessToken, messageData, accessToken);

  if (error) return <ErrorMessage message={error} />;

  return (
    <ElementConfigContext.Provider
      value={{ messageData, loading, setLoading, error, setError }}
    >
      <Element />
    </ElementConfigContext.Provider>
  );
}

export default App;
