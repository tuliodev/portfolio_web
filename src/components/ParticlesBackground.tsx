import { useCallback, useMemo } from "react";

import Particles from "react-tsparticles"; // Verifique se está utilizando a biblioteca correta
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

import { particlesConfig } from "@/config/particles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const config = useMemo(() => particlesConfig, []);

  return (
    <div id="particle-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={config}
        height="auto"
        width="auto"
      />
    </div>
  );
}
