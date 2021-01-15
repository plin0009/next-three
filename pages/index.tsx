import Head from "next/head";
import { Canvas } from "react-three-fiber";
import Cube from "../components/Cube";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cubes</title>
      </Head>
      <Canvas
        concurrent
        gl={{ antialias: false }}
        camera={{ position: [0, 0, -7], fov: 60 }}
        className={styles.container}
      >
        <ambientLight />
        <pointLight position={[-1, 4, -1]} />
        <Cube position={[-1.5, -0.5, -1]} />
        <Cube position={[1.5, 1, 0]} />
      </Canvas>
    </>
  );
};

export default Home;
