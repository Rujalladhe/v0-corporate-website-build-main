// lib/data/brands.ts

export const brandCategories = [
  {
    category: "PLCs & Controllers",
    description: "Advanced programmable logic controllers and motion systems for high-performance automation.",
    brands: [
      { name: "Siemens", logo: "/logos/siemens.png", specialty: "SIMATIC PLCs & TIA Portal integrator" },
      { name: "Allen Bradley", logo: "/logos/allen-bradley.png", specialty: "ControlLogix & CompactLogix platforms" },
      { name: "Mitsubishi", logo: "/logos/Mitsubishi_Electric-Logo.wine.png", specialty: "FX5 PLCs with high-speed motion" },
      { name: "Schneider Electric", logo: "/logos/schneider.png", specialty: "Modicon PLCs & EcoStruxure software" },
      { name: "Delta", logo: "/logos/delta.png", specialty: "Cost-effective PLCs with powerful communication" },
    ],
  },
  {
    category: "Drives & Motors",
    description: "Variable frequency drives, servo systems, and industrial motors for precision control.",
    brands: [
      { name: "ABB", logo: "/logos/abb.png", specialty: "High-efficiency VFDs for heavy-duty industries" },
      { name: "Yaskawa", logo: "/logos/yaskawa.png", specialty: "Sigma servo drives & motors" },
      { name: "Danfoss", logo: "/logos/danfoss.png", specialty: "HVAC and process automation drives" },
      { name: "Crompton Greaves", logo: "/logos/crompton.png", specialty: "Robust industrial motors" },
    ],
  },
  {
    category: "Sensors & Vision",
    description: "Precision sensing, inspection, and machine vision technologies.",
    brands: [
      { name: "Omron", logo: "/logos/delta.jpeg", specialty: "Industrial sensors and safety relays" },
      { name: "Keyence", logo: "/logos/keyence.png", specialty: "High-end vision systems & laser sensors" },
      { name: "Sick", logo: "/logos/sick.png", specialty: "Safety scanners and LiDAR solutions" },
      { name: "Cognex", logo: "/logos/cognex.png", specialty: "AI-powered machine vision" },
    ],
  },
  {
    category: "Power & Protection",
    description: "Switchgear, breakers, and protection systems for reliable power distribution.",
    brands: [
      {
        name: "L&T",
        logo: "/logos/png-clipart-motoman-robotics-yaskawa-electric-corporation-robot-welding-robotics-blue-text-thumbnail.png",
        specialty: "Power breakers & MCC components",
      },
      { name: "Havells", logo: "/logos/havells.png", specialty: "Protection devices & industrial switchgear" },
      { name: "Legrand", logo: "/logos/legrand.png", specialty: "Modular switchboards & wiring accessories" },
      { name: "BCH Electric", logo: "/logos/bch.png", specialty: "Contactors, relays & motor starters" },
    ],
  },
];