import { useRef, useEffect } from "react";
import * as THREE from "three";

const ColorSparks = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const sparkCount = 500;
    const positions = new Float32Array(sparkCount * 3);
    const colors = new Float32Array(sparkCount * 3);
    const velocities = [];

    for (let i = 0; i < sparkCount; i++) {
      // Initial position near bottom center
      positions[i * 3 + 0] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = -3 + Math.random() * 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      // Multicolor RGB
      colors[i * 3 + 0] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();

      // Random upward & radial velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.02 + Math.random() * 0.03;
      const upward = 0.02 + Math.random() * 0.05;
      velocities.push({
        x: Math.cos(angle) * speed,
        y: upward,
        z: Math.sin(angle) * speed,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const textureLoader = new THREE.TextureLoader();
    const sparkTexture = textureLoader.load(
      "https://threejs.org/examples/textures/sprites/spark1.png"
    );

    const material = new THREE.PointsMaterial({
      size: 0.15,
      map: sparkTexture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sparks = new THREE.Points(geometry, material);
    scene.add(sparks);

    const animate = () => {
      const pos = geometry.attributes.position.array;

      for (let i = 0; i < sparkCount; i++) {
        const idx = i * 3;

        // Update position
        pos[idx] += velocities[i].x;
        pos[idx + 1] += velocities[i].y;
        pos[idx + 2] += velocities[i].z;

        // Apply gravity
        velocities[i].y -= 0.0003;

        // Respawn spark if it's too high/low or randomly
        if (pos[idx + 1] > 6 || pos[idx + 1] < -6 || Math.random() < 0.002) {
          pos[idx] = (Math.random() - 0.5) * 4;
          pos[idx + 1] = -3 + Math.random() * 0.5;
          pos[idx + 2] = (Math.random() - 0.5) * 4;

          const angle = Math.random() * Math.PI * 2;
          const speed = 0.02 + Math.random() * 0.03;
          const upward = 0.02 + Math.random() * 0.05;
          velocities[i] = {
            x: Math.cos(angle) * speed,
            y: upward,
            z: Math.sin(angle) * speed,
          };
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ColorSparks;
