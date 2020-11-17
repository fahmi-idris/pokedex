import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Regular';
    font-style: normal;
    src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat-Medium';
    font-style: normal;
    src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat-SemiBold';
    font-style: normal;
    src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    font-style: normal;
    src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }
`;
