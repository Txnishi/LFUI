import React, { useEffect } from 'react';
import particleCanvas from './particlesEffect';

function ParticlesBackground() {
  useEffect(() => {
    particleCanvas.init();
    // particleCanvas.mapPoints();

    return () => {
      // This will stop the particle effect when the component unmounts
      particleCanvas.destroy();
    };
  }, []);

  return (
    <canvas id="particle-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
  );
}

export default ParticlesBackground;

// import React, { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticlesBackground = () => {
//   const [init, setInit] = useState(false);

// useEffect(() => {
//     const initializeParticles = async () => {
//       await initParticlesEngine(async (engine) => {
//         await loadSlim(engine);
//       });
//       setInit(true);
//     };

//     initializeParticles();
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   return (
//     <>
//       {init && (
//         <Particles
//           id="tsparticles"
//           particlesLoaded={particlesLoaded}
//           options={{
//             background: {
//               color: {
//                 value: "#0d47a1",
//               },
//             },
//             fpsLimit: 60,
//             interactivity: {
//               events: {
//                 onClick: {
//                   enable: true,
//                   mode: "push",
//                 },
//                 onHover: {
//                   enable: true,
//                   mode: "repulse",
//                 },
//                 resize: true,
//               },
//               modes: {
//                 push: {
//                   quantity: 4,
//                 },
//                 repulse: {
//                   distance: 200,
//                   duration: 0.4,
//                 },
//               },
//             },
//             particles: {
//               color: {
//                 value: "#ffffff",
//               },
//               links: {
//                 color: "#ffffff",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1,
//               },
//               move: {
//                 enable: true,
//                 speed: 2,
//                 direction: "none",
//                 random: false,
//                 straight: false,
//                 outModes: {
//                   default: "bounce",
//                 },
//               },
//               number: {
//                 density: {
//                   enable: true,
//                   area: 800,
//                 },
//                 value: 80,
//               },
//               opacity: {
//                 value: 0.5,
//               },
//               shape: {
//                 type: "circle",
//               },
//               size: {
//                 value: { min: 1, max: 5 },
//               },
//             },
//             detectRetina: true,
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default ParticlesBackground;

// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// function ParticlesBackground() {

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };
//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   return (
//     <ParticlesBackground
//       id="tsparticles"
//       init={particlesInit}
//       Loaded={particlesLoaded}

//       options={
//         {
//           background: {
//             color: {
//               value: "#0d47a1",
//             },
//           },
//           fpsLimit: 120,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 6,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 5 },
//             },
//           },
//           detectRetina: true,
//         }
//       }

//     />
//   )
// }
// export default ParticlesBackground

//ANOTHER

// import React from 'react';
// import { Particles } from '@tsparticles/react';

// const ParticlesBackground = () => {
//   const particleOptions = {
//     background: {
//       color: {
//         value: "#000000",
//       },
//     },
//     fpsLimit: 60, // Adjust this value to control the frame rate
//     interactivity: {
//       detectsOn: "canvas",
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: true,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         bubble: {
//           distance: 400,
//           duration: 2,
//           opacity: 0.8,
//           size: 40,
//         },
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     particles: {
//       color: {
//         value: "#ffffff",
//       },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.5,
//         width: 1,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outMode: "bounce",
//         random: false,
//         speed: 6,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//         value: 80,
//       },
//       opacity: {
//         value: 0.5,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         random: true,
//         value: 5,
//       },
//     },
//     detectRetina: true,
//   };

//   return <Particles options={particleOptions} />;
// };

// export default ParticlesBackground;

// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticlesBackground = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log("Particles loaded:", container);
//   };

//   const options = {
//     background: {
//       color: {
//         value: "#000000"
//       }
//     },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "repulse"
//         }
//       }
//     },
//     particles: {
//       color: {
//         value: "#ffffff"
//       },
//       links: {
//         color: "#ffffff",
//         distance: 150,
//         enable: true,
//         opacity: 0.4
//       },
//       move: {
//         enable: true,
//         speed: 2
//       },
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           area: 800
//         }
//       },
//       opacity: {
//         value: 0.5,
//         animation: {
//           enable: true,
//           speed: 1,
//           minimumValue: 0.1,
//           sync: false
//         }
//       },
//       shape: {
//         type: "circle"
//       },
//       size: {
//         value: 3,
//         random: {
//           enable: true,
//           minimumValue: 1
//         }
//       }
//     },
//     detectRetina: true,
//     pauseOnBlur: true,
//     pauseOnOutsideViewport: true
//   };

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={options}
//       />
//     );
//   }

//   return null;
// };

// export default ParticlesBackground;
