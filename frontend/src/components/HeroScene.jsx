import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
    const mountRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const W = mount.clientWidth;
        const H = mount.clientHeight;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(W, H);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
        camera.position.z = 3.5;

        scene.add(new THREE.AmbientLight(0x00d4ff, 0.3));
        const p1 = new THREE.PointLight(0x00d4ff, 2, 10);
        p1.position.set(3, 3, 3);
        scene.add(p1);
        const p2 = new THREE.PointLight(0xa855f7, 1.5, 10);
        p2.position.set(-3, -2, 2);
        scene.add(p2);

        const matCore = new THREE.MeshPhongMaterial({
            color: 0x040d18, emissive: 0x003344,
            specular: 0x00d4ff, shininess: 120,
            transparent: true, opacity: 0.85,
        });
        const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), matCore);
        scene.add(core);

        const wire = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1.18, 1),
            new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.35 })
        );
        scene.add(wire);

        const wire2 = new THREE.Mesh(
            new THREE.IcosahedronGeometry(1.38, 1),
            new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.15 })
        );
        scene.add(wire2);

        const COUNT = 80;
        const positions = new Float32Array(COUNT * 3);
        const angles = new Float32Array(COUNT);
        const radii = new Float32Array(COUNT);
        const speeds = new Float32Array(COUNT);
        const tilts = new Float32Array(COUNT);

        for (let i = 0; i < COUNT; i++) {
            angles[i] = Math.random() * Math.PI * 2;
            radii[i] = 1.6 + Math.random() * 0.8;
            speeds[i] = 0.003 + Math.random() * 0.004;
            tilts[i] = (Math.random() - 0.5) * 0.6;
            positions[i * 3] = Math.cos(angles[i]) * radii[i];
            positions[i * 3 + 1] = tilts[i];
            positions[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
        }

        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.04, transparent: true, opacity: 0.7, sizeAttenuation: true });
        scene.add(new THREE.Points(particleGeo, particleMat));

        const onMouseMove = (e) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            };
        };
        window.addEventListener('mousemove', onMouseMove);

        const onResize = () => {
            const w = mount.clientWidth, h = mount.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', onResize);

        let frameId;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            core.rotation.x = t * 0.18;
            core.rotation.y = t * 0.24;
            wire.rotation.x = t * 0.12;
            wire.rotation.y = t * 0.20;
            wire2.rotation.x = -t * 0.08;
            wire2.rotation.y = -t * 0.14;

            const tx = mouseRef.current.y * 0.25;
            core.rotation.x += (tx - core.rotation.x) * 0.02;
            wire.rotation.x += (tx - wire.rotation.x) * 0.02;
            wire2.rotation.x += (tx - wire2.rotation.x) * 0.02;

            const pos = particleGeo.attributes.position.array;
            for (let i = 0; i < COUNT; i++) {
                angles[i] += speeds[i];
                pos[i * 3] = Math.cos(angles[i]) * radii[i];
                pos[i * 3 + 1] = tilts[i] + Math.sin(t * 0.5 + i) * 0.08;
                pos[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
            }
            particleGeo.attributes.position.needsUpdate = true;
            matCore.emissiveIntensity = 0.5 + Math.sin(t * 1.5) * 0.3;
            particleMat.opacity = 0.5 + Math.sin(t * 0.8) * 0.2;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: 420 }} />;
}