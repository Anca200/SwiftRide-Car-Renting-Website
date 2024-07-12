import chevrolet from "../sport_cars/Chevrolet.png";
import porsche1 from "../sport_cars/Porsche1.png";
import alpine from "../sport_cars/Alpine.png";
import lotus from "../sport_cars/Lotus.png";
import astron from "../convertible/Aston.png";
import bentley from "../convertible/Bentley.png";
import bmw from "../convertible/BMW.png";
import chevroletC from "../convertible/ChevroletC.png";
{/*Sport*/}

{/*Chevrolet Corvette*/}
import Chevrolet_Corvette_main from "../details/sport/Chevrolet Corvette/main.png";
import Chevrolet_Corvette_red from "../details/sport/Chevrolet Corvette/red.png";
import Chevrolet_Corvette_black from "../details/sport/Chevrolet Corvette/black.png";
import Chevrolet_Corvette_cover from "../details/sport/Chevrolet Corvette/Cover.png";
{/*Porsche 911*/}
import Porsche_911_main from "../details/sport/Porsche_911/main.png";
import Porsche_911_red from "../details/sport/Porsche_911/red.png";
import Porsche_911_black from "../details/sport/Porsche_911/black.png";
import Porsche_911_cover from "../details/sport/Porsche_911/cover.jpg";
{/*Alpine A110*/}
import Alpine_A110_main from "../details/sport/Alpine_A110/main.png";
import Alpine_A110_red from "../details/sport/Alpine_A110/red.png";
import Alpine_A110_black from "../details/sport/Alpine_A110/black.png";
import Alpine_A110_cover from "../details/sport/Alpine_A110/cover.jpg";
{/*Lotus Evija*/}
import Lotus_Evija_main from "../details/sport/Lotus_Evija/main.png";
import Lotus_Evija_red from "../details/sport/Lotus_Evija/red.png";
import Lotus_Evija_black from "../details/sport/Lotus_Evija/black.png";
import Lotus_Evija_cover from "../details/sport/Lotus_Evija/cover.jpg";
{/*Convertible*/}

{/*Aston Martin*/}
import Aston_Martin_red from "../details/convertible/Aston Martin/red.png";
import Aston_Martin_black from "../details/convertible/Aston Martin/black.png";
import Aston_Martin_cover from "../details/convertible/Aston Martin/cover.jpg";
{/*Bentley_Continental*/}
import Bentley_Continental_main from "../details/convertible/Bentley Continental/main.png";
import Bentley_Continental_red from "../details/convertible/Bentley Continental/red.png";
import Bentley_Continental_black from "../details/convertible/Bentley Continental/black.png";
import Bentley_Continental_cover from "../details/convertible/Bentley Continental/cover.jpg";
{/*BMW Z4*/}
import BMW_Z4_main from "../details/convertible/BMW Z4/main.png";
import BMW_Z4_red from "../details/convertible/BMW Z4/red.png";
import BMW_Z4_black from "../details/convertible/BMW Z4/black.png";
import BMW_Z4_cover from "../details/convertible/BMW Z4/cover.png";
{/*Chevrolet Camaro*/}
import Chevrolet_Camaro_main from "../details/convertible/Chevrolet Camaro/main.png";
import Chevrolet_Camaro_red from "../details/convertible/Chevrolet Camaro/red.png";
import Chevrolet_Camaro_black from "../details/convertible/Chevrolet Camaro/black.png";
import Chevrolet_Camaro_cover from "../details/convertible/Chevrolet Camaro/cover.jpg";

{/*Muscle*/}
{/*LS6 Chevelle*/}
import LS6_Chevelle_main from "../details/muscle/LS6 Chevelle/main.png";
import LS6_Chevelle_black from "../details/muscle/LS6 Chevelle/black.png";
import LS6_Chevelle_red from "../details/muscle/LS6 Chevelle/red.png";
import LS6_Chevelle_cover from "../details/muscle/LS6 Chevelle/cover.jpg";
import LS6_Chevelle_side from "../details/muscle/LS6 Chevelle/side.png";
{/*Oldsmobile 442*/}
import Oldsmobile_442_main from "../details/muscle/Oldsmobile 442/main.png";
import Oldsmobile_442_red from "../details/muscle/Oldsmobile 442/red.png";
import Oldsmobile_442_black from "../details/muscle/Oldsmobile 442/black.png";
import Oldsmobile_442_cover from "../details/muscle/Oldsmobile 442/cover.jpg";
import Oldsmobile_442_side from "../details/muscle/Oldsmobile 442/side.png";
{/*Pontiac Firebird*/}
import Pontiac_Firebird_main from "../details/muscle/Pontiac Firebird/main.png";
import Pontiac_Firebird_red from "../details/muscle/Pontiac Firebird/red.png";
import Pontiac_Firebird_black from "../details/muscle/Pontiac Firebird/black.png";
import Pontiac_Firebird_cover from "../details/muscle/Pontiac Firebird/cover.jpg";
import Pontiac_Firebird_side from "../details/muscle/Pontiac Firebird/side.png";


const cars = {

  Sport: [
    {
      id: 1,
      name: "Chevrolet Corvette",
      type: "Sport",
      image: chevrolet,
      main:  Chevrolet_Corvette_main ,
      red:   Chevrolet_Corvette_red,
      black: Chevrolet_Corvette_black,
      cover: Chevrolet_Corvette_cover,
      details: "This beautifully sculpted mid-engine masterpiece has a presence that's impossible to ignore. With razor-sharp aerodynamics and details designed to perfection, the eighth-generation Corvette pushes its legacy to the highest point ever.",
      gas: "80L",
      type: "Auto",
      people: 2,
      price: " $85,000"
    },

    {
      id: 2,
      name: "Porsche 911",
      type: "Sport",
      image: porsche1,
      main: Porsche_911_main,
      red:Porsche_911_red,
      black:Porsche_911_black,
      cover:Porsche_911_cover,
      details:"The standard features of the Porsche 911 Carrera include 3.0L H-6 379hp twin turbo engine, 8-speed auto-shift manual transmission with overdrive, 4-wheel anti-lock brakes (ABS), integrated navigation system, POSIP side seat mounted airbags, curtain 1st row overhead airbag, airbag occupancy sensor, automatic air conditioning, 19 aluminum wheels, cruise control, ABS and driveline traction control.",
      gas: "70L",
      type: " Auto",
      people: 2,
      price: "$95,000"
    },
    {
      id: 3,
      name: "Alpine A110",
      type: "Sport",
      image: alpine,
      main: Alpine_A110_main,
      red:Alpine_A110_red,
      black:Alpine_A110_black,
      cover:Alpine_A110_cover,
      details: "The Alpine A110 is a sports car produced by French automobile manufacturer Alpine from 1963 to 1977. The car was styled as a berlinette, which in the post-WWII era refers to a small enclosed two-door berline, better-known as a coupé. The Alpine A110 succeeded the earlier A108.",
      gas: "90L",
      type: "Auto",
      people: 2,
      price: " $90,000" 
    },
    {
      id: 4,
      name: "Lotus Evija",
      type: "Sport",
      image: lotus,
      main: Lotus_Evija_main,
      red:Lotus_Evija_red,
      black:Lotus_Evija_black,
      cover:Lotus_Evija_cover,
      details:"The Evija is the first Lotus road car to ever feature a full carbon fibre chassis. Moulded as a single piece for exceptional strength, rigidity and safety, the full length of the underside is sculpted to optimise downforce. It includes an integrated air diffuser which extends from under the B-pillars to the rear.",
      gas: "80L",
      type: "Auto",
      people: 2,
      price: "95.000$"
    },
  ],

  Convertible: [
    {
      id: 6,
      name: "Aston Martin",
      type: "Convertible",
      image: astron,
      main:astron,
      red:Aston_Martin_red,
      black:Aston_Martin_black,
      cover:Aston_Martin_cover,
      details:"Aston Martin's vision is to be the world's most desirable, ultra-luxury British brand, creating the most exquisitely addictive performance cars. Founded in 1913 by Lionel Martin and Robert Bamford, Aston Martin is acknowledged as an iconic global brand synonymous with style, luxury, performance, and exclusivity.",
      gas: "80L",
      type: "Auto",
      people: 2,
      price: "$85,000"
    },
    {
      id: 7,
      name: "Bentley Continental",
      type: "Convertible",
      image: bentley,
      main:Bentley_Continental_main,
      red:Bentley_Continental_red,
      black:Bentley_Continental_black,
      cover:Bentley_Continental_cover,
      details:"Bentley Motors is the world's leading manufacturer of luxury cars. Based in the UK at Pyms Lane, Crewe, Cheshire since 1938, the luxury marque employs more than 4,000 colleagues who design, engineer, handcraft and market bespoke automobiles.",
      gas: "80L",
      type: "Auto",
      people: 2,
      price: "$85,000"
    },
    {
      id: 8,
      name: "BMW Z4",
      type: "Convertible",
      image: bmw,
      main:BMW_Z4_main,
      red:BMW_Z4_red,
      black:BMW_Z4_black,
      cover:BMW_Z4_cover,
      details:"The first-generation BMW Z4 was known as the E85 in roadster form and E86 in coupé form. It was designed by Danish BMW-designer Anders Warming. The Z4's design addressed many criticisms of the preceding Z3; it was larger and featured a significantly stiffer chassis.",
      gas: "80L",
      type: "Auto",
      people: 2,
      price: "$85.000"
    },
    {
      id: 9,
      name: "Chevrolet Camaro",
      type: "Convertible",
      image: chevroletC,
      main:Chevrolet_Camaro_main,
      red:Chevrolet_Camaro_red,
      black:Chevrolet_Camaro_black,
      cover:Chevrolet_Camaro_cover,
      details:"The 2024 Chevy Camaro's standard 3.6L V6 engine is a force to be reckoned with, packing a punch that belies its “base” status. Its 335 horsepower is enough to rocket you from 0 to 60 mph in just over 5 seconds, making the Camaro feel exhilaratingly quick.",
      gas: "80L",
      type: "Auto",
      people: 2,
      price: "$85.000"
    }
  ],

  Muscle: [
    {
      id: 10,
      name: "LS6 Chevelle",
      type: "Muscle",
      image: LS6_Chevelle_side,
      main:LS6_Chevelle_main,
      red:LS6_Chevelle_red,
      black:LS6_Chevelle_black,
      cover:LS6_Chevelle_cover,
      details:"The 450 horsepower LS6 was the most powerful engine offered in 1970. The Cowl Induction system fed cold outside air to the big 780 cfm Holley carburetor. The LS6 used the same block as the LS5, however a 800-cfm Holley four barrel bolted to an aluminum manifold replaced the Rochester Quadra Jet.",
      gas: "80L",
      type: "Manual",
      people: 5,
      price: "$65,000"
    },
    {
      id: 11,
      name: "Oldsmobile 442",
      type: "Muscle",
      image: Oldsmobile_442_side ,
      main:Oldsmobile_442_main,
      red:Oldsmobile_442_red,
      black:Oldsmobile_442_black,
      cover:Oldsmobile_442_cover,
      details:"The 442 option was revived on the Quad 442 front-wheel drive 1990-1991 Cutlass Calais. This model used a 2.3 L LG0 Quad-4 four-cylinder engine with four valves per cylinder and two camshafts. The engine was tuned with higher output camshafts which produced more top end power at the expense of idle quality.",
      gas: "80L",
      type: "Manual",
      people: 5,
      price: "$60,000"
    },
    {
      id: 12,
      name: "Pontiac Firebird",
      type: "Muscle",
      image: Pontiac_Firebird_side,
      main:Pontiac_Firebird_main,
      red:Pontiac_Firebird_red,
      black:Pontiac_Firebird_black,
      cover:Pontiac_Firebird_cover,
      details:"The Pontiac Firebird is an American automobile built and produced by Pontiac from the 1967 to 2002 model years. Designed as a pony car to compete with the Ford Mustang, it was introduced on February 23, 1967, five months after GM's Chevrolet division's platform-sharing Camaro.",
      gas: "80L",
      type: "Manual",
      people: 4,
      price: "$70,000"
    },
  ]
};

export default cars;