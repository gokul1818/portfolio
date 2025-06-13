import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StrangePortal = () => {
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

    const particleCount = 1000;
    const radius = 2;
    const positions = new Float32Array(particleCount * 3);
    const speeds = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const offset = (Math.random() - 0.5) * 0.2;

      positions[i * 3 + 0] = Math.cos(angle) * (radius + offset);
      positions[i * 3 + 1] = Math.sin(angle) * (radius + offset);
      positions[i * 3 + 2] = 0;

      speeds.push(0.01 + Math.random() * 0.02); // rotational speed
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sparkTexture = new THREE.TextureLoader().load(
      'https://threejs.org/examples/textures/sprites/spark1.png'
    );

    const material = new THREE.PointsMaterial({
      size: 0.1,
      map: sparkTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      color: 0xff9900,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      const pos = geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const x = pos[i * 3];
        const y = pos[i * 3 + 1];
        const speed = speeds[i];

        const angle = Math.atan2(y, x) + speed;
        const r = Math.sqrt(x * x + y * y);

        pos[i * 3] = Math.cos(angle) * r;
        pos[i * 3 + 1] = Math.sin(angle) * r;
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

export default StrangePortal;
