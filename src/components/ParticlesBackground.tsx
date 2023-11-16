import { useCallback, useMemo } from "react";
import { useTheme } from "next-themes";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

import { darkParticlesConfig, lightParticlesConfig } from "@/config/particles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const { theme } = useTheme();

  const configTheme = useMemo(() => {
    return theme === "dark" ? darkParticlesConfig : lightParticlesConfig;
  }, [theme]);

  return (
    <div id="particle-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={configTheme}
        height="auto"
        width="auto"
      />
    </div>
  );
}
