
import { useEffect, useState } from "react";

interface RazorpayScriptProps {
  onLoad?: () => void;
  onError?: () => void;
}

const RazorpayScript = ({ onLoad, onError }: RazorpayScriptProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setLoaded(true);
      if (onLoad) onLoad();
    };
    script.onerror = () => {
      if (onError) onError();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onLoad, onError]);

  return null;
};

export default RazorpayScript;
