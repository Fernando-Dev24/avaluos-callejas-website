import { reviewExample } from "../public/data";

const carrouselHelper = (
   target,
   controls,
   setSlideTitle,
   setSlideContent,
   setIsTargetPdf,
) => {
   setIsTargetPdf(false);
   switch( target.id ) {
      case 'step1':
         setSlideTitle(reviewExample[target.id].title);
         setSlideContent(reviewExample[target.id].content);
      break;
      case 'step2':
         setSlideTitle(reviewExample[target.id].title);
         setSlideContent(reviewExample[target.id].content);
      break;
      case 'step3':
         setSlideTitle(reviewExample[target.id].title);
         setSlideContent(reviewExample[target.id].content);
      break;
      case 'media':
         setSlideTitle("Fotografías al momento del proceso del avalúo");
         setSlideContent(reviewExample[target.id]);
      break;
      case 'pdf':
         setSlideTitle("Ejemplo documento final del avalúo");
         setIsTargetPdf(true);
      break;
      default:
         break;   
   };

   controls.forEach(() => {
      const restOfControls = controls.filter(({ id }) => id !== target.id);
      restOfControls.forEach((button) => button.classList.remove('active'));
      target.classList.add('active');
   });
};

/* Mobile function */
const carrouselHelperMobile = (
   target, setSlideTitle, setSlideContent, setIsTargetPdf, setShowNavbar
) => {
   setIsTargetPdf(false);
   switch(target.id) {
      case 'step1':
         setSlideTitle(reviewExample[target.id].title);
         setSlideContent(reviewExample[target.id].content);
         setShowNavbar(false);
      break;
      case 'step2':
         setSlideTitle(reviewExample[target.id].title);
         setSlideContent(reviewExample[target.id].content);
         setShowNavbar(false);
      break;
      case 'step3':
         setSlideTitle(reviewExample[target.id].title);
         setSlideContent(reviewExample[target.id].content);
         setShowNavbar(false);
      break;
      case 'media':
         setSlideTitle("Fotografías al momento del proceso del avalúo ");
         setSlideContent(reviewExample[target.id]);
         setShowNavbar(false);
      break;
      case 'pdf':
         setSlideTitle("Ejemplo documento final del avalúo");
         setIsTargetPdf(true);
         setShowNavbar(false);
      break;
      default:
         break;
   };
};

export { carrouselHelper, carrouselHelperMobile }