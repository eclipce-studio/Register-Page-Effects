let btn = document.getElementById('btn'); //тут я обращаюсь к кнопке, когда меняеться цвет фона, меняеться и он
let txt = document.getElementById('txt'); //Тут тоже самое и с 'btn'
function changeColor(color){ //Тут я задал функцию изменить цвет, но что если можно задать другую если конечно знаешь? :)//
    document.body.style.background = color //кароч тут не работает коментраии 'html'//
    btn.style.background = color
    txt.style.borderColor = color

    document.querySelectorAll('span').forEach(function (item) //Эти функции позволяют переходить окруженности появлятся там куда укажет курсор.
    {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}