import '@testing-library/jest-dom/extend-expect';
class IntersectionObserver {
   observe() {
      return null;
   }

   unobserve() {
      return null;
   }

   disconnect() {
      return null;
   }
}

window.IntersectionObserver = IntersectionObserver;
