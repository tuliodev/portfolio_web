import { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";

import Particles from "react-tsparticles"; // Verifique se está utilizando a biblioteca correta
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";

import { darkParticlesConfig, lightParticlesConfig } from "@/config/particles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const { theme } = useTheme();

  const configTheme = useRef<ISourceOptions>(darkParticlesConfig);

  useEffect(() => {
    if (theme == "dark") {
      configTheme.current = lightParticlesConfig;
    } else {
      configTheme.current = darkParticlesConfig;
    }
  }, [theme]);

  const config = useMemo(() => configTheme.current, [configTheme.current]);

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
