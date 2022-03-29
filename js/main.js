/* const modal = document.querySelector('.application-wrap'),
   buttons = document.querySelectorAll('.button')

buttons.forEach(btn => {
   btn.addEventListener('click', (event) => {
      modal.classList.toggle('hidden')
   })
}) */

const modal = document.querySelector('.modal'),
   modalButtons = document.querySelectorAll('.modal-button'),
   modalClose = document.querySelector('.modal-closebutton'),
   body = document.querySelector('body')





modalButtons.forEach((item) => {
   item.addEventListener('click', () => {
      modal.style.display = 'grid'
      body.classList.toggle('noscroll')
   })
})

modal.addEventListener('click', (e) => {
   const isModal = e.target.closest('.modal-inner')

   if (!isModal) {
      modal.style.display = 'none'
      body.classList.toggle('noscroll')
   }
})

modalClose.addEventListener('click', () => {
   modal.style.display = 'none'
   body.classList.toggle('noscroll')
})