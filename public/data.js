/* hooks */
import { v4 as uuidv4 } from 'uuid';
/* assets */
import excelAutomotriz from '../assets/icons/excel-automotriz-logo.svg';
import grupoQ from '../assets/icons/grupoq-logo.svg';
import grupoLosTres from '../assets/icons/grupo-los-tres-logo.svg';
import bfa from '../assets/icons/bfa-logo.svg';
import cofinoStahl from '../assets/icons/cofino-stahl-logo.svg';
import bancoAgricola from '../assets/icons/banco-agricola-logo.svg';
import bancoPromerica from '../assets/icons/banco-promerica-logo.svg';
import bandesal from '../assets/icons/bandesal-logo.svg';
import autoFacil from '../assets/icons/autofacil-logo.svg';
import suzuki from '../assets/icons/suzuki-logo.svg';
import ex1 from '../assets/images/ex1.jpg';
import ex2 from '../assets/images/ex2.jpg';
import ex3 from '../assets/images/ex3.jpg';
import ex4 from '../assets/images/ex4.jpg';

const links = {
   facebook: "https://www.facebook.com/avaluoscallejas/?hc_ref=ARSToSo4IP4v89778IZ_mwOJBWAO2ae5Y_KCcrtijtCl4MpvMiJBo11lht03gLb0qJA&fref=nf&__xts__[0]=68.ARDPDwVP_30vBVaVIls6hB9IpiN8Dhy1jVCgo9R_yx1GMBNKYJI-6yZaqtHtuPXZvaSEpnXQfMKJgZlBYxZ0KMk-cpCiwB66bZm5ouzt8d39niFeY-65eA0nohamGMlXEUr0A7fKf1WTk5ElQTajoJ1ULw7ox6yDLhgzZ17klmdZmjhEShUpzGYPe5j92uE39B7xfoLvFdxRmd_Hz297C2vtNcqb534Zhj135RP9AYG4J5JJ2dpahEVbJRY1CG5caaUVot_c4FNzxHOILWUlTErS5USF38b_HNybHP3DzvBz5CbGxi8",
   instagram: "https://www.instagram.com/avaluos_callejas/",
   whatsApp: "https://api.whatsapp.com/send?phone=50370347570&app=facebook&entry_point=page_cta"
};

const alliedCompanies = [
   { id: uuidv4(), logo: excelAutomotriz, title: "Excel Automotriz" },
   { id: uuidv4(), logo: grupoQ, title: "Grupo Q" },
   { id: uuidv4(), logo: grupoLosTres, title: "Grupo los Tres" },
   { id: uuidv4(), logo: bfa, title: "Banco de Fomento Agropecuario" },
   { id: uuidv4(), logo: cofinoStahl, title: "Cofiño Stahl S.A" },
   { id: uuidv4(), logo: bancoAgricola, title: "Banco Agrícola" },
   { id: uuidv4(), logo: bancoPromerica, title: "Banco Promerica" },
   { id: uuidv4(), logo: bandesal, title: "BANDESAL" },
   { id: uuidv4(), logo: autoFacil, title: "Auto Facíl" },
   { id: uuidv4(), logo: suzuki, title: "Suzuki" },
];

const goals = {
   mission: {
      title: 'Nuestra misión',
      info: 'Somos una empresa especialista en el servicio de avalúos comerciales, contables y de seguros comprometida como profesionales a asesorar a nuestros clientes para proteger su patrimonio.'
   },
   vission: {
      title: 'Nuestra visión',
      info: 'Ser líderes en el sistema de valuación a nivel nacional siendo reconocidos como un ente transparente e imparcial para la toma de decisiones de nuestros clientes incrementado la competitividad y calidad de nuestros procesos.'
   },
   team: {
      title: 'Nuestro equipo',
      info: 'Desde la maquinaria hasta cada uno de nuestros empleados del persona. Todos y cada uno está altamente calificado para brindar un servicio de calidad cómo y cuando sea.'
   }
};

const services = [
   {
      id: uuidv4(),
      number: '01',
      title: 'Sistema de Frenos',
      content: 'Revisión de discos, tambores, pastillas o fricciones'
   },
   {
      id: uuidv4(),
      number: '02',
      title: 'Números de chasis',
      content: 'Comprabación que números de motor, y chasis sean iguales que tu tarjeta de circulación'
   },
   {
      id: uuidv4(),
      number: '03',
      title: 'Sistema eléctrico',
      content: 'Revisión y diagnóstico por medio de escáner de componentes electrónicos o eléctricos; del sistema de refrigeración o aire acondicionado.'
   },
   {
      id: uuidv4(),
      number: '04',
      title: 'Suspensión',
      content: 'Revisión de barras, tijeras, y amortiguadores.'
   },
   {
      id: uuidv4(),
      number: '05',
      title: 'Motor',
      content: 'Revisión de niveles y ruidos, pruebas de compresión en cilindros de motor.'
   },
   {
      id: uuidv4(),
      number: '06',
      title: 'Carrocería',
      content: 'Verificación de las condiciones estéticas y estructurales, entregamos cuatro fotografías o más en caso que se identifique daño severo estructural en chasis o carrocería.'
   },
   {
      id: uuidv4(),
      number: '07',
      title: 'Transmisión',
      content: 'Revisión de fugas, y ruidos en embrague, caja y corona'
   },
   {
      id: uuidv4(),
      number: '08',
      title: 'Dirección',
      content: 'Revisión de terminales, barras, esferas, y sistema hidráulico.'
   },
   {
      id: uuidv4(),
      number: '09',
      title: 'Estado del chasis',
      content: 'Verificación del estado físico de chasis y puente.'
   },
];

const reviewExample = {
   step1: {
      title: "01 - Diagnóstico estético",
      content: "El avalúo de tu vehículo comienza con el llenado de un formulario de recepción del vehículo, dicho formulario indica la información general de la unidad a evaluar. Así como la descripción en la que se recibe antes de iniciar el proceso de diagnóstico."
   },
   step2: {
      title: "02 - Diagnóstico mecánico",
      content: "Este incluye revisión de componentes de Motor, Transmisión, Frenos, Suspensión, Dirección, Sistema Eléctrico, y Llantas; además, se verifican las condiciones estructurales de chasis y puente de suspensión. Se realiza una prueba en carretera para verificar el óptimo funcionamiento del vehículo en marcha. El mecánico encargado brinda el reporte de aquellos componentes a cambiar, o reparar según sea necesario y los posibles costos de reparación de los mismos."
   },
   step3: {
      title: "03 - Elaboración del avalúo",
      content: `Toda la información recopilada hasta este punto sirve para generar un informe de avalúo con las condiciones mecánicas y estructurales del vehículo a la fecha con los costos estimados de reparación. Se emitirán certificados firmados y sellados por Perito Evaluador acreditado por la Superintendencia del Sistema Financiero del gobierno de El Salvador donde se establecerá el posible valor de comercial del bien sujeto de avalúo. Además, el cliente recibirá fotografías generales del vehículo, y de los hallazgos encontrados durante la inspección mecánica.`
   },
   media: [
      { id: uuidv4(), img: ex1 },
      { id: uuidv4(), img: ex2 },
      { id: uuidv4(), img: ex3 },
      { id: uuidv4(), img: ex4 }
   ],
}

export { links, alliedCompanies, goals, services, reviewExample };