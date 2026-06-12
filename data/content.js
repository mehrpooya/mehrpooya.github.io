/* =============================================================================
   ALI MEHRPOOYA — WEBSITE CONTENT
   =============================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE WEBSITE'S CONTENT.

   How it works:
     • Everything between the quotes "like this" is text you can change.
     • Keep the quotes, the commas, and the curly braces { } exactly where they are.
     • After editing, save the file and refresh the website in your browser.

   Quick map of this file:
     1. profile  ............ your name, title, tagline, photo, social links
     2. stats  .............. the four big numbers in the About section
     3. about  .............. your bio paragraphs + education + honours
     4. capabilities  ....... the four cards under the cover (matches your banner)
     5. skills  ............. grouped technical skills (datasheet-style tables)
     6. projects  ........... your portfolio. Each project is a rich "post" that can
                              contain text, images, video, code, tabs, specs & links.
     7. publications  ....... journal / conference papers
     8. experience  ......... your career & education timeline
     9. contact  ........... contact details shown in the footer

   A FULL "how to add a project" walkthrough is in EDITING_GUIDE.md
   ============================================================================= */

window.SITE = {

  /* ---------------------------------------------------------------------------
     1. PROFILE  —  shown in the cover (hero) and the top navigation bar
     --------------------------------------------------------------------------- */
  profile: {
    name:        "Ali Mehrpooya",
    // The small label above your name in the cover:
    eyebrow:     "Senior FPGA/SoC Developer",
    // The role line shown under your name:
    role:        "Senior FPGA/SoC Developer — University of Bristol",
    // The big tagline (the red word is automatic: wrap a word in *asterisks*):
    tagline:     "Designing the future. Delivering *performance*.",
    // One or two sentences describing what you do (cover sub-text):
    intro:       "FPGA & SoC engineer specialising in RF systems, real-time DSP and AI/ML on Xilinx Zynq UltraScale+ RFSoC and MPSoC — building the hardware behind Beyond-5G / 6G.",
    // Affiliation logo (leave as is, or replace the file in assets/img/):
    affiliationLogo: "assets/img/bristol.png",
    affiliationAlt:  "University of Bristol",
    monogram:    "assets/img/monogram.png",   // the AM logo (top-left)
    coverImage:  "assets/img/chip.jpg",        // the chip shown on the cover

    // Buttons in the cover. Each = { label, href }.  Use "#projects", "#contact"
    // to scroll to a section, or a full URL to link out.
    ctaPrimary:   { label: "View projects",  href: "#projects" },
    ctaSecondary: { label: "Get in touch",   href: "#contact"  },

    // Social links. Delete a line to hide that icon. Keep the "icon" word as-is.
    social: [
      { icon: "github",   label: "github.com/mehrpooya",      href: "https://github.com/mehrpooya" },
      { icon: "linkedin", label: "ali-mehrpooya",             href: "https://www.linkedin.com/in/ali-mehrpooya-7668747b/" },
      { icon: "scholar",  label: "Google Scholar",            href: "https://scholar.google.com/citations?user=UuNQO_cAAAAJ&hl=en" },
      { icon: "bristol",  label: "Bristol profile",           href: "https://www.bristol.ac.uk/people/person/Ali-Mehrpooya-6f98b435-6a12-410d-8182-a58a7713c46c/" },
      { icon: "email",    label: "ali.mehrpooya@bristol.ac.uk", href: "mailto:ali.mehrpooya@bristol.ac.uk" }
    ]
  },

  /* ---------------------------------------------------------------------------
     2. STATS  —  the four highlight numbers in the About section.
        Edit the value and the label. Add or remove items freely.
     --------------------------------------------------------------------------- */
  stats: [
    { value: "10+",  label: "Years in FPGA & DSP" },
    { value: "15+",  label: "Devices & boards mastered" },
    { value: "10",   label: "Peer-reviewed papers" },
    { value: "Ph.D", label: "Communications Eng., Sharif" }
  ],

  /* ---------------------------------------------------------------------------
     3. ABOUT  —  bio paragraphs, education and honours.
     --------------------------------------------------------------------------- */
  about: {
    heading: "About",
    // Each string in this list becomes one paragraph.
    paragraphs: [
      "I design and verify FPGA and SoC systems that turn signal-processing theory into real, working hardware. My focus is the full chain — from floating-point algorithm to fixed-point RTL, to timing-closed bitstream running on the board.",
      "I hold a Ph.D. in Communications Engineering from Sharif University of Technology, where my research centred on sparse signal processing and multidimensional dictionary learning for 3D ISAR radar imaging. Today, as a Senior Research Associate at the University of Bristol's Smart Internet Lab, I work on applying AI and machine-learning models on Zynq RFSoC and MPSoC platforms for next-generation Beyond-5G / 6G networks."
    ],
    // Education entries.  Each = { degree, field, place, period, detail }.
    education: [
      { degree: "Ph.D. — Electrical Engineering", field: "Communications", place: "Sharif University of Technology", period: "2015 – 2023", detail: "GPA 93.75%" },
      { degree: "M.Sc. — Electrical Engineering", field: "Communications", place: "Sharif University of Technology", period: "2013 – 2015", detail: "GPA 91.85%" },
      { degree: "B.Sc. — Electrical Engineering", field: "Electronics",     place: "Sharif University of Technology", period: "2008 – 2013", detail: "GPA 83.70%" }
    ],
    // A few honours shown as small chips. Add/remove freely.
    honours: [
      "Rank 1 — National M.Sc. Entrance Exam (Communications), Iran",
      "Rank 1 — National M.Sc. Entrance Exam (Electronics), Iran",
      "Rank 3 — National Ph.D. Entrance Exam (Communications), Iran",
      "Math & Physics Olympiad — 2nd stage"
    ]
  },

  /* ---------------------------------------------------------------------------
     4. CAPABILITIES  —  the four cards under the cover (mirrors your banner).
        Each = { label, desc }.  Keep to ~4 for the cleanest layout.
     --------------------------------------------------------------------------- */
  capabilities: [
    { label: "FPGA Architecture",        desc: "Zynq-7000, UltraScale+ MPSoC & RFSoC. Hardware/software co-design across PL and PS." },
    { label: "RTL Design & Verification",desc: "Expert VHDL & Verilog. Pure-HDL DSP datapaths, testbenches and on-board verification." },
    { label: "High-Performance Systems", desc: "RF transceiver links, phased arrays and multi-channel receivers for B5G / 6G." },
    { label: "Optimization & Debug",     desc: "Float-to-fixed conversion, timing closure, HLS acceleration and signal integrity." }
  ],

  /* ---------------------------------------------------------------------------
     5. SKILLS  —  grouped technical skills, shown as datasheet-style tables.
        Each group = { group: "Title", items: [ "skill", "skill", ... ] }.
     --------------------------------------------------------------------------- */
  skills: [
    {
      group: "FPGA & Hardware",
      items: [
        "VHDL & Verilog (expert)", "Digital signal processing on FPGA",
        "Floating-point → fixed-point conversion", "Vivado / Vitis HLS (C/C++)",
        "Xilinx System Generator", "Model Composer", "Vitis-AI (DPU)",
        "MATLAB HDL Coder", "MicroBlaze soft-core",
        "UART · SPI · I²C · PCIe · 1G/10G Ethernet · UDP · DDR3 · ADC/DAC · GPS"
      ]
    },
    {
      group: "Platforms & Boards",
      items: [
        "Zynq-7000 (ZC702 / ZC706)", "UltraScale+ MPSoC (ZCU102 / ZCU106)",
        "Zynq RFSoC (ZCU111 / ZCU208 / ZCU216)", "Alveo U50",
        "PYNQ-Z1", "AD9361 / AD9371 / ADRV9009 transceivers",
        "SDR: PlutoSDR · USRP E310/E312 · PicoZed SDR · HackRF One · RTL-SDR"
      ]
    },
    {
      group: "Embedded Linux",
      items: [
        "Embedded Linux from scratch", "Buildroot",
        "Yocto Project / OpenEmbedded", "Kernel & device-driver development",
        "USB driver & USB-gadget development", "Real-time integration"
      ]
    },
    {
      group: "Languages & Tools",
      items: [
        "MATLAB / Simulink", "C / C++", "Python", "PyTorch · TensorFlow",
        "ModelSim", "Git · Docker", "LaTeX", "Qt / PyQt", "Altium Designer",
        "PathWave SystemVue", "OpenCV (Raspberry Pi · Jetson Nano)"
      ]
    }
  ],

  /* ---------------------------------------------------------------------------
     6. PROJECTS  —  your portfolio.  THIS IS THE IMPORTANT ONE.
     ---------------------------------------------------------------------------
     Each project has two parts:
       (A) The CARD shown on the home page:  id, title, tag, summary, thumb
       (B) The full POST shown when clicked:  the "content" list of blocks.

     "content" is a list of building blocks. You can use as many as you like, in
     any order. The available block types are:

       { type:"text",    value:"A paragraph. **bold**, *italic*, `code`, [link](https://...) all work." }
       { type:"heading", value:"A sub-heading inside the post" }
       { type:"image",   src:"projects-media/photo.jpg", caption:"Optional caption" }
       { type:"video",   src:"https://www.youtube.com/embed/VIDEO_ID", caption:"Optional caption" }
       { type:"video",   src:"projects-media/clip.mp4" }          // a local video file also works
       { type:"list",    items:["point one","point two","point three"] }
       { type:"specs",   title:"Hardware", rows:[ ["Device","XCZU47DR"], ["Board","ZCU102"] ] }
       { type:"code",    lang:"vhdl", value:"signal q : std_logic;" }
       { type:"links",   items:[ {label:"Read the paper", href:"https://..."} ] }
       { type:"tabs",    tabs:[
                            { label:"Overview", blocks:[ {type:"text", value:"..."} ] },
                            { label:"Results",  blocks:[ {type:"image", src:"..."} ] }
                         ] }

     To add an image or video: drop the file into the "projects-media" folder,
     then reference it as  "projects-media/yourfile.jpg".
     For a YouTube video, use the EMBED url:  https://www.youtube.com/embed/VIDEO_ID
     --------------------------------------------------------------------------- */
  projects: [

    {
      id: "rfsoc-multichannel-receiver",
      title: "Multi-Channel RFSoC Receiver & Channelizer",
      tag: "ZCU102 · ADRV9009",          // small mono label on the card
      featured: true,                     // featured cards are shown larger
      summary: "A 4-channel digital receiver built on two ADRV9009 transceivers, channelizing the wideband input and extracting per-sub-channel information in real time.",
      thumb: "assets/img/chip.jpg",       // card image (replace with your own)
      content: [
        { type: "text", value: "This project implements a **4-channel coherent receiver** using two Analog Devices **ADRV9009** wideband transceiver chips on a Xilinx **ZCU102** UltraScale+ MPSoC board. The design captures a wide RF band, then digitally channelizes it into narrow sub-channels for independent processing." },
        { type: "specs", title: "Platform", rows: [
            ["Board", "Xilinx ZCU102 (UltraScale+ MPSoC)"],
            ["RF front end", "2 × ADRV9009 transceivers"],
            ["Channels", "4 coherent receive paths"],
            ["Key blocks", "JESD204B, polyphase channelizer, DDC"]
        ]},
        { type: "heading", value: "What it does" },
        { type: "list", items: [
            "Synchronises both transceivers for coherent multi-channel capture.",
            "Implements a polyphase channelizer in the PL to split the band efficiently.",
            "Extracts and routes sub-channel data to the processing system over high-speed links."
        ]},
        { type: "text", value: "_Tip: replace the image below with a block diagram or a scope capture of your own — drop it into the `projects-media` folder._" },
        { type: "image", src: "assets/img/chip.jpg", caption: "Replace with your own diagram, board photo or results plot." }
      ]
    },

   {
      id: "ZCU102 Gadget Platform",
      title: "ZCU102 Gadget Platform",
      tag: "ZCU102 · USB Gadget",          // small mono label on the card
      featured: true,                     // featured cards are shown larger
      summary: "A USB-gadget-based platform on the ZCU102, enabling high-speed data transfer and control between the FPGA and a host PC over USB 3.0.",
      thumb: "assets/img/board.jpg",       // card image (replace with your own)
      content: [
        { type: "text", value: "This project implements a **USB-gadget-based platform** on the Xilinx **ZCU102** board, enabling high-speed data transfer and control between the FPGA and a host PC over USB 3.0." },
        { type: "specs", title: "Platform", rows: [
            ["Board", "Xilinx ZCU102 (UltraScale+ MPSoC)"],
            ["USB mode", "USB 3.0 Gadget (Device)"],
            ["Data transfer", "High-speed streaming and control"],
            ["Key blocks", "USB controller, custom FPGA logic, Linux gadget drivers"]
        ]},
        { type: "heading", value: "What it does" },
        { type: "list", items: [
            "Enables high-speed data transfer and control between the FPGA and a host PC over USB 3.0.",
            "Implements custom FPGA logic to interface with the USB controller and manage data flow.",
            "Develops Linux gadget drivers to facilitate communication between the host PC and the FPGA over USB."
        ]},
        { type: "text", value: "You can go the corresponding documentation GitHub repository: https://github.com/mehrpooya/zcu102-usb-gadget-platform" },
        { type: "image", src: "assets/img/board.jpg", caption: "USB-gadget-based platform on the ZCU102 board." }
      ]
    },

    {
      id: "blind-satellite-receiver",
      title: "Blind Satellite Signal Receiver",
      tag: "Virtex-6 ML605",
      featured: true,
      summary: "A complete blind receiver in FPGA — from down-conversion through timing/carrier recovery to Viterbi + Turbo Product Code decoding — recovering content from an unknown satellite link.",
      thumb: "assets/img/board-texture.jpg",
      content: [
        { type: "text", value: "A full **blind receiver** implemented end-to-end on a Xilinx **Virtex-6 ML605** board, designed to lock onto and decode a satellite signal with no prior knowledge of its parameters." },
        { type: "tabs", tabs: [
            { label: "Signal chain", blocks: [
                { type: "list", items: [
                    "Digital down-converter and anti-aliasing filter",
                    "Resampler + Gardner timing recovery",
                    "Matched filter and Costas-loop carrier recovery",
                    "Demodulator → deframing → descrambling"
                ]}
            ]},
            { label: "Decoding", blocks: [
                { type: "text", value: "Forward error correction supports both **Viterbi** (via the Xilinx Viterbi IP core) and **Turbo Product Codes (TPC)**, the latter offloaded to an **AHA4541** ASIC from Advanced Hardware Architecture." },
                { type: "specs", title: "FEC", rows: [
                    ["Convolutional", "Xilinx Viterbi IP core"],
                    ["Block (TPC)", "AHA4541 ASIC"]
                ]}
            ]}
        ]},
        { type: "text", value: "After decoding, custom deframing and descrambling modules recover the underlying bit content of the link." }
      ]
    },

    {
      id: "all-vhdl-modems",
      title: "All-VHDL Digital Modems (BPSK → 32QAM)",
      tag: "Pure VHDL · Virtex-6",
      featured: false,
      summary: "A family of modems — BPSK, QPSK, 8PSK, 8/16/32QAM — written entirely in VHDL, with the full synchronisation chain, verified on hardware.",
      thumb: "assets/img/chip-macro.jpg",
      content: [
        { type: "text", value: "A complete modem family — **BPSK, QPSK, 8PSK, 8QAM, 16QAM and 32QAM** — implemented **purely in VHDL** (no IP black boxes) and verified on a Virtex-6 ML605 evaluation board." },
        { type: "heading", value: "Synchronisation blocks" },
        { type: "list", items: [
            "Equalizer and adaptive filter",
            "Resampler + Gardner timing recovery",
            "Costas-loop / PLL carrier-phase recovery",
            "Frequency-offset compensation"
        ]},
        { type: "text", value: "Every block was hand-written and bit-true verified against a floating-point reference model before being realised in fixed point on the FPGA." }
      ]
    },

    {
      id: "mimo-rf-transceiver-links",
      title: "MIMO RF Transceiver Links (AD9361 / AD9371)",
      tag: "ZC706 · ZCU106",
      featured: false,
      summary: "End-to-end transmit and receive chains driving Analog Devices 2×2 MIMO transceivers, from QPSK on the AD9361 to 8PSK on the AD9371.",
      thumb: "assets/img/chip.jpg",
      content: [
        { type: "text", value: "Two complete RF links built around Analog Devices 2×2 MIMO front-ends." },
        { type: "specs", title: "Link A", rows: [
            ["Transceiver", "AD9361 (2×2 MIMO)"],
            ["Boards", "ZC702 / ZC706"],
            ["Modulation", "QPSK Tx + Rx chain"]
        ]},
        { type: "specs", title: "Link B", rows: [
            ["Transceiver", "AD9371 (2×2 MIMO)"],
            ["Board", "ZCU106"],
            ["Modulation", "8PSK Tx + Rx chain"]
        ]}
      ]
    },

    {
      id: "fpga-computer-vision",
      title: "FPGA Computer Vision (xfOpenCV + HLS)",
      tag: "ZC706 · Vivado HLS",
      featured: false,
      summary: "Real-time image processing on Zynq-7000 — object & edge detection accelerated in the PL with xfOpenCV and HLS, controlled from the PS.",
      thumb: "assets/img/board-texture.jpg",
      content: [
        { type: "text", value: "A hardware/software co-design on the **Zynq-7000 ZC706**: vision algorithms accelerated in the programmable logic, orchestrated by software on the ARM processing system." },
        { type: "list", items: [
            "Object detection using Xilinx's hardware OpenCV library (xfOpenCV) on the PL via Vivado HLS.",
            "Edge detection built with System Generator block-sets.",
            "Image deblurring implemented with Model Composer.",
            "Control and data-flow handled in software (SDK) on the PS."
        ]}
      ]
    },

    {
      id: "isar-sparse-imaging",
      title: "3D ISAR Imaging via Sparse Coding (Ph.D.)",
      tag: "Research · DSP",
      featured: false,
      summary: "Multidimensional dictionary-based sparse coding to improve the quality of 3D Inverse Synthetic Aperture Radar images — the core of my doctoral research.",
      thumb: "assets/img/chip-macro.jpg",
      content: [
        { type: "text", value: "My Ph.D. research developed **multidimensional (tensor) dictionary learning** and sparse-coding methods to reconstruct and denoise **3D ISAR** radar images, improving resolution and suppressing noise." },
        { type: "links", items: [
            { label: "IET RSN — Image quality improvement (2022)", href: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/rsn2.12348" },
            { label: "IET RSN — Fast dictionary learning (2022)", href: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/rsn2.12275" },
            { label: "IET RSN — Modified generalised SL0 (2020)", href: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/iet-rsn.2020.0013" }
        ]}
      ]
    }

  ],

  /* ---------------------------------------------------------------------------
     7. PUBLICATIONS  —  shown as a list.  Each = { authors, title, venue, year, href, status }
        "status" is optional ("Submitted", "Accepted", "Published" ...).
     --------------------------------------------------------------------------- */
  publications: [
    { authors: "A. Mehrpooya, S. M. Karbasi, M. Nazari, Z. Abbasi, M. M. Nayebi",
      title: "3D inverse synthetic aperture radar image quality improvement using sparse signal representation",
      venue: "IET Radar, Sonar & Navigation", year: "2022", status: "Published",
      href: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/rsn2.12348" },

    { authors: "A. Mehrpooya, M. Nazari, Z. Abbasi, S. M. Karbasi, M. M. Nayebi, M. H. Bastani",
      title: "Fast multidimensional dictionary learning algorithms and their application in 3D ISAR image restoration and noise reduction",
      venue: "IET Radar, Sonar & Navigation", year: "2022", status: "Published",
      href: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/rsn2.12275" },

    { authors: "M. Nazari, A. Mehrpooya, M. H. Bastani, M. Nayebi, Z. Abbasi",
      title: "High-dimensional sparse recovery using modified generalised SL0 and its application in 3D ISAR imaging",
      venue: "IET Radar, Sonar & Navigation, vol. 14(8), pp. 1267–1278", year: "2020", status: "Published",
      href: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/iet-rsn.2020.0013" },

    { authors: "A. Mehrpooya, M. Nazari, Z. Abbasi, S. M. Karbasi, M. M. Nayebi, M. H. Bastani",
      title: "Tensor restoration using mask-based multidimensional dictionary learning and its application in 3D ISAR image reconstruction",
      venue: "IEEE Transactions on Signal Processing", year: "2023", status: "Submitted", href: "" },

    { authors: "A. Mehrpooya, S. M. Karbasi, M. Nazari, Z. Abbasi, M. M. Nayebi",
      title: "Fast tensor denoising using multidimensional sparse signal processing and its application in 3D ISAR image denoising",
      venue: "IEEE Transactions on Aerospace and Electronic Systems", year: "2023", status: "Submitted", href: "" },

    { authors: "M. Nazari, A. Mehrpooya, M. H. Bastani, M. Nayebi",
      title: "Sparse recovery using modified SL0 algorithm by weighted projection and application to ISAR imaging",
      venue: "28th Iranian Conference on Electrical Engineering (ICEE), IEEE", year: "2020", status: "Published",
      href: "https://ieeexplore.ieee.org/abstract/document/9260573/" }
  ],

  /* ---------------------------------------------------------------------------
     8. EXPERIENCE  —  career & education timeline.
        Each = { period, role, place, detail }.  Newest first.
     --------------------------------------------------------------------------- */
  experience: [
    { period: "2023 — Present", role: "Senior Research Associate", place: "University of Bristol · Smart Internet Lab",
      detail: "Beyond-5G / 6G systems: applying AI/ML on Zynq RFSoC & MPSoC platforms for next-generation wireless and optical networks." },
    { period: "2016 — 2023", role: "FPGA / DSP Engineer", place: "Faraz Communication Corporation, Tehran",
      detail: "All-VHDL modems, blind satellite receivers, MIMO RF transceiver integration and FPGA computer vision." },
    { period: "2015 — 2023", role: "Ph.D. Researcher", place: "Sharif University of Technology",
      detail: "Multidimensional dictionary-based sparse coding for 3D ISAR image reconstruction." },
    { period: "2013 — 2015", role: "M.Sc. — Communications Engineering", place: "Sharif University of Technology",
      detail: "Sparse-representation-based image inpainting." },
    { period: "2008 — 2013", role: "B.Sc. — Electrical Engineering", place: "Sharif University of Technology",
      detail: "Scientific calculator on an ARM-based microcontroller board." }
  ],

  /* ---------------------------------------------------------------------------
     9. CONTACT  —  shown in the Contact section and footer.
     --------------------------------------------------------------------------- */
  contact: {
    heading: "Let's build something fast.",
    blurb:   "Open to collaboration on FPGA / RFSoC, 6G and AI-on-hardware projects. The quickest way to reach me is email.",
    email:   "ali.mehrpooya@bristol.ac.uk",
    location:"Merchant Venturers Building, Woodland Road, Clifton, Bristol, BS8 1UB"
  }

};
