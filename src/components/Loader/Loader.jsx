import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => (
  <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999',
    }}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor="#c0efff"
    color="#949293"
  />
);
