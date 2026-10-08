import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeDreamscape
 * Recreates the ethereal 3D pastel dreamscape from Dmitry Krasnov's video:
 * floating pearl spheres, golden ribbons, soft confections, and smooth parallax.
 */
export const ThreeDreamscape: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfff6f8, 0.025);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    // Renderer
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);
    } catch {
      // Fallback gracefully if WebGL is unavailable
      return;
    }

    // Lighting (Warm Key, Cool Lavender Rim, Golden Accents)
    const ambientLight = new THREE.AmbientLight(0xfff0f5, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe6eb, 1.8);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xdbeafe, 1.2);
    rimLight.position.set(-10, -6, -5);
    scene.add(rimLight);

    const goldPoint = new THREE.PointLight(0xffdf9e, 1.5, 30);
    goldPoint.position.set(0, 4, 8);
    scene.add(goldPoint);

    // Materials Palette matching the video (candy pastels, pearls, champagne gold)
    const sphereMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xfbcfe8, // soft blush
        roughness: 0.18,
        metalness: 0.08,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xfef3c7, // champagne ivory
        roughness: 0.22,
        metalness: 0.15,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xe0e7ff, // lavender mist
        roughness: 0.25,
        metalness: 0.05,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xfce7f3, // rose quartz
        roughness: 0.15,
        metalness: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf5d061, // subtle polished gold
        roughness: 0.28,
        metalness: 0.85,
      }),
    ];

    // Floating 3D Objects Group
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    interface FloatingItem {
      mesh: THREE.Mesh;
      initialY: number;
      speedY: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      amplitude: number;
      phase: number;
    }

    const items: FloatingItem[] = [];

    // 1. Floating Pearls & Soft Spheres
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
    const sphereCount = 28;

    for (let i = 0; i < sphereCount; i++) {
      const mat = sphereMaterials[i % sphereMaterials.length];
      const mesh = new THREE.Mesh(sphereGeo, mat);

      const scale = 0.25 + Math.random() * 0.75;
      mesh.scale.set(scale, scale, scale);

      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 24;
      const z = (Math.random() - 0.5) * 16 - 2;

      mesh.position.set(x, y, z);
      floatingGroup.add(mesh);

      items.push({
        mesh,
        initialY: y,
        speedY: 0.4 + Math.random() * 0.5,
        rotSpeedX: (Math.random() - 0.5) * 0.01,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
        amplitude: 0.6 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // 2. Floating Golden Ribbon Swirls (Torus Knots & Helixes like in the video)
    const ribbonGeo = new THREE.TorusKnotGeometry(1.6, 0.22, 100, 16, 2, 3);
    const goldRibbonMat = new THREE.MeshStandardMaterial({
      color: 0xf3ca65,
      roughness: 0.25,
      metalness: 0.75,
    });

    const ribbonMesh1 = new THREE.Mesh(ribbonGeo, goldRibbonMat);
    ribbonMesh1.scale.set(0.7, 0.7, 0.7);
    ribbonMesh1.position.set(-10, 5, -4);
    floatingGroup.add(ribbonMesh1);
    items.push({
      mesh: ribbonMesh1,
      initialY: 5,
      speedY: 0.3,
      rotSpeedX: 0.004,
      rotSpeedY: 0.007,
      rotSpeedZ: 0.002,
      amplitude: 1.0,
      phase: 0.5,
    });

    const ribbonMesh2 = new THREE.Mesh(ribbonGeo, sphereMaterials[0]);
    ribbonMesh2.scale.set(0.6, 0.6, 0.6);
    ribbonMesh2.position.set(11, -4, -6);
    floatingGroup.add(ribbonMesh2);
    items.push({
      mesh: ribbonMesh2,
      initialY: -4,
      speedY: 0.25,
      rotSpeedX: -0.003,
      rotSpeedY: 0.005,
      rotSpeedZ: -0.002,
      amplitude: 0.8,
      phase: 2.1,
    });

    // 3. Floating Candy Discs & Rosettes (Torus & Cylinders)
    const donutGeo = new THREE.TorusGeometry(0.8, 0.3, 16, 32);
    for (let i = 0; i < 6; i++) {
      const dMesh = new THREE.Mesh(donutGeo, sphereMaterials[i % 3]);
      const dScale = 0.35 + Math.random() * 0.3;
      dMesh.scale.set(dScale, dScale, dScale);
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 20;
      const z = -2 + (Math.random() - 0.5) * 8;
      dMesh.position.set(x, y, z);
      floatingGroup.add(dMesh);

      items.push({
        mesh: dMesh,
        initialY: y,
        speedY: 0.35,
        rotSpeedX: 0.008,
        rotSpeedY: 0.012,
        rotSpeedZ: 0.005,
        amplitude: 0.7,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Parallax mouse tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      targetMouseX = (clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    // Window Resize Handling
    const onResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Mouse Parallax Lerping
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      if (!prefersReducedMotion) {
        camera.position.x = currentMouseX * 1.8;
        camera.position.y = -currentMouseY * 1.4;
        camera.lookAt(0, 0, 0);

        // Animate each floating element
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          item.mesh.position.y =
            item.initialY + Math.sin(elapsedTime * item.speedY + item.phase) * item.amplitude;

          item.mesh.rotation.x += item.rotSpeedX;
          item.mesh.rotation.y += item.rotSpeedY;
          item.mesh.rotation.z += item.rotSpeedZ;
        }

        floatingGroup.rotation.y = Math.sin(elapsedTime * 0.15) * 0.05;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('resize', onResize);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      sphereGeo.dispose();
      ribbonGeo.dispose();
      donutGeo.dispose();
      sphereMaterials.forEach((m) => m.dispose());
      goldRibbonMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        background: 'linear-gradient(135deg, #fff7f8 0%, #fdecef 50%, #fffaf5 100%)',
      }}
    />
  );
};
