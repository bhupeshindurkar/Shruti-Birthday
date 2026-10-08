import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Sparkles, Wind, Flame, RotateCw, Heart } from 'lucide-react';

interface Interactive3DCakeProps {
  onWishMade?: () => void;
}

export const Interactive3DCake: React.FC<Interactive3DCakeProps> = ({ onWishMade }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [candlesLit, setCandlesLit] = useState(true);
  const [cakeStyle, setCakeStyle] = useState<'princess' | 'champagne' | 'berry'>('princess');
  const [wishCount, setWishCount] = useState(0);

  // References to dynamic 3D elements
  const flamesRef = useRef<THREE.Mesh[]>([]);
  const lightsRef = useRef<THREE.PointLight[]>([]);
  const cakeGroupRef = useRef<THREE.Group | null>(null);
  const cakeTiersRef = useRef<THREE.Mesh[]>([]);

  // Update cake materials when style changes
  useEffect(() => {
    if (cakeTiersRef.current.length < 2) return;

    let baseColor = 0xffe4ec; // soft pink
    let trimColor = 0xffffff;

    if (cakeStyle === 'champagne') {
      baseColor = 0xfff8eb; // ivory champagne
      trimColor = 0xf5d061; // gold
    } else if (cakeStyle === 'berry') {
      baseColor = 0xf5d0fe; // lavender berry
      trimColor = 0xffe4e6;
    }

    const baseMat = new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness: 0.35,
      metalness: 0.05,
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: trimColor,
      roughness: 0.2,
      metalness: cakeStyle === 'champagne' ? 0.6 : 0.1,
    });

    cakeTiersRef.current.forEach((mesh, index) => {
      mesh.material = index % 2 === 0 ? baseMat : trimMat;
    });
  }, [cakeStyle]);

  // Update candle flames visibility
  useEffect(() => {
    flamesRef.current.forEach((flame) => {
      flame.visible = candlesLit;
    });
    lightsRef.current.forEach((light) => {
      light.intensity = candlesLit ? 1.2 : 0;
    });
  }, [candlesLit]);

  // Three.js 3D Scene setup
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 7.5);
    camera.lookAt(0, 0.6, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      mount.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5f7, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xfce7f3, 1.0);
    rimLight.position.set(-6, 4, -4);
    scene.add(rimLight);

    // Cake Group
    const cakeGroup = new THREE.Group();
    scene.add(cakeGroup);
    cakeGroupRef.current = cakeGroup;

    // Pedestal / Marble Cake Stand
    const standMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.05,
    });
    const standGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf3ca65,
      roughness: 0.25,
      metalness: 0.8,
    });

    const plateGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.15, 48);
    const plate = new THREE.Mesh(plateGeo, standMat);
    plate.position.y = -0.05;
    plate.receiveShadow = true;
    cakeGroup.add(plate);

    const plateGoldRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.42, 0.04, 16, 48),
      standGoldMat
    );
    plateGoldRing.rotation.x = Math.PI / 2;
    plateGoldRing.position.y = -0.05;
    cakeGroup.add(plateGoldRing);

    const standStemGeo = new THREE.CylinderGeometry(0.5, 0.9, 0.7, 32);
    const standStem = new THREE.Mesh(standStemGeo, standMat);
    standStem.position.y = -0.45;
    cakeGroup.add(standStem);

    const standBaseGeo = new THREE.CylinderGeometry(1.5, 1.6, 0.15, 32);
    const standBase = new THREE.Mesh(standBaseGeo, standGoldMat);
    standBase.position.y = -0.85;
    cakeGroup.add(standBase);

    // Tier 1: Bottom Layer
    const tier1Geo = new THREE.CylinderGeometry(1.85, 1.85, 1.1, 48);
    const frostingMat = new THREE.MeshStandardMaterial({
      color: 0xffe4ec,
      roughness: 0.35,
      metalness: 0.05,
    });
    const tier1 = new THREE.Mesh(tier1Geo, frostingMat);
    tier1.position.y = 0.55;
    tier1.castShadow = true;
    tier1.receiveShadow = true;
    cakeGroup.add(tier1);
    cakeTiersRef.current.push(tier1);

    // Tier 2: Top Layer
    const tier2Geo = new THREE.CylinderGeometry(1.25, 1.25, 0.95, 48);
    const tier2 = new THREE.Mesh(tier2Geo, frostingMat);
    tier2.position.y = 1.55;
    tier2.castShadow = true;
    tier2.receiveShadow = true;
    cakeGroup.add(tier2);
    cakeTiersRef.current.push(tier2);

    // Cream Rosettes around Base & Top
    const rosetteGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const creamMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.05,
    });
    const goldPearlMat = new THREE.MeshStandardMaterial({
      color: 0xf3ca65,
      roughness: 0.2,
      metalness: 0.85,
    });

    // Rosettes on Tier 1 base
    const rosetteCount1 = 20;
    for (let i = 0; i < rosetteCount1; i++) {
      const angle = (i / rosetteCount1) * Math.PI * 2;
      const x = Math.cos(angle) * 1.85;
      const z = Math.sin(angle) * 1.85;
      const rosette = new THREE.Mesh(rosetteGeo, i % 2 === 0 ? creamMat : goldPearlMat);
      rosette.position.set(x, 0.1, z);
      cakeGroup.add(rosette);
    }

    // Rosettes on Tier 2 base
    const rosetteCount2 = 16;
    for (let i = 0; i < rosetteCount2; i++) {
      const angle = (i / rosetteCount2) * Math.PI * 2;
      const x = Math.cos(angle) * 1.25;
      const z = Math.sin(angle) * 1.25;
      const rosette = new THREE.Mesh(rosetteGeo, i % 3 === 0 ? goldPearlMat : creamMat);
      rosette.position.set(x, 1.1, z);
      cakeGroup.add(rosette);
    }

    // Golden Pearl Sprinkles on top
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2;
      const r = 0.6 + (i % 3) * 0.2;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const sprinkle = new THREE.Mesh(
        new THREE.SphereGeometry(0.045, 8, 8),
        goldPearlMat
      );
      sprinkle.position.set(x, 2.05, z);
      cakeGroup.add(sprinkle);
    }

    // 21 Cake Topper / Birthday Candles
    const candleGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.65, 16);
    const candleMat = new THREE.MeshStandardMaterial({
      color: 0xfff0f5,
      roughness: 0.2,
      metalness: 0.3,
    });

    const flameGeo = new THREE.ConeGeometry(0.07, 0.22, 16);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa726 });

    flamesRef.current = [];
    lightsRef.current = [];

    // Candle positions (arranged gracefully for 21 celebration)
    const candlePositions = [
      { x: -0.35, z: 0 },
      { x: 0.35, z: 0 },
      { x: 0, z: 0.35 },
    ];

    candlePositions.forEach((pos) => {
      const candle = new THREE.Mesh(candleGeo, candleMat);
      candle.position.set(pos.x, 2.35, pos.z);
      cakeGroup.add(candle);

      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(pos.x, 2.76, pos.z);
      cakeGroup.add(flame);
      flamesRef.current.push(flame);

      const candleLight = new THREE.PointLight(0xffa726, 1.2, 4);
      candleLight.position.set(pos.x, 2.8, pos.z);
      cakeGroup.add(candleLight);
      lightsRef.current.push(candleLight);
    });

    // Golden "21" Accent Topper Ribbon
    const ring21Mat = new THREE.MeshStandardMaterial({
      color: 0xf5d061,
      roughness: 0.25,
      metalness: 0.85,
    });
    const ring21 = new THREE.Mesh(
      new THREE.TorusGeometry(0.45, 0.045, 16, 32),
      ring21Mat
    );
    ring21.position.set(0, 2.5, -0.2);
    cakeGroup.add(ring21);

    // Mouse Drag Rotation Controls
    let isDragging = false;
    let previousMouseX = 0;
    let rotationVelocity = 0.005;

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      previousMouseX = clientX;
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - previousMouseX;
      previousMouseX = clientX;

      if (cakeGroupRef.current) {
        cakeGroupRef.current.rotation.y += deltaX * 0.01;
      }
      rotationVelocity = deltaX * 0.003;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onMouseDown, { passive: true });
    window.addEventListener('touchmove', onMouseMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) * 0.001;

      // Inertial auto-rotation
      if (cakeGroupRef.current) {
        if (!isDragging) {
          cakeGroupRef.current.rotation.y += 0.006 + rotationVelocity * 0.5;
          rotationVelocity *= 0.95; // damping
        }

        // Candle flame flicker
        flamesRef.current.forEach((flame, idx) => {
          if (flame.visible) {
            const flicker = Math.sin(time * 12 + idx * 2) * 0.12;
            flame.scale.set(1 + flicker, 1 + flicker * 1.5, 1 + flicker);
            flame.position.y = 2.76 + flicker * 0.02;
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!mount || !renderer) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onMouseDown);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', handleResize);

      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  const handleToggleCandles = () => {
    if (candlesLit) {
      // Blow out candles
      setCandlesLit(false);
      setWishCount((prev) => prev + 1);

      // Trigger celebration confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#fbcfe8', '#f472b6', '#fbbf24', '#ffffff', '#e0e7ff'],
        disableForReducedMotion: true,
      });

      if (onWishMade) onWishMade();
    } else {
      // Relight candles
      setCandlesLit(true);
    }
  };

  const handleSpinCake = () => {
    if (cakeGroupRef.current) {
      cakeGroupRef.current.rotation.y += Math.PI * 0.5;
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel p-4 md:p-6 transition-all duration-300">
      {/* Header bar inside the 3D card */}
      <div className="flex items-center justify-between pb-3 border-b border-rose-100/80">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#a84462]">
            Interactive 3D Centerpiece
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#451422]">
            Shruti&apos;s 21st Birthday Cake
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-rose-50 text-[#8c2545] font-medium border border-rose-200/60">
            {candlesLit ? '🔥 Candles Lit' : '✨ Wish Granted!'}
          </span>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full h-[320px] md:h-[380px] cursor-grab active:cursor-grabbing flex items-center justify-center">
        <div ref={mountRef} className="w-full h-full" />

        {/* Floating guidance overlay */}
        <div className="absolute bottom-3 left-4 pointer-events-none text-xs text-[#8c3a53]/80 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-sm flex items-center gap-1.5">
          <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Drag to inspect in 360°</span>
        </div>

        {wishCount > 0 && !candlesLit && (
          <div className="absolute top-4 inset-x-0 mx-auto w-max bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-rose-200 text-xs font-medium text-[#8c2545] flex items-center gap-2 animate-bounce">
            <Heart className="w-3.5 h-3.5 fill-[#d43d68] text-[#d43d68]" />
            <span>A birthday wish was made for Shruti!</span>
          </div>
        )}
      </div>

      {/* Interactive Controls & Sizing/Style Bar (matching Dmitry Krasnov's UI in the video) */}
      <div className="mt-3 pt-3 border-t border-rose-100/70 flex flex-wrap items-center justify-between gap-3">
        {/* Style selector pills */}
        <div className="flex items-center gap-1.5 p-1 bg-rose-50/80 rounded-xl border border-rose-100">
          <button
            onClick={() => setCakeStyle('princess')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              cakeStyle === 'princess'
                ? 'bg-white text-[#701a34] shadow-sm font-semibold'
                : 'text-[#964760] hover:text-[#701a34]'
            }`}
          >
            Princess Rosette
          </button>
          <button
            onClick={() => setCakeStyle('champagne')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              cakeStyle === 'champagne'
                ? 'bg-white text-[#701a34] shadow-sm font-semibold'
                : 'text-[#964760] hover:text-[#701a34]'
            }`}
          >
            Champagne Gold
          </button>
          <button
            onClick={() => setCakeStyle('berry')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              cakeStyle === 'berry'
                ? 'bg-white text-[#701a34] shadow-sm font-semibold'
                : 'text-[#964760] hover:text-[#701a34]'
            }`}
          >
            Berry Blossom
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSpinCake}
            title="Rotate 90 degrees"
            className="p-2 rounded-xl bg-white/80 hover:bg-white text-[#701a34] border border-rose-200/70 shadow-sm transition-transform active:scale-95"
            aria-label="Rotate cake"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleToggleCandles}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all shadow-md active:scale-95 ${
              candlesLit
                ? 'bg-gradient-to-r from-[#b33355] to-[#8c2545] text-white hover:opacity-95'
                : 'bg-gradient-to-r from-[#d97706] to-[#b45309] text-white hover:opacity-95'
            }`}
          >
            {candlesLit ? (
              <>
                <Wind className="w-4 h-4" />
                <span>Blow Out Candles 💨</span>
              </>
            ) : (
              <>
                <Flame className="w-4 h-4" />
                <span>Relight Candles ✨</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Subtle details bar matching video's specs (15 cm • 10 pax • 21 Years) */}
      <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-[#914960]">
        <span>✨ Handcrafted 2-Tier Celebration Cake</span>
        <div className="flex items-center gap-3 font-mono">
          <span>21 CANDLES</span>
          <span>·</span>
          <span>100% PURE JOY</span>
          <span>·</span>
          <span>22.10.2026</span>
        </div>
      </div>
    </div>
  );
};
