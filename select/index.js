let isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android()
         || isMobile.BlackBerry()
         || isMobile.iOS()
         || isMobile.Opera()
         || isMobile.Windows()
      );
   }
};

let arrow = document.querySelector('.fas')
let selectContent = document.querySelector('.select-content')
let selectTitle = document.querySelector('.select-title-text')
let text = document.querySelectorAll('.text')

function myClick() {
   arrow.classList.toggle('rotate')
   selectContent.classList.toggle('hidden')
   // console.log(navigator.userAgent.includes('Mobile'));
   // console.log(isMobile.any());
}

text.forEach(e => {
   e.addEventListener('click', function () {
      selectTitle.innerHTML = this.innerHTML
      arrow.classList.toggle('rotate')
      selectContent.classList.toggle('hidden')
   })
})