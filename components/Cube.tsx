import { useRef } from "react";

import { MeshProps } from "react-three-fiber";
import { Mesh } from "three";

const Cube: React.FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();

  return (
    <mesh ref={mesh} scale={[1, 1, 1]} {...props}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Cube;
