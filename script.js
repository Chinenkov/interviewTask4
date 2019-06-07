
//Действия по клику
$('.chessboard').on('click', 'td', function (event) {

    const position = $(this).attr('class');
    const letterPosition = +position.charAt(0);
    const nomberPosition = +position.charAt(1);

    $(".active").removeClass("active");

    //Гоняем ходы по циклу. Две клетки в одну сторону и две в другую
    for (let i = -2; i < 3; i++) {

        //Исключаем выходы за доску
        if (letterPosition + i > 0 && letterPosition + i < 9 && i != 0) {

            //Так же, но уже по вертикали
            for (let j = -2; j < 3; j++) {

                //Исключаем выходы за доску и диагональ
                if (nomberPosition + j > 0 && nomberPosition + j < 9 && j != 0 && Math.abs(i) != Math.abs(j)) {

                    let newPosition = "." + (letterPosition + i) + (nomberPosition + j);
                    $(newPosition).addClass("active");

                }

            }


        }

    }

})

