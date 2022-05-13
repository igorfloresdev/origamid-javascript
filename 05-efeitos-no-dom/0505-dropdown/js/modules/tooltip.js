export default function initToolTip(){
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function onMouseover(event){
    const tooltipbox = criarTooltipBox(this);
    tooltipbox.style.top = event.pageY + 'px';
    tooltipbox.style.left = event.pageX + 'px';
    console.log(event);

    onMouseMove.tooltipbox = tooltipbox;
    onMouseLeave.tooltipbox = tooltipbox;
    onMouseLeave.element = this;

    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove',onMouseMove);
    
  }

  const onMouseLeave = {
    handleEvent(){
      this.tooltipbox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(event){
      this.tooltipbox.style.top = event.pageY + 20 + 'px';
      this.tooltipbox.style.left = event.pageX  + 'px';
    }
  }

  function criarTooltipBox(element){
    const tooltipbox = document.createElement('div');
    const text = element.getAttribute('aria-label')
    tooltipbox.classList.add('tooltip');
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    return tooltipbox;
  }

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', onMouseover);
  });
}

