import { useRef, useState } from "react";

import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh, Vector3 } from "three";

// can turn these into props

const speed = 0.05;
const tolerance = 0.2;
const normalScale = 1;
const hoveredScale = 2;
const normalColor: [number, number, number] = [25, 232, 170];
const hoveredColor: [number, number, number] = normalColor.map((n) =>
  Math.min(255, n + 50)
) as [number, number, number];

const normalRotationSpeed = 0.005;
const hoveredRotationSpeed = 0.015;

const Cube: React.FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh>();
  const [desiredScale, setDesiredScale] = useState<number>(1);
  const [color, setColor] = useState<[number, number, number]>(normalColor);

  const [rotationSpeed, setRotationSpeed] = useState<number>(
    normalRotationSpeed
  );

  useFrame(() => {
    if (!mesh.current) {
      return;
    }
    mesh.current.rotation.x += rotationSpeed;
    mesh.current.rotation.y += rotationSpeed;
    if (mesh.current.scale.x - desiredScale < -tolerance) {
      mesh.current.scale.add(new Vector3(speed, speed, speed));
    } else if (mesh.current.scale.x - desiredScale > tolerance) {
      mesh.current.scale.add(new Vector3(-speed, -speed, -speed));
    }
  });

  return (
    <mesh
      ref={mesh}
      {...props}
      onPointerOver={() => {
        setDesiredScale(hoveredScale);
        setColor(hoveredColor);
        setRotationSpeed(hoveredRotationSpeed);
      }}
      onPointerOut={() => {
        setDesiredScale(normalScale);
        setColor(normalColor);
        setRotationSpeed(normalRotationSpeed);
      }}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={`rgb(${color.join(", ")})`} />
    </mesh>
  );
};

export default Cube;
