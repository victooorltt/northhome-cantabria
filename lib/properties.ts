export interface Property {
  slug: string;
  id: string;
  ref: string;
  title: string;
  price: number;
  priceDisplay: string;
  operation: 'Venta' | 'Alquiler';
  type: 'Chalet' | 'Piso' | 'Terreno' | 'Garaje';
  zone: string;
  size?: string;
  plotSize?: string;
  rooms?: number;
  baths?: number;
  garage?: string;
  year?: number;
  statusBadge?: string;
  images: string[];
  summary: string;
  highlights: string[];
  fullDescription: string[];
}

export const PROPERTIES: Property[] = [
  {
    slug: 'chalet-liano',
    id: 'chalet-liano-6446',
    ref: '6446',
    title: 'Chalet independiente en LIAÑO',
    price: 380000,
    priceDisplay: '380.000,00€',
    operation: 'Venta',
    type: 'Chalet',
    zone: 'Liaño / Astillero',
    size: '350 m²',
    plotSize: '2.000 m²',
    rooms: 2,
    baths: 2,
    garage: '45 m²',
    images: [
      '/properties/chalet-liano/1.jpeg',
      '/properties/chalet-liano/2.jpeg',
      '/properties/chalet-liano/3.jpeg',
      '/properties/chalet-liano/4.jpeg',
      '/properties/chalet-liano/5.jpeg',
      '/properties/chalet-liano/6.jpeg',
      '/properties/chalet-liano/7.jpeg',
    ],
    summary:
      'Chalet independiente de 350 m² construido sobre una parcela privada de 2.000 m² en Liaño (Villaescusa), ubicado en un entorno natural consolidado próximo al Parque de Cabárceno y con excelente conexión a Santander y Astillero.',
    highlights: [
      'Planta principal con amplio salón en varios niveles, cocina independiente y baño completo.',
      'Planta superior con dos dormitorios, segundo baño y espacio bajo cubierta de gran versatilidad.',
      'Garaje cerrado de 45 m² con capacidad para varios vehículos y zona de taller o almacenaje.',
      'Finca privada de 2.000 m² con máxima tranquilidad y vistas despejadas a la naturaleza.',
    ],
    fullDescription: [
      'NORTHOME CANTABRIA ofrece este chalet independiente con terreno ubicado muy cerca de Astillero.',
      'En Liaño, en un entorno natural consolidado y muy próximo al Parque de la Naturaleza de Cabárceno, se encuentra esta vivienda independiente asentada sobre una parcela privada de 2.000 m². Un espacio pensado para disfrutar de la tranquilidad, con buena conexión a Santander y a los principales servicios.',
      'La casa se distribuye en varias alturas, combinando amplitud y funcionalidad. En la planta baja, el salón, con distintos niveles, genera un ambiente cómodo y luminoso, con una clara separación de usos sin perder continuidad. En esta planta se sitúa también la cocina y un baño completo.',
      'La planta superior alberga dos dormitorios y un segundo baño, configurando una zona de descanso bien definida. Bajo cubierta, un espacio adicional aporta versatilidad para almacenaje o usos complementarios.',
      'Un garaje de 45 m² ofrece capacidad para varios vehículos y la posibilidad de destinar parte del espacio a zona de trabajo o almacenamiento.',
      'El exterior refuerza el carácter de la propiedad: una finca amplia, privada y con múltiples opciones de uso, ideal para quienes valoran el espacio al aire libre y un entorno tranquilo.',
      'No dude en ponerse en contacto con nosotros para cualquier duda, aclaración o concertar una visita al inmueble.',
    ],
  },
  {
    slug: 'piso-calle-burgos',
    id: 'piso-calle-burgos-6180',
    ref: '6180',
    title: 'Piso en venta en calle Burgos',
    price: 265000,
    priceDisplay: '265.000,00€',
    operation: 'Venta',
    type: 'Piso',
    zone: 'Santander Centro',
    size: '70 m²',
    rooms: 2,
    baths: 2,
    year: 1920,
    statusBadge: 'Recién reformado',
    images: [
      '/properties/piso-calle-burgos/1.jpeg',
      '/properties/piso-calle-burgos/2.jpeg',
      '/properties/piso-calle-burgos/3.jpeg',
      '/properties/piso-calle-burgos/4.jpeg',
      '/properties/piso-calle-burgos/5.jpeg',
      '/properties/piso-calle-burgos/6.jpeg',
    ],
    summary:
      'Piso de 70 m² recién reformado con materiales de primera calidad en la calle Burgos, una de las principales calles peatonales de Santander, listo para entrar a vivir.',
    highlights: [
      'Dos amplios dormitorios: dormitorio principal con vestidor y baño en suite, más un segundo baño completo.',
      'Salón-comedor luminoso con cocina americana integrada y todos los electrodomésticos incluidos.',
      'Calefacción individual de gas natural y acabados modernos cuidando cada detalle.',
      'Ubicación céntrica inmejorable en zona peatonal junto a todos los comercios y servicios.',
    ],
    fullDescription: [
      'NORTHOME CANTABRIA pone a la venta piso de dos dormitorios en la calle Burgos.',
      'Situado en una de las mas céntricas calles peatonales de Santander, ofrecemos este bonito y recién reformado piso, con los mejores materiales, todas las comodidades y listo para entrar a vivir.',
      'La vivienda se compone de dos amplios dormitorios, el principal cuenta con vestidor y baño en suite, y otro baño completo que da servicio al dormitorio individual. Salón comedor con cocina americana con todos los electrodomésticos incluidos. Dispone de calefacción individual de gas natural.',
    ],
  },
  {
    slug: 'terreno-hornedo',
    id: 'terreno-hornedo-6245',
    ref: '6245',
    title: 'Terreno en venta en Hornedo',
    price: 50000,
    priceDisplay: '50.000,00€',
    operation: 'Venta',
    type: 'Terreno',
    zone: 'Hornedo / Entrambasaguas',
    size: '6.058 m²',
    plotSize: '6.058 m²',
    statusBadge: 'Finca rústica con agua y luz',
    images: [
      '/properties/terreno-hornedo/1.jpeg',
      '/properties/terreno-hornedo/2.jpeg',
      '/properties/terreno-hornedo/3.jpeg',
      '/properties/terreno-hornedo/4.jpeg',
      '/properties/terreno-hornedo/5.jpeg',
    ],
    summary:
      'Parcela rústica de 6.058 m² en Hornedo (Entrambasaguas), compuesta por tres fincas registrales con ribera en el río Riaño, a solo 25 minutos de Santander.',
    highlights: [
      'Superficie de 6.058 m² en un enclave natural privilegiado y apacible.',
      'Acometidas de agua y electricidad disponibles a pie de finca.',
      'Posibilidad de solicitar autorización a la CROTU para vivienda unifamiliar o proyecto de turismo rural.',
      'Excelente comunicación por carretera, combinando desconexión con cercanía a servicios.',
    ],
    fullDescription: [
      'NORTHOME CANTABRIA pone a la venta este terreno en Hornedo.',
      'Gran oportunidad de adquirir una parcela rústica de 6058 m² en Hornedo, Entrambasaguas, compuesta por tres fincas registrales, dos anexas y otra a escasos metros en la orilla del río Riaño.',
      'Ubicada en un entorno natural único y tranquilo. Aunque se trata de suelo rústico, esta propiedad ofrece la posibilidad de solicitar a la CROTU la autorización para la construcción de una vivienda, lo que permite edificar el hogar de tus sueños. Además, no solo se limita a viviendas unifamiliares; también existe la posibilidad de desarrollar otros proyectos, como un pequeño hotel rural, casas de huéspedes, o incluso un centro de turismo rural, gracias a su ubicación estratégica en un entorno pintoresco y de fácil acceso.',
      'La parcela cuenta con acometidas de luz y agua, lo que facilita el proceso de construcción y hace que sea aún más atractiva. Rodeada de naturaleza, ofrece un espacio único para proyectos residenciales o turísticos, ideal tanto para inversionistas como para quienes buscan un lugar de paz y desconexión.',
      'A tan solo 25 minutos en coche de Santander, esta propiedad se encuentra lo suficientemente cerca de la ciudad para disfrutar de sus servicios y comodidades, pero lo suficientemente alejada para ofrecer una verdadera desconexión del bullicio urbano. No dejes pasar esta oportunidad de invertir en un terreno con un gran potencial de desarrollo.',
    ],
  },
  {
    slug: 'garaje-isaac-peral',
    id: 'garaje-isaac-peral-6560',
    ref: '6560',
    title: 'Garaje en venta en Calle Isaac Peral',
    price: 50000,
    priceDisplay: '50.000,00€',
    operation: 'Venta',
    type: 'Garaje',
    zone: 'Numancia / San Fernando',
    size: '23.5 m²',
    garage: 'Hasta 2 coches',
    statusBadge: 'Plaza cerrada',
    images: [
      '/properties/garaje-isaac-peral/1.jpeg',
      '/properties/garaje-isaac-peral/2.jpeg',
      '/properties/garaje-isaac-peral/3.jpeg',
      '/properties/garaje-isaac-peral/4.jpeg',
      '/properties/garaje-isaac-peral/5.jpeg',
    ],
    summary:
      'Amplia plaza de garaje cerrada de 23,5 m² en la céntrica calle Isaac Peral, con espacio para albergar hasta dos vehículos.',
    highlights: [
      'Plaza totalmente cerrada que garantiza máxima seguridad y permite uso adicional como trastero.',
      'Capacidad para dos coches o coche familiar y motocicletas.',
      'Situada en la zona de Numancia - San Fernando, donde la oferta de aparcamiento es muy cotizada.',
      'Acceso cómodo y directo en edificio residencial consolidado.',
    ],
    fullDescription: [
      'NORTHOME CANTABRIA pone a la venta esta plaza de garaje en la calle Isaac Peral.',
      'Se trata de una amplia plaza de garaje cerrada de 23.5 m² donde pueden entrar hasta dos coches.',
      'La zona donde se encuentra es ideal para los habitantes que tengan propiedades en la zona de Numancia- San Fernando, teniendo en cuenta que muchos edificios del distrito carecen de plazas de garaje y aparcar por las inmediaciones no suele ser tarea fácil.',
      'Para cualquier duda, aclaración o realizar una visita no dude en ponerse en contacto con nosotros.',
    ],
  },
];

export function getAllProperties(): Property[] {
  return PROPERTIES;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug);
}
