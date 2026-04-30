import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create particle grid
    const GRID = 30;
    const SPACING = 4;
    const count = GRID * GRID;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const baseColor = new THREE.Color(0.18, 0.18, 0.22);
    const accentColor = new THREE.Color(0.45, 0.65, 0.0);

    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        const idx = (i * GRID + j);
        const x = (i - GRID / 2) * SPACING;
        const y = (j - GRID / 2) * SPACING;
        const z = 0;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        originalPositions[idx * 3] = x;
        originalPositions[idx * 3 + 1] = y;
        originalPositions[idx * 3 + 2] = z;
        colors[idx * 3] = baseColor.r;
        colors[idx * 3 + 1] = baseColor.g;
        colors[idx * 3 + 2] = baseColor.b;
        sizes[idx] = 1.0;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Line connections
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];
    const connectionThreshold = SPACING * 1.5;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionThreshold) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          lineColors.push(0.08, 0.08, 0.1, 0.08, 0.08, 0.1);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const pointMaterial = new THREE.PointsMaterial({
      size: 1.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, pointMaterial);
    scene.add(points);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation
    const raycaster = new THREE.Raycaster();
    const mouse3D = new THREE.Vector2();
    let animFrameId;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      if (prefersReducedMotion.current) {
        renderer.render(scene, camera);
        return;
      }

      mouse3D.set(mouseRef.current.x, mouseRef.current.y);
      raycaster.setFromCamera(mouse3D, camera);
      const planeNormal = new THREE.Vector3(0, 0, 1);
      const plane = new THREE.Plane(planeNormal, 0);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);

      const posAttr = geometry.attributes.position;
      const colAttr = geometry.attributes.color;
      const lineColAttr = lineGeometry.attributes.color;
      const linePosAttr = lineGeometry.attributes.position;

      const INFLUENCE_RADIUS = 18;
      const PULL_STRENGTH = 0.02;
      const RETURN_SPEED = 0.01;

      for (let i = 0; i < count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        let cx = posAttr.array[i * 3];
        let cy = posAttr.array[i * 3 + 1];

        const dx = intersectPoint.x - ox;
        const dy = intersectPoint.y - oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS) {
          const force = 1 - dist / INFLUENCE_RADIUS;
          const pull = force * force * PULL_STRENGTH;
          cx += (intersectPoint.x - cx) * pull;
          cy += (intersectPoint.y - cy) * pull;
          posAttr.array[i * 3 + 2] = force * 3;

          const t = force;
          colAttr.array[i * 3] = baseColor.r + (accentColor.r - baseColor.r) * t;
          colAttr.array[i * 3 + 1] = baseColor.g + (accentColor.g - baseColor.g) * t;
          colAttr.array[i * 3 + 2] = baseColor.b + (accentColor.b - baseColor.b) * t;
        } else {
          cx += (ox - cx) * RETURN_SPEED;
          cy += (oy - cy) * RETURN_SPEED;
          posAttr.array[i * 3 + 2] *= 0.95;

          colAttr.array[i * 3] += (baseColor.r - colAttr.array[i * 3]) * 0.05;
          colAttr.array[i * 3 + 1] += (baseColor.g - colAttr.array[i * 3 + 1]) * 0.05;
          colAttr.array[i * 3 + 2] += (baseColor.b - colAttr.array[i * 3 + 2]) * 0.05;
        }

        posAttr.array[i * 3] = cx;
        posAttr.array[i * 3 + 1] = cy;
      }

      // Update line positions and colors
      let lineIdx = 0;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = originalPositions[i * 3] - originalPositions[j * 3];
          const dy = originalPositions[i * 3 + 1] - originalPositions[j * 3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionThreshold) {
            linePosAttr.array[lineIdx * 6] = posAttr.array[i * 3];
            linePosAttr.array[lineIdx * 6 + 1] = posAttr.array[i * 3 + 1];
            linePosAttr.array[lineIdx * 6 + 2] = posAttr.array[i * 3 + 2];
            linePosAttr.array[lineIdx * 6 + 3] = posAttr.array[j * 3];
            linePosAttr.array[lineIdx * 6 + 4] = posAttr.array[j * 3 + 1];
            linePosAttr.array[lineIdx * 6 + 5] = posAttr.array[j * 3 + 2];

            // Color lines near cursor
            const mx = (posAttr.array[i * 3] + posAttr.array[j * 3]) / 2;
            const my = (posAttr.array[i * 3 + 1] + posAttr.array[j * 3 + 1]) / 2;
            const mdx = intersectPoint.x - mx;
            const mdy = intersectPoint.y - my;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            const t = Math.max(0, 1 - mdist / INFLUENCE_RADIUS);

            lineColAttr.array[lineIdx * 6] = 0.15 + accentColor.r * t * 0.5;
            lineColAttr.array[lineIdx * 6 + 1] = 0.15 + accentColor.g * t * 0.5;
            lineColAttr.array[lineIdx * 6 + 2] = 0.18 + accentColor.b * t * 0.2;
            lineColAttr.array[lineIdx * 6 + 3] = 0.15 + accentColor.r * t * 0.5;
            lineColAttr.array[lineIdx * 6 + 4] = 0.15 + accentColor.g * t * 0.5;
            lineColAttr.array[lineIdx * 6 + 5] = 0.18 + accentColor.b * t * 0.2;

            lineIdx++;
          }
        }
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}