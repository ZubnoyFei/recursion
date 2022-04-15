<!--Функция возведения в степень -->


/*Первый вариант*/
/*
function pow (x, n){
    let result = 1;

    for(let i = 0; i < n; i++){
        result *= x; // It's the same as result = x*result
    }
    return result;
}
*/

/*Второй вариант*/
// function pow (x, n) {
//     if(n === 1){
//         return x;
//     } else {
//         return x*pow(x,-1)
//         /*
//         Возьмем вариант, когда приходит две двойки. Вместо икса становится двойка, и мы её умножаем на результат возведения двойки на n-1.
//         То есть во второй аргумент приходит единица
//
//          */
//     }
// }
//
// pow(2,1)//2
// pow(2, 2)// 4 Первый аргумент-это число, которое мы возводим, второй аргумент-степень, в которую возводим.
// pow(2,3)//8


let students = {
    js: [{
        name: 'John',
        progress: 100
    },{
        name: 'Ivan',
        progress: 60
    }],
  html: {
        basic: [{
            name: 'Peter',
            progress:20
        },{
            name: 'Ann',
            progress: 18,
        }],

      pro: [{
            name: 'Sam',
          progress: 10
      }],
      semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
      }
  }
};


/*We have a task to calculate the general progress from all courses. We can do it with cycle or recursion*/

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;
    /*При помощи цикла мы должны зайти в каждое свойство внутри и посчитать данные*/
    for (let course of Object.values(data)) { //Мы объект превращаем в массив со значениями. Мы перебираем массив и считаем количество студента
        if (Array.isArray(course)) {
            students += course.length;// We calculate the amount of students

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;//Мы перебираем каждого студента, вытаскиваем его прогресс и суммируем их в кучу;
            }
        } else { //Если нам приходит объект,а не массив,выполняется эта часть кода
            for (let subCourse of Object.values(course)) {// Мы рассматриваем не весь объект, а только значения объекта html
                students += subCourse.length;// We calculate the amount of students

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;//Мы перебираем каждого студента, вытаскиваем его прогресс и суммируем их в кучу;
                }
            }
        }
    }
        return total / students;

}


//console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data){
    if (Array.isArray(data)) {
     let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else{
        let total = [0, 0];
        for(let subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData);// Таким образом каждый раз запускается рекурсия и она запускается до тех пор, пока не дойдет до базы
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/ result[1]);


