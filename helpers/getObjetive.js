import { goals } from "../public/data";

export const getObjetive = (id, setObjetiveTitle, setObjetiveInfo) => {
   switch(id) {
      case 'mission':
         setObjetiveTitle(goals[id].title);
         setObjetiveInfo(goals[id].info);
      break;
      case 'vission':
         setObjetiveTitle(goals[id].title);
         setObjetiveInfo(goals[id].info);
      break;
      case 'team':
         setObjetiveTitle(goals[id].title);
         setObjetiveInfo(goals[id].info);
      break;
      default:
         setObjetiveTitle('Nuestra misión');
         setObjetiveInfo('Somos una empresa especialista en el servicio de avalúos comerciales, contables y de seguros comprometida como profesionales a asesorar a nuestros clientes para proteger su patrimonio');
   };
};