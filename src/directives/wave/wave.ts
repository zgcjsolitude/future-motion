import { DirectiveBinding } from 'vue'

export const waveAnimate = function (el: HTMLElement, binding: DirectiveBinding) {
  el.addEventListener('click', function(e: MouseEvent) {
    const target = el;
    target.style.position = 'relative';
    target.style.overflow = 'hidden';
  
    const rect = target.getBoundingClientRect();
  
    let ripple = target.querySelector('.global-waves-ripple') as HTMLElement;
    if (!ripple) {
      ripple = document.createElement('span');
      ripple.className = 'global-waves-ripple';
      ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) * 1.5 + 'px';
      target.appendChild(ripple);
  
    } else {
      ripple.className = 'global-waves-ripple'
    }
  
    switch (binding.value) {
      case 'center': {
        ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
        ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
        break
      }
        
      default: {
        ripple.style.top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop + 'px';
        ripple.style.left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft + 'px';
      }
    }
  
    ripple.className = 'global-waves-ripple is-active';
  });
}
