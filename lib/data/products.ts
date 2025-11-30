export interface Product {
  id: string
  name: string
  fullName: string
  description: string
  shortDescription?: string
  image: string
  features: string[]
  applications: string[]
  compatibleBrands?: string[]
  types?: string[]
  fullDescription?: string
}

export const products: Product[] = [
  {
    id: "mcc-panel",
    name: "MCC Panel",
    fullName: "Motor Control Center Panel",
    description: "Used in industrial power distribution. Offers simple operation and low maintenance.",
    shortDescription: "Used in industrial power distribution. Offers simple operation and low maintenance.",
    fullDescription:
      "Motor Control Center (MCC) panels are used for power distribution and motor control in industries. They are designed to house starters, relays, and breakers in a modular fashion.",
    image: "/mcc.jpg",
    features: [
      "Houses starters, relays, breakers",
      "Modular design",
      "Works under extreme temperature variations",
      "Long lifetime",
    ],
    applications: ["Refineries", "Chemical plants", "Pharma industries", "Manufacturing units"],
    compatibleBrands: ["Siemens", "ABB", "L&T", "Schneider"],
  },
  {
    id: "pcc-panel",
    name: "PCC Panel",
    fullName: "Power Control Center Panel",
    description: "Controls major power distribution with high reliability.",
    shortDescription: "Controls major power distribution with high reliability and safety.",
    fullDescription:
      "Power Control Center (PCC) panels are the heart of any electrical system, controlling major power distribution with high reliability and safety standards.",
    image: "/pcc.jpg",
    features: ["Handles high loads", "Long working life", "No maintenance", "Robust and safe"],
    applications: ["Manufacturing industries", "Automotive", "Refineries", "Engineering units"],
    compatibleBrands: ["Siemens", "ABB", "L&T", "Schneider"],
  },
  {
    id: "plc-panel",
    name: "PLC Panel",
    fullName: "Programmable Logic Controller Panel",
    description: "Professional automation panels with PLC logic control.",
    shortDescription: "Professional automation panels with PLC logic control for complex industrial processes.",
    fullDescription:
      "Programmable Logic Controller (PLC) panels are the brain of automation systems, providing precise control over machinery and processes through programmable logic.",
    image: "/plc.jpg",
    features: [
      "High-speed processing",
      "Industrial automation ready",
      "Network & communication supported",
      "Modular & scalable",
    ],
    applications: ["Automation lines", "Packaging", "Robotics", "Machine automation"],
    compatibleBrands: ["Siemens", "Omron", "Allen Bradley", "Mitsubishi", "ABB", "Delta"],
  },
  {
    id: "vfd-panel",
    name: "VFD Panel",
    fullName: "Variable Frequency Drive Panel",
    description: "Controls AC motor speed and torque with high efficiency.",
    shortDescription: "Controls AC motor speed and torque with high efficiency and energy savings.",
    fullDescription:
      "Variable Frequency Drive (VFD) panels are used to control the speed and torque of AC motors by varying the input frequency and voltage, resulting in significant energy savings.",
    image: "/vfd.jpg",
    features: [
      "Energy efficient",
      "User-adjustable frequency",
      "Protects motors",
      "Works in dusty/humid/hot environments",
    ],
    applications: ["Conveyors", "Pumps", "HVAC", "Machine tools"],
    compatibleBrands: ["Siemens", "ABB", "Danfoss", "Delta", "Yaskawa"],
  },
  {
    id: "apfc-panel",
    name: "APFC Panel",
    fullName: "Automatic Power Factor Correction Panel",
    description: "Automatic Power Factor Correction Panel.",
    shortDescription: "Maintains power factor close to unity, reducing electricity bills and penalties.",
    fullDescription:
      "Automatic Power Factor Correction (APFC) panels automatically switch capacitor banks to maintain the power factor close to unity, reducing electricity bills and penalties.",
    image: "/apfc.jpg",
    features: ["Auto capacitor bank switching", "Reduces penalties", "Saves energy", "Improves system stability"],
    applications: ["Industries", "Commercial complexes", "Hospitals", "Hotels"],
    compatibleBrands: ["L&T", "Epcos", "Schneider", "Siemens"],
  },
  {
    id: "amf-panel",
    name: "AMF Panel",
    fullName: "Auto Mains Failure Panel",
    description: "Automatically switches from Mains to Generator on power failure.",
    shortDescription: "Automatically switches from Mains to Generator on power failure for uninterrupted power.",
    fullDescription:
      "Auto Mains Failure (AMF) panels automatically switch the load to the generator in case of mains failure and switch it back when mains power is restored.",
    image: "/automatic-mains-failure-amf-generator-panel.jpg",
    features: ["Auto genset start/stop", "Battery charger included", "Safe switching", "Automatic return to mains"],
    applications: ["Hospitals", "Industries", "Commercial buildings", "Data centers"],
    compatibleBrands: ["Deep Sea", "ComAp", "Woodward"],
  },
  {
    id: "lt-distribution-board",
    name: "LT Distribution Board",
    fullName: "Low Tension Distribution Board",
    description: "Low-tension power distribution with high safety.",
    shortDescription: "Safe and reliable low-tension power distribution for various applications.",
    fullDescription:
      "Low Tension (LT) Distribution Boards are designed for safe and reliable distribution of electrical power in industrial and commercial settings.",
    image: "/lt-distribution-board.jpg",
    features: ["High safety standards", "Durable construction", "Easy maintenance", "Customizable"],
    applications: ["Residential", "Commercial", "Industrial"],
    compatibleBrands: ["L&T", "Schneider", "Legrand", "Hager"],
  },
  {
    id: "feeder-pillar",
    name: "Feeder Pillar",
    fullName: "Feeder Pillar",
    description: "Outdoor distribution panel for industries, public utilities & housing.",
    shortDescription: "Robust outdoor distribution panel for industries, public utilities & housing societies.",
    fullDescription:
      "Feeder Pillars are robust outdoor distribution panels used for distributing power to various circuits in industries, public utilities, and housing societies.",
    image: "/FEEDER-PILLAR-PANEL-1200x800.jpg",
    features: ["Weatherproof", "Robust design", "Secure locking mechanism", "Corrosion resistant"],
    applications: ["Street lighting", "Housing societies", "Industrial parks", "Public utilities"],
    compatibleBrands: ["L&T", "Schneider", "Siemens"],
  },
  {
    id: "busbar-chamber-box",
    name: "Busbar Chamber Box",
    fullName: "Busbar Chamber Box",
    description: "Ensures safe current distribution with aluminum/copper busbars.",
    shortDescription: "Ensures safe and efficient current distribution with high-quality busbars.",
    fullDescription:
      "Busbar Chamber Boxes are used for safe and efficient distribution of high current using copper or aluminum busbars.",
    image: "/busbar-chamber-box.jpg",
    features: ["High conductivity", "Safe distribution", "Compact design", "Easy termination"],
    applications: ["Power distribution", "Control panels", "Switchgear"],
    compatibleBrands: ["Custom"],
  },
  {
    id: "distribution-box",
    name: "Distribution Box",
    fullName: "Distribution Box",
    description: "Compact electrical distribution for small circuits & buildings.",
    shortDescription: "Compact and safe electrical distribution for small circuits and buildings.",
    fullDescription:
      "Distribution Boxes are compact enclosures used to distribute electrical power to multiple circuits, providing protection and control.",
    image: "/normal_660812b03a4ff.webp",
    features: ["Compact", "Easy installation", "Circuit protection", "Aesthetic design"],
    applications: ["Residential", "Offices", "Small industries"],
    compatibleBrands: ["Legrand", "Schneider", "L&T", "Anchor"],
  },
  {
    id: "spm",
    name: "Special Purpose Machines",
    fullName: "Special Purpose Machines (SPM)",
    description: "Servo-based and custom automation machines for 24×7 high productivity.",
    shortDescription: "Custom designed servo-based automation machines for high productivity and precision.",
    fullDescription:
      "Special Purpose Machines (SPMs) are custom-designed machines tailored to specific manufacturing tasks, utilizing servo systems and automation for high precision and productivity.",
    image: "/special-purpose-machine.jpg",
    features: ["Custom designed", "High productivity", "Servo-based precision", "24x7 operation"],
    applications: ["Automotive", "Assembly lines", "Packaging", "Testing"],
    compatibleBrands: ["Mitsubishi", "Siemens", "Omron", "Delta"],
    types: ["Pick & Place", "Packaging Machines", "Material Handling", "Servo Automation Machines"],
  },
]
