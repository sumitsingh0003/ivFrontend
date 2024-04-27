import AOS from 'aos';
import Sticky from 'sticky-js';
AOS.init({
  once: true,
  disable: 'phone',
  duration: 700,
  easing: 'ease-out-cubic',
});
// eslint-disable-next-line
const sticky = new Sticky('[data-sticky]');

