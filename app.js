/* EDIT HERE: contact details, then projects. No build step needed. */
const PROFILE = {
  email: "mattiaseek12@outlook.com",
  github: "https://github.com/eekeen",
  linkedin: "https://www.linkedin.com/in/mattias-eek-16893a26a/",
  cv: "assets/Mattias_Eek_CV.pdf"
};

/* University reports are stored locally in /reports/. Personal projects have no report link. */
const PROJECTS = [
  {
    "id": "sensor-stabilisation",
    "title": "Active LiDAR Gimbal Stabilisation",
    "type": "Master's thesis · Mälardalen University",
    "year": "2026",
    "status": "Completed",
    "categories": [
      "Robotics",
      "Hardware"
    ],
    "tags": [
      "Control systems",
      "LiDAR",
      "Simscape Multibody",
      "ROS 2",
      "Python"
    ],
    "description": "Co-developed a 2-DOF LiDAR stabilisation system for UGV perception; simulated tests using recorded vehicle motion achieved 59.9× lower roll RMS.",
    "image": "assets/project-thumbs/sensor-stabilisation.png",
    "imageAlt": "CAD render of the active LiDAR gimbal platform.",
    "result": "59.9×",
    "resultNote": "roll disturbance rejection · simulation",
    "challenge": "Uneven terrain causes vehicle roll and pitch that degrade LiDAR point-cloud geometry. The objective was to quantify how much active stabilisation could improve measurement consistency.",
    "approach": "Co-developed an IMU-informed roll/pitch control architecture and modelled the plant in Simscape Multibody. Applied recorded UGV motion as disturbance input and evaluated synthetic LiDAR point clouds with ICP, C2C and M3C2.",
    "outcome": "In simulation, roll RMS decreased from 6.150° to 0.103° (59.9×) and pitch RMS from 3.983° to 0.513° (7.8×). ICP registration RMSE improved from 2.86 cm to 0.71 cm (4.0×), with a 15.6× decrease in mean C2C distance. The gimbal was not physically field-validated.",
    "stats": [
      [
        "59.9×",
        "roll disturbance reduction"
      ],
      [
        "7.8×",
        "pitch disturbance reduction"
      ],
      [
        "4.0×",
        "ICP RMSE improvement"
      ]
    ],
    "reportTitle": "Improving Long-Range LiDAR Measurement Accuracy Through Active Gimbal Stabilisation in Dynamic Environments",
    "credit": "Co-authored with Marcus Andersson.",
    "links": {
      "report": "reports/lidar-gimbal-thesis.pdf",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "unmanned-ground-vehicle",
    "title": "Building an Unmanned Ground Vehicle",
    "type": "University team project · SLaRC",
    "year": "2025",
    "status": "Completed",
    "categories": [
      "Robotics",
      "Hardware"
    ],
    "tags": [
      "ROS 2",
      "C++",
      "CAN bus",
      "Motor control",
      "SolidWorks"
    ],
    "description": "Contributed motor-control software and CAN integration to a 49.2 kg, four-wheel-drive UGV built for challenging terrain.",
    "image": "assets/project-thumbs/unmanned-ground-vehicle.jpg",
    "imageAlt": "Full view of the custom-built four-wheel-drive unmanned ground vehicle.",
    "result": "49.2 kg",
    "resultNote": "finished UGV · ≈60 min runtime",
    "challenge": "Design and integrate a modular ground robot that met strict mass, payload, runtime and off-road mobility requirements.",
    "approach": "Developed motor-control logic and CAN-bus communication, and supported the electrical integration, power distribution and mechanical design. The wider team built the chassis, drive system and ROS 2 teleoperation stack.",
    "outcome": "The six-person team delivered a 49.2 kg UGV with at least 25 kg payload capacity, approximately 60 minutes of runtime and demonstrated traversal of slopes above 30°. These figures describe the team-built platform.",
    "stats": [
      [
        "49.2 kg",
        "vehicle mass"
      ],
      [
        "≈60 min",
        "operating time"
      ],
      [
        ">30°",
        "traversable incline"
      ]
    ],
    "reportTitle": "Design and Manufacturing of a Modular UGV Research Platform for Challenging Terrain",
    "credit": "Group report with Marcus Andersson, Marcus Bergman, Camilla Bjelvén, Svante Björkman and Matilda Öhman.",
    "links": {
      "report": "reports/lightseeker-ugv.pdf",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "chess-engine",
    "title": "ChessAI · C++ Chess Engine",
    "type": "Independent software project",
    "year": "2026",
    "status": "Completed",
    "categories": [
      "Software"
    ],
    "tags": [
      "C++",
      "Alpha-beta",
      "Iterative deepening",
      "PyTorch",
      "Profiling"
    ],
    "description": "Built a C++ chess engine with alpha-beta search, transposition tables and a PyTorch-trained evaluator; validated move generation to perft depth 5.",
    "image": "assets/project-thumbs/chess-engine-full.webp",
    "imageAlt": "Full ChessAI desktop application with board, engine controls and move list.",
    "result": "4,865,609",
    "resultNote": "verified perft nodes at depth 5",
    "challenge": "Build a correct chess engine from scratch while balancing legal move generation, search depth, evaluation quality and execution speed.",
    "approach": "Implemented legal move generation, alpha-beta search, iterative deepening and a transposition table in C++. Trained a neural evaluator with PyTorch and added parity checks and performance profiling.",
    "outcome": "Starting-position perft tests match the reference count through depth 5 (4,865,609 nodes). The engine has also been benchmarked against Stockfish 19; it does not have an independently verified Elo rating.",
    "stats": [
      [
        "4.86M",
        "perft D5 nodes"
      ],
      [
        "C++",
        "engine core"
      ],
      [
        "PyTorch",
        "evaluator training"
      ]
    ],
    "links": {
      "report": "",
      "demo": "",
      "github": "https://github.com/eekeen/ChessAI"
    }
  },
  {
    "id": "rl-navigation",
    "title": "Reinforcement-Learning Navigation Stack",
    "type": "Engineering software project",
    "year": "2026",
    "status": "Project",
    "categories": [
      "Robotics",
      "Software"
    ],
    "tags": [
      "ROS 2",
      "Gazebo",
      "PPO",
      "Reinforcement learning",
      "Navigation"
    ],
    "description": "Implemented a ROS 2/Gazebo navigation stack combining PPO-based subgoal selection with obstacle avoidance and differential-drive control.",
    "image": "assets/project-thumbs/rl-navigation.png",
    "imageAlt": "Composite of a Gazebo apartment scene and PPO-based perception visualisation.",
    "result": "PPO",
    "resultNote": "high-level subgoal selection",
    "challenge": "Navigate a simulated mobile robot toward goals while handling obstacles and the motion constraints of a differential-drive platform.",
    "approach": "Built a hierarchical navigation architecture in ROS 2 and Gazebo: PPO selects intermediate goals while lower-level logic handles obstacle avoidance and robot motion.",
    "outcome": "Implemented and visualised the navigation pipeline in simulation. A verified navigation success rate, route-efficiency improvement and physical-robot deployment are not claimed.",
    "stats": [
      [
        "ROS 2",
        "robot software"
      ],
      [
        "Gazebo",
        "simulation"
      ],
      [
        "PPO",
        "learning algorithm"
      ]
    ],
    "links": {
      "report": "",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "bluetooth-localisation",
    "title": "3D Bluetooth Indoor Localisation",
    "type": "University research project",
    "year": "2023",
    "status": "Completed",
    "categories": [
      "Software",
      "Hardware"
    ],
    "tags": [
      "Python",
      "BLE RSSI",
      "KNN",
      "SVM",
      "Interpolation"
    ],
    "description": "Developed BLE RSSI fingerprinting and machine-learning methods for 3D indoor localisation, achieving 43.5 cm mean error in controlled tests.",
    "image": "assets/project-thumbs/bluetooth-localisation-joined.jpg",
    "imageAlt": "Taped measurement grid and 3D experimental Bluetooth localisation setup, side by side.",
    "result": "43.5 cm",
    "resultNote": "mean position error · best KNN setup",
    "challenge": "Estimate position indoors without satellite navigation despite Bluetooth signal variation, limited measured fingerprints and three-dimensional movement.",
    "approach": "Co-developed dual-RSSI fingerprint collection and compared KNN, SVM, interpolation and genetic-algorithm feature selection. The dataset comprised 196 physical fingerprints, extended to 3,610 reference positions.",
    "outcome": "Nearest-neighbour interpolation with KNN achieved 43.5 cm mean positioning error versus 134.8 cm for the comparison dataset within a controlled 4.5 m × 4.5 m × 2.25 m test space.",
    "stats": [
      [
        "43.5 cm",
        "mean localisation error"
      ],
      [
        "196",
        "measured fingerprints"
      ],
      [
        "3,610",
        "interpolated dataset size"
      ]
    ],
    "reportTitle": "Dual RSSI Indoor Localization in 3D Space",
    "credit": "Co-authored with Andreas Johansson and Momir Savic.",
    "links": {
      "report": "reports/bluetooth-localisation.pdf",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "motor-lidar",
    "title": "Stepper-Driven LiDAR and PCB",
    "type": "University hardware project",
    "year": "2025",
    "status": "Completed",
    "categories": [
      "Hardware",
      "Robotics"
    ],
    "tags": [
      "LabVIEW",
      "NI myDAQ",
      "H-bridge",
      "PCB",
      "Multisim",
      "Ultiboard"
    ],
    "description": "Co-designed a stepper-driven LiDAR scanner with a custom H-bridge PCB and LabVIEW control, demonstrating 180° sweeps in 1.8° steps.",
    "image": "assets/project-thumbs/motor-lidar.png",
    "imageAlt": "PCB layout image from the motor-controlled LiDAR project.",
    "result": "180°",
    "resultNote": "configurable scanning sweep",
    "challenge": "Create a repeatable LiDAR scanning mechanism and assess how surface properties, size and distance influence detection.",
    "approach": "Co-designed the double H-bridge in Multisim and PCB in Ultiboard. Developed LabVIEW control through NI myDAQ, calibrated the distance sensor and tested scanning performance.",
    "outcome": "Demonstrated a 180° default sweep in 1.8° steps and evaluated targets at distances up to 80 cm. Matte, opaque objects were more consistently detected than glossy or transparent targets; a PCB failure limited repeat testing.",
    "stats": [
      [
        "180°",
        "default sweep"
      ],
      [
        "1.8°",
        "step resolution"
      ],
      [
        "80 cm",
        "evaluated range"
      ]
    ],
    "reportTitle": "Design and Evaluation of a myDAQ-Controlled, Stepper-Driven LiDAR",
    "credit": "Co-authored with Marcus Andersson.",
    "links": {
      "report": "reports/motor-controlled-lidar.pdf",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "heating-qlearning",
    "title": "Predictive Heating Control with Q-Learning",
    "type": "University simulation project",
    "year": "2024",
    "status": "Completed",
    "categories": [
      "Software"
    ],
    "tags": [
      "MATLAB",
      "Simulink",
      "Q-learning",
      "Forecast data",
      "Control"
    ],
    "description": "Built a forecast-aware Q-learning heating controller that reduced simulated heating costs by 9.5% compared with a conventional thermostat.",
    "image": "assets/project-thumbs/heating-qlearning.png",
    "imageAlt": "Chart comparing heating costs for the Q-learning controller and thermostat baseline.",
    "result": "9.5%",
    "resultNote": "lower simulated heating cost",
    "challenge": "Use forecast information to anticipate temperature changes rather than only reacting once the indoor temperature deviates from its setpoint.",
    "approach": "Developed a Q-learning controller in MATLAB and Simulink using weather forecasts and a simulated residential thermal model. Compared cost and temperature regulation against a thermostat baseline.",
    "outcome": "In the simulation, modelled heating costs fell from $128.4 to $116.2 (approximately 9.5%) while maintaining temperature control. The cost reduction has not been measured in an actual building.",
    "stats": [
      [
        "9.5%",
        "simulated cost reduction"
      ],
      [
        "$116.2",
        "learning controller cost"
      ],
      [
        "$128.4",
        "thermostat baseline"
      ]
    ],
    "reportTitle": "Proactive Heating Control Using Forecasted Data with Q-learning",
    "credit": "Individually authored university report.",
    "links": {
      "report": "reports/q-learning-heating.pdf",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "ecg-analysis",
    "title": "ECG Signal Processing and HRV Analysis",
    "type": "University research project",
    "year": "2024",
    "status": "Completed",
    "categories": [
      "Software"
    ],
    "tags": [
      "MATLAB",
      "Signal processing",
      "Wavelets",
      "ECG",
      "HRV"
    ],
    "description": "Processed 12-lead ECG recordings from five endurance athletes using wavelet analysis and heart-rate variability metrics.",
    "image": "assets/project-thumbs/ecg-analysis.png",
    "imageAlt": "ECG electrode placement and waveform figures from the ECG analysis report.",
    "result": "5",
    "resultNote": "athlete recordings analysed",
    "challenge": "Extract and compare meaningful signal features from ECG measurements while accounting for noise and normal physiological variation.",
    "approach": "Co-developed a MATLAB workflow using wavelet-based signal processing, waveform analysis, RR intervals and heart-rate variability measurements from a public athlete ECG dataset.",
    "outcome": "Analysed and compared recordings from five athletes, exploring waveform and HRV characteristics. The work was a signal-processing study, not a clinically validated diagnostic tool.",
    "stats": [
      [
        "5",
        "athletes compared"
      ],
      [
        "12-lead",
        "ECG recordings"
      ],
      [
        "HRV",
        "analysis metric"
      ]
    ],
    "reportTitle": "Analysis of Heart Rate Variability in Elite Athletes Using ECG Data",
    "credit": "Co-authored with Marcus Andersson.",
    "links": {
      "report": "reports/ecg-signal-processing.pdf",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "home-hub",
    "title": "Raspberry Pi Smart-Home Hub",
    "type": "Independent hardware/software project",
    "year": "2026",
    "status": "In progress",
    "categories": [
      "Hardware",
      "Software"
    ],
    "tags": [
      "Raspberry Pi",
      "Linux",
      "Docker",
      "Touchscreen",
      "Home automation"
    ],
    "description": "Built a Raspberry Pi 3 B+ touchscreen hub with a room-based home-control interface; connected-device integration is ongoing.",
    "image": "",
    "imageAlt": "",
    "result": "7-inch",
    "resultNote": "touch interface prototype",
    "challenge": "Create an affordable wall-mounted control interface that reduces reliance on multiple smart-home apps.",
    "approach": "Configured Linux, Wi-Fi and Docker on a Raspberry Pi 3 B+, added a 7-inch DSI display and set up a kiosk-style room interface.",
    "outcome": "The touchscreen hub and room-based UI are running as a prototype. Integrations with individual lights and other devices remain in development.",
    "stats": [
      [
        "7-inch",
        "touchscreen"
      ],
      [
        "Pi 3 B+",
        "single-board computer"
      ]
    ],
    "links": {
      "report": "",
      "demo": "",
      "github": ""
    }
  },
  {
    "id": "fat-sheet",
    "title": "FAT Sheet Builder",
    "type": "Independent web application prototype",
    "year": "2026",
    "status": "Prototype",
    "categories": [
      "Software"
    ],
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "CSV",
      "PDF"
    ],
    "description": "Developed a browser-based tool that transforms structured CSV test data into readable factory acceptance test sheets and printable documentation.",
    "image": "assets/project-thumbs/fat-sheet.png",
    "imageAlt": "Screenshot of the FAT Sheet Builder landing page and product preview.",
    "result": "CSV → PDF",
    "resultNote": "structured documentation workflow",
    "challenge": "Reduce repetitive documentation work and inconsistent formatting when preparing factory acceptance tests.",
    "approach": "Created an HTML/CSS/JavaScript prototype that imports structured CSV data, organises test steps and prepares readable acceptance test documentation for browser-based printing or export.",
    "outcome": "The working web prototype is deployed for evaluation. It remains an experimental documentation tool rather than a released commercial service.",
    "stats": [
      [
        "CSV",
        "input data"
      ],
      [
        "PDF",
        "printable output"
      ]
    ],
    "links": {
      "report": "",
      "demo": "https://fat-sheet-builder.eekeenlabs.workers.dev/",
      "github": ""
    }
  }
 ];

// Project content above is editable without rebuilding the website.
const $ = (selector) => document.querySelector(selector);
const FEATURED_IDS = ["sensor-stabilisation", "unmanned-ground-vehicle", "bluetooth-localisation"];
const setHistory = (url) => { try { history.replaceState(null, "", url); } catch { /* restricted preview contexts may not support history updates */ } };
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);
const safe = (url) => {
  if (!url) return "";
  try {
    const resolved = new URL(url, location.href);
    return ["http:", "https:", "mailto:"].includes(resolved.protocol) ||
      (location.protocol === "file:" && resolved.protocol === "file:") ? resolved.href : "";
  } catch { return ""; }
};

// Curated screenshots and report illustrations. Each academic caption names the PDF page.
// Personal projects without real project imagery (Smart Home) intentionally remain image-free.
const PROJECT_MEDIA = {
  "sensor-stabilisation": [
    {src:"assets/project-gallery/thesis-simscape.webp",caption:"Simscape Multibody plant in its nominal stabilised configuration — thesis, p. 27"},
    {src:"assets/project-gallery/thesis-residual.webp",caption:"Residual roll and pitch attitude under measured UGV disturbances — thesis, p. 41"},
    {src:"assets/project-gallery/thesis-pointcloud.webp",caption:"Synthetic point-cloud comparison between reference, rigid and stabilised configurations — thesis, p. 44"}
  ],
  "unmanned-ground-vehicle": [
    {src:"assets/project-gallery/ugv-cad.webp",caption:"Exploded UGV layout and main assemblies — group report, p. 38"},
    {src:"assets/project-gallery/ugv-terrain.webp",caption:"Slope and obstacle traversal testing — group report, p. 39"},
    {src:"assets/project-gallery/ugv-prototype.webp",caption:"SolidWorks chassis design before manufacturing — group report, p. 27"}
  ],
  "bluetooth-localisation": [
    {src:"assets/project-gallery/bluetooth-heatmaps.webp",caption:"Measured BLE signal-strength heatmaps in different orientations — report, p. 5"},
    {src:"assets/project-gallery/bluetooth-rig.webp",caption:"Photographed reference grid and 3D experimental setup — report, p. 4"}
  ],
  "motor-lidar": [
    {src:"assets/project-gallery/motor-schematic.webp",caption:"H-bridge motor-driver schematic — report, p. 2"},
    {src:"assets/project-gallery/motor-control.webp",caption:"NI myDAQ, LabVIEW and motor-driver system communication — report, p. 3"},
    {src:"assets/project-gallery/motor-calibration.webp",caption:"Measured LiDAR distance-calibration curve — report, p. 4"}
  ],
  "ecg-analysis": [
    {src:"assets/project-gallery/ecg-waveform.webp",caption:"Reference P-wave, QRS and T-wave diagram — report, p. 2"},
    {src:"assets/project-gallery/ecg-wavelet.webp",caption:"Wavelet-reconstructed ECG for one athlete — report, p. 3"}
  ],
  "heating-qlearning": [
    {src:"assets/project-gallery/heating-simulink.webp",caption:"Forecast-aware Q-learning model in Simulink — report, p. 4"},
    {src:"assets/project-gallery/heating-comfort.webp",caption:"Comparison of normalised comfort scores — report, p. 5"}
  ],
  "rl-navigation": [
    {src:"assets/project-gallery/ppo-gazebo.webp",caption:"Gazebo indoor training and navigation environment"},
    {src:"assets/project-gallery/ppo-perception.webp",caption:"Obstacle sensing and navigation visualisation"}
  ],
  "chess-engine": [
    {src:"assets/project-gallery/chess-flip.webp",caption:"ChessAI during a game with Flip Board enabled and the move list in view"},
    {src:"assets/project-gallery/chess-board.webp",caption:"ChessAI desktop application — close-up of the chess board"}
  ],
  "fat-sheet": [
    {src:"assets/project-gallery/fat-preview.webp",caption:"FAT Sheet Builder document preview with example I/O data"}
  ]
};

const PROJECT_ROLES = {
  "sensor-stabilisation":"Co-developed the control architecture, MATLAB/Simscape model and point-cloud evaluation pipeline with my thesis partner.",
  "unmanned-ground-vehicle":"Motor-control programming and CAN-bus communication; supported electrical integration, power distribution and mechanical design in a six-person team.",
  "bluetooth-localisation":"Collaborative BLE RSSI fingerprinting, data processing and KNN/SVM model evaluation.",
  "motor-lidar":"Co-designed the H-bridge and PCB and developed the LabVIEW-based measurement and motor-control workflow.",
  "heating-qlearning":"Individually authored the Q-learning heating-controller simulation and performance comparison.",
  "ecg-analysis":"Co-developed the signal-processing workflow and analysed ECG and heart-rate variability with a project partner.",
  "chess-engine":"Independent C++ engine development, algorithm implementation, neural evaluation and test profiling.",
  "rl-navigation":"Implemented a ROS 2/Gazebo navigation stack with PPO-guided high-level planning.",
  "home-hub":"Raspberry Pi setup, Linux/Docker configuration and kiosk-style touchscreen interface.",
  "fat-sheet":"Designed and developed the browser-based CSV-to-test-sheet prototype."
};

let activeFilter = "All";
let returnFocus = null;
let activeGallery = [];
let galleryIndex = 0;
let returnLightboxFocus = null;
const projectDialog = $("#dlg");
const lightbox = $("#lightbox");

function renderFilters() {
  const categories = ["All", "Robotics", "Software", "Hardware"];
  $("#filters").innerHTML = categories.map((category) =>
    `<button type="button" data-f="${category}" aria-pressed="${category === activeFilter}">${category}</button>`
  ).join("");
}

function img(p, cls = "project-thumb", alt = "") {
  return p.image ? `<img class="${cls}" src="${esc(p.image)}" alt="${esc(alt)}" loading="lazy" decoding="async">` : "";
}

function renderPreviewCard(p) {
  return p.image ?
    `<span class="thumb-card" data-project="${esc(p.id)}" aria-hidden="true">${img(p)}<span class="thumb-cap"><strong>${esc(p.result)}</strong><small>${esc(p.resultNote)}</small></span></span>` :
    `<span class="result-card" aria-hidden="true"><strong>${esc(p.result)}</strong><small>${esc(p.resultNote)}</small><em>Image forthcoming</em></span>`;
}

function renderFeatured() {
  const root = $("#featured-grid");
  root.innerHTML = FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean).map((p) => {
    const report = safe(p.links.report);
    const meta = [p.type, p.year, p.status].filter(Boolean).join(" · ");
    return `<article class="featured-card" data-project="${esc(p.id)}">
      ${p.image ? `<div class="featured-media">${img(p,"project-shot",p.imageAlt || p.title)}</div>` : ""}
      <div class="featured-copy">
        <p class="featured-meta">${esc(meta)}</p>
        <h3>${esc(p.title)}</h3>
        <p class="featured-desc">${esc(p.description)}</p>
        <ul class="featured-stats">${p.stats.slice(0,3).map(([v,l])=>`<li><strong>${esc(v)}</strong><span>${esc(l)}</span></li>`).join("")}</ul>
        <div class="featured-actions"><button type="button" class="btn featured-open" data-id="${esc(p.id)}">View case study ↗</button>
        ${report ? `<a class="plain" href="${esc(report)}" target="_blank" rel="noopener noreferrer">Report ↗</a>` : ""}</div>
      </div>
    </article>`;
  }).join("");
}

function renderLedger() {
  const filtered = PROJECTS.filter((p) => activeFilter === "All" || p.categories.includes(activeFilter));
  $("#ledger").innerHTML = filtered.map((p) => {
    const featured = FEATURED_IDS.includes(p.id) ? `<span class="featured-flag">Featured</span>` : "";
    return `<li><button type="button" class="row" data-id="${esc(p.id)}" aria-label="${esc(p.title)}, view project details">
      <span class="yr">${p.year ? esc(p.year) : "—"}</span>
      <span class="main-col"><h3>${esc(p.title)} ${featured}<span class="row-arrow" aria-hidden="true">↗</span></h3><p>${esc(p.description)}</p>
      <span class="tags">${esc(p.tags.join(" · "))}${p.links.report ? " · PDF report available" : ""}</span></span>
      ${renderPreviewCard(p)}
    </button></li>`;
  }).join("");
}

function projectPhotos(p) {
  const result = p.image ? [{src:p.image, caption:p.imageAlt || p.title}] : [];
  result.push(...(PROJECT_MEDIA[p.id] || []));
  return result;
}

function openProject(id, trigger) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  returnFocus = trigger || null;
  activeGallery = projectPhotos(p);
  const meta = [p.type, p.year, p.status].filter(Boolean).join(" · ");
  const report = safe(p.links.report);
  const otherLinks = [["Source code",p.links.github],["Live demo",p.links.demo]].filter(([,url]) => safe(url));
  const mainImage = p.image ? `<button type="button" class="case-main-image media-button" data-photo="0" aria-label="Enlarge primary project image">
      ${img(p,"case-main-photo",p.imageAlt || p.title)}<span class="zoom-tag">View image ↗</span></button>` : "";
  const extra = (PROJECT_MEDIA[p.id] || []);
  const gallery = extra.length ? `<section class="case-gallery-section" aria-labelledby="case-gallery-heading">
    <h3 id="case-gallery-heading">More from the project <small>· Click to enlarge</small></h3>
    <div class="case-gallery">${extra.map((m,i)=>`<button type="button" class="gallery-tile media-button" data-photo="${i+(p.image ? 1 : 0)}" aria-label="Enlarge image: ${esc(m.caption)}">
      <img src="${esc(m.src)}" alt="" loading="lazy"><span>${esc(m.caption)}</span></button>`).join("")}</div>
    </section>` : "";
  const resultStats = p.stats.map(([val,label])=>`<div><strong>${esc(val)}</strong><span>${esc(label)}</span></div>`).join("");
  const techChips = p.tags.map((tag)=>`<span>${esc(tag)}</span>`).join("");
  $("#dlg-body").innerHTML = `<div class="case-header"><p class="meta">${esc(meta)}</p>
    <h2 id="dlg-title">${esc(p.title)}</h2><p class="case-lead">${esc(p.description)}</p>
    </div>${mainImage}
    <div class="case-stats">${resultStats}</div>
    <section class="case-role"><h3>My contribution</h3><p>${esc(PROJECT_ROLES[p.id] || p.approach)}</p></section>
    <div class="case-sections"><section><h3>Challenge</h3><p>${esc(p.challenge)}</p></section>
    <section><h3>Design &amp; implementation</h3><p>${esc(p.approach)}</p></section>
    <section><h3>Results &amp; evaluation</h3><p>${esc(p.outcome)}</p></section></div>
    ${gallery}
    <section class="case-skills"><h3>Technologies</h3><div class="skill-chips">${techChips}</div></section>
    ${p.credit ? `<p class="case-credit">${esc(p.credit)}</p>` : ""}
    ${report ? `<section class="report-panel"><div class="report-intro"><span class="report-icon" aria-hidden="true">PDF</span><div><h3>Full project report</h3>
      <p>${esc(p.reportTitle || p.title)}</p></div></div>
      <div class="report-actions"><a href="${esc(report)}" target="_blank" rel="noopener noreferrer">Read report ↗</a>
      <a href="${esc(report)}" download>Download PDF ↓</a></div></section>` : ""}
    ${otherLinks.length ? `<div class="case-external">${otherLinks.map(([label,url])=>`<a class="plain" href="${esc(safe(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join("")}</div>` : ""}`;
  if (!projectDialog.open) projectDialog.showModal();
  document.body.classList.add("lock");
  projectDialog.scrollTop = 0;
  setHistory("#"+id);
  document.title = `${p.title} – Mattias Eek`;
}

function updateLightbox() {
  const photo = activeGallery[galleryIndex];
  if (!photo) return;
  const image = $("#lightbox-photo");
  image.src = safe(photo.src);
  image.alt = photo.caption;
  $("#lightbox-caption").textContent = photo.caption;
  $("#lightbox-count").textContent = `${galleryIndex+1} / ${activeGallery.length}`;
  $("#lightbox-prev").disabled = activeGallery.length < 2;
  $("#lightbox-next").disabled = activeGallery.length < 2;
}
function showLightbox(index, trigger) {
  if (!activeGallery[index]) return;
  returnLightboxFocus = trigger;
  galleryIndex = index;
  updateLightbox();
  lightbox.showModal();
}
function movePhoto(delta) {
  galleryIndex = (galleryIndex + delta + activeGallery.length) % activeGallery.length;
  updateLightbox();
}

renderFilters();
renderFeatured();
renderLedger();
$("#filters").addEventListener("click", (e) => {
  const button = e.target.closest("[data-f]");
  if (!button) return;
  activeFilter = button.dataset.f;
  renderFilters(); renderLedger();
  $("#filters [aria-pressed='true']")?.focus();
});
$("#featured-grid").addEventListener("click",(e) => { const button=e.target.closest("[data-id]"); if (button) openProject(button.dataset.id,button); });
$("#ledger").addEventListener("click",(e) => { const button=e.target.closest("[data-id]"); if (button) openProject(button.dataset.id,button); });
$("#dlg-body").addEventListener("click",(e) => {
  const tile = e.target.closest("[data-photo]");
  if (tile) showLightbox(Number(tile.dataset.photo),tile);
});
$("#dlg-x").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => { if (event.target === projectDialog) projectDialog.close(); });
projectDialog.addEventListener("close", () => {
  document.body.classList.remove("lock");
  document.title = "Mattias Eek – Robotics & Embedded Systems Engineer";
  if (PROJECTS.some((p)=>"#"+p.id === location.hash)) setHistory(location.pathname+location.search);
  if (returnFocus?.isConnected) returnFocus.focus();
});
$("#lightbox-close").addEventListener("click",()=>lightbox.close());
$("#lightbox-prev").addEventListener("click",()=>movePhoto(-1));
$("#lightbox-next").addEventListener("click",()=>movePhoto(1));
lightbox.addEventListener("click",(event)=>{ if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener("close",()=>{ if (returnLightboxFocus?.isConnected) returnLightboxFocus.focus(); });
window.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") { event.preventDefault(); movePhoto(-1); }
  if (event.key === "ArrowRight") { event.preventDefault(); movePhoto(1); }
});
window.addEventListener("hashchange", () => { const id=location.hash.slice(1); if (PROJECTS.some((p)=>p.id === id)) openProject(id); });
if (PROJECTS.some((p)=>p.id === location.hash.slice(1))) openProject(location.hash.slice(1));

// Copy Email is first, followed by external GitHub and LinkedIn links.
const contactRoot = $("#contact-actions");
const externalContacts = [["GitHub",PROFILE.github],["LinkedIn",PROFILE.linkedin]].filter(([,url])=>safe(url));
contactRoot.innerHTML = `${PROFILE.email ? `<button type="button" id="copy-email" class="copy-link">Copy Email <span aria-hidden="true">↗</span></button>` : ""}
  ${externalContacts.map(([label,url])=>`<a class="contact-link" href="${esc(safe(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join("")}
  <span id="copy-feedback" class="copy-feedback" role="status" aria-live="polite"></span>`;

async function copyEmail() {
  let copied = false;
  if (!PROFILE.email) return;
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(PROFILE.email); copied = true; } catch { /* try compatibility fallback */ }
  }
  if (!copied) {
    const textarea = document.createElement("textarea");
    textarea.value = PROFILE.email;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try { copied = document.execCommand("copy"); } catch { /* no clipboard handler */ }
    textarea.remove();
  }
  const feedback = $("#copy-feedback");
  const button = $("#copy-email");
  if (copied) {
    feedback.textContent = "Copied!";
    button.classList.add("copied");
    button.setAttribute("aria-label","Email copied to clipboard");
  } else {
    feedback.textContent = `Select and copy: ${PROFILE.email}`;
  }
  setTimeout(() => { feedback.textContent=""; button.classList.remove("copied"); button.removeAttribute("aria-label"); },3200);
}
$("#copy-email")?.addEventListener("click",copyEmail);
const cv = safe(PROFILE.cv);
if (cv) { const link=$("#cv-link"); link.href=cv; link.hidden=false; }
$("#year").textContent=new Date().getFullYear();
