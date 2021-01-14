import Head from "next/head";
import { Canvas } from "react-three-fiber";
import Cube from "../components/Cube";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cubes</title>
      </Head>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[-3, -0.5, -1]} />
        <Cube position={[3, 1, 0]} />
      </Canvas>
    </>
  );
};

export default Home;
