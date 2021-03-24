import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 5rem;
  font-weight: 900;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>ABOUT</Heading>
        <h3>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</h3>
      </Hero>
    </>
  );
}
