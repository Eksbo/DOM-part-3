'use script' ;
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	console.log(this.value); // выведем содержимое атрибута
//     console.log(this.id);
//     console.log(this.type);
//     console.log(this);
//     console.log(typeof this);
// }

// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. 
// Для обращения у инпуту внутри функции-обработчика используйте объект this. 
// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function a() {this.value = 1 }) ;
// elem.addEventListener('blur', function b()  { this.value = 2 }) ;

// Дана кнопка, значением которой служит число 1.
//  Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. 
// let btn = document.querySelector("#btn") ;
// let sum = 1
// btn.addEventListener('click' ,function func() {
//     this.value = ++ sum ;
//   this.textContent =  this.value ;
//      } ) ;

// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, 
// переберите из циклом и установите текст каждого абзаца в значение 'text'. 
// let p = document.querySelectorAll('#p') ;
// let res = document.querySelector('#res') ;
// let btn = document.querySelector("#btn") ;
// btn.addEventListener('click' , func )
// function func ()
// {
//     console.log(p);
//     console.log(typeof p);
// for (let k of p)
// {
//     console.log(k.textContent);
//     k.textContent = ' Hoo - hoo - hoo';
// }
// };

// Даны абзацы с текстом и кнопка. 
// По нажатию на кнопку запишите в конец текста каждого абзаца 
// его порядковый номер. 
// let p = document.querySelectorAll('#p') ;
// let res = document.querySelector('#res') ;
// let btn = document.querySelector("#btn") ;
// btn.addEventListener('click' , func )
// function func ()
// {
// let sum = 0 
// for (let k of p)
// {
//     console.log(k.textContent);
//     sum ++ ;
//     k.textContent +=' || ' + sum;
// }
// };

//  Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите 
// сумму чисел из инпутов и запишите эту сумму в текст абзаца. 
// let res = document.querySelector('#res') ;
// let btn = document.querySelector("#btn") ;
// let inp = document.querySelectorAll('#inp') ;
// btn.addEventListener('click' , func )
// function func ()
// {
// let sum = 0 
// for (let k of inp)
// {
//     sum += Number(k.value) ;
//   }
// res.textContent = sum;
// };

// Дана следующая функция:
// function func() {
// 	this.value = Number(this.value) + 1;
// }

// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом
//  из наших инпутов выполнялась приведенная выше функция. 
// Даны абзацы с числами. Сделайте так, чтобы по клику на 
// любой абзац его число в нем возводилось в квадрат. 
// let btn = document.querySelector("#btn") ;
// let p = document.querySelectorAll('#p') ;
// function func() 
// {
// this.textContent = Number(this.textContent **2) ;
	
// } ;
// for (let e of p )
// {
//     e.addEventListener('click' , func)
// }



// let btn = document.querySelector("#btn") ;
// let d = document.querySelectorAll('div') ;

// for( let k of d)
// {
//     k.addEventListener('click' , function() { 
// this.style.cursor ='pointer' ;
//         this.textContent ++ ;
//     }) ;
// }


// let button = document.querySelector('#btn');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// 	this.removeEventListener('click', func);
// };

// Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. 
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию. 
// let btn = document.querySelector("#btn") ;
// let link = document.querySelector('#link') ;
// link.addEventListener('click', func ) ;
// function func ( )
// {
//     this.innerHTML += this.href ; 
//     this.removeEventListener( 'click', func) ;
  
// }


// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику
// на эту кнопку ее значение каждый раз увеличивалось на единицу. После того,
//  как значение кнопки достигнет 10 - 
// отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие. 
// let btn = document.querySelector("#btn");
// btn.addEventListener( 'click' , funca ) ;
// let sum = 0 ;
// function funca () 
// {
// sum ++ ;
// btn.textContent = sum ;
// if (sum >=10 ) 
// {
//     btn.removeEventListener( 'click' , funca ) ; 
// }
// };


// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак.
//  Сделайте так, чтобы это добавление происходило лишь по первому нажатию. 

// let p = document.querySelectorAll('#p') ;
// for (let e of p)
// {
//     e.addEventListener('click' , func) ;
// }
// function func () 
// {
//     this.innerHTML += "@";
//     this.removeEventListener('click' , func) ;
// }

// Дан список ul, в каждом пункте которого записано число.
//  Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу. 
// let li = document.querySelectorAll("#li") ;
// for ( let e of li){
//     e.addEventListener( 'click' ,function res(){ this.textContent = Number(this.textContent)+1 ;

//     })
// };

// Модифицируйте предыдущую задачу так, чтобы каждая li 
// увеличивала свое значение только по первому нажатию на нее. 
// let li = document.querySelectorAll("#li") ;
// for ( let e of li){
//     e.addEventListener( 'click' ,function res(){ this.textContent = Number(this.textContent)+1 ;
// this.removeEventListener( 'click' ,res ) ;
//     })
// };

// Модифицируйте предыдущую задачу так,
//  чтобы каждая li увеличивала свое значение только если ее 
//  значение меньше 10. 
// let li = document.querySelectorAll("#li") ;
// for ( let e of li){
//     e.addEventListener( 'click' ,function res(){ this.textContent = Number(this.textContent)+1 ;
//  if ( this.textContent == 10 ) {this.removeEventListener( 'click' ,res ) };
//     })
// };