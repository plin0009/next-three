import Head from "next/head";
import { Canvas } from "react-three-fiber";
import Cube from "../components/Cube";
import Field from "../components/Field";
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
        camera={{ position: [0, 0, -2], fov: 60 }}
        className={styles.container}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 35, 5]} intensity={2} />
        <Field position={[0, -3, 0]} />
        <Cube position={[-1.5, -0.5, 5]} />
        <Cube position={[1.5, 1, 6]} />
      </Canvas>
    </>
  );
};

export default Home;
