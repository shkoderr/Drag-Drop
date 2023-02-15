const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

  item.addEventListener('dragstart', dragstart)
  item.addEventListener('dragend', dragend)

  function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() =>event.target.classList.add('hide'), 0);
  }
  //event.target - это объект, с которым мы взаимодействуем в контексте функции (div item). 
  //Чтобы наш блок сразу не пропадал при применении класса 'hide', обернём его в setTimeout, чтобы данная функция попала в event loop

  function dragend() {
    event.target.className = 'item'    
  }
  //Свойство className отвечает за значение атрибута class элемента, используется только в паре с 'classList', очищает все заданные элементу классы


  //Работаем с placeholders:
  for (const placeholder of placeholders) { //используем цикл for of чтобы на каждой итерации создать переменную и с ней работать
    placeholder.addEventListener('dragover', dragover)   //элемент над плейсхолдером
    placeholder.addEventListener('dragenter', dragenter)  //заходим на его территорию
    placeholder.addEventListener('dragleave', dragleave)  //ушли с него
    placeholder.addEventListener('drop', dragdrop)       //отпустили
  }


  function dragover(event) {
    event.preventDefault()
  }
  //По умолчанию фунция 'dragover' отменят поведение, которое позволяет перетаскивать э-ты, чтобы этого избежать применим метод 'preventDefault'

  function dragenter(event) {
    event.target.classList.add('hovered')
  }

  function dragleave(event) {
    event.target.classList.remove('hovered')
  }

  function dragdrop(event) {
    event.target.append(item)    //Метод Element.append() вставляет узлы или строки с текстом в текущий элемент
    event.target.classList.remove('hovered')
  }

