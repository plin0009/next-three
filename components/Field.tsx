import { useRef } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { DoubleSide, Mesh, PlaneGeometry, Vector3 } from "three";

// make these props, use useMemo to store vectors
let widthSegments = 40;
let heightSegments = 20;

const heights = ((size: number): Vector3[] => {
  let vectors = [];
  let start = -(widthSegments / 2) * size;
  for (let x = 0; x <= widthSegments; x++) {
    for (let y = 0; y <= heightSegments; y++) {
      vectors.push(
        new Vector3(
          start + x * size,
          -4 + 2 * Math.cos((x + y) * 1) + Math.random() * 0.5,
          5 + y * size
        )
      );
    }
  }
  return vectors;
})(3);

const Field: React.FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();
  const pg = useRef<PlaneGeometry>();

  useFrame(() => {
    if (pg.current) {
      //pg.current.translate(0, 0, -0.1);
    }
  });

  return (
    <mesh ref={mesh} {...props}>
      <planeGeometry
        ref={pg}
        args={[15, 15, heightSegments, widthSegments]}
        vertices={heights}
      />
      <meshStandardMaterial
        attach="material"
        color="#ff3323"
        side={DoubleSide}
      />
    </mesh>
  );
};
export default Field;
