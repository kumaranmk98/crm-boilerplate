import React from 'react';

export default function useInternetConnection() {
  const [isOffline, setIsOffline] = React.useState(false);
  React.useEffect(() => {
    const onOnline = () => {
      setIsOffline(false);
    };
    const onOffline = () => {
      setIsOffline(true);
    };
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    window.onerror = () => {
      return false;
    };
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);
  return isOffline;
}
