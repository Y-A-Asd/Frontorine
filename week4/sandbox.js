let student_template = {
    'name': '',
    'lastname': "",
    'fathersname': "",
    'id': 0,
    // 'age': 0,
    // 'city': '',
    // 'phone_number': '',
    // 'address': ''
}

let lessons_template = {
    'name': '',
    'factor': 0,
    'point': 0,
}


let student_data = {}
let lessons_data = {}

function new_user(student_template) {

    const validators = {
        id: input => !isNaN(input) && input.trim() !== '',
        age: input => !isNaN(input) && input > 0 && input < 120,
        phone_number: input => /^\d{10,15}$/.test(input),
        name: input => input.trim() !== '',
        lastname: input => input.trim() !== '',
        fathersname: input => input.trim() !== '',
        city: input => input.trim() !== '',
        address: input => input.trim().length >= 5
    };

    let new_student = {...student_template}
    for (let key in new_student) {
        let valid = false;
        let input = null
        while (!valid) {
            input = prompt(`Please enter ${key}:`);
            valid = validators[key] ? validators[key](input) : true;

            if (!valid) {
                alert(`${key} is invalid! Please try again.`);
            }
        }

        new_student[key] = input;
    }

    student_data[new_student['id']] = new_student;
    lessons_data[new_student['id']] = [];
    alert('STUDENT CREATED!');

}

function edit_user(id) {
    let key = prompt('enter the field you want to edit: ')

    let user_data = student_data[id]
    // try {
    //     user_data[key] = value
    // } catch (err) {
    //     alert(err.message)
    //     return null
    // }
    // alert('STUDENT UPDATED!')

    // !!user_data[key] ? user_data[key] = value & alert('STUDENT UPDATED!') : null
    if (!!user_data[key]) {
        user_data[key] = prompt('enter the new value: ')
        alert('STUDENT UPDATED!')
    } else {
        alert('FIELD NOT FOUND!')
    }
}

function delete_user(id) {
    try {
        delete student_data[id]
    } catch (err) {
        alert(err.message)
        return null
    }
    alert('STUDENT DELETED')
}

function add_lesson(lessons_template, id) {
    let new_lesson = {...lessons_template}
    for (let i in new_lesson) {
        new_lesson[i] = prompt(`put ${i}`)
    }
    lessons_data[id].push(new_lesson)
    alert('STUDENT CREATED!')
}

function edit_lesson(id) {
    let lessons = lessons_data[id]
    // console.log(lessons)
    let out_lessons = []
    // for (let index in lessons){
    //     out_lessons.push(`${index}- ${lessons[index]} \n`)
    // }
    out_lessons = lessons.map((lesson, index) => `${index} - ${lesson.name} \n`);

    let user_index = +prompt(out_lessons.join('\n'))
    lessons[user_index].point = prompt('new value of point: ')
    alert('STUDENT POINT UPDATED!')
}

function delete_lesson(id) {
    let lessons = lessons_data[id]
    let out_lessons = []
    // for (let index in lessons){
    //     out_lessons.push(`${index}- ${lessons[index]} \n`)
    // }
    out_lessons = lessons.map((lesson, index) => `${index} - ${lesson.name} \n`);

    let user_index = prompt(out_lessons.join('\n'))
    lessons_data[id].splice(user_index, 1)
    alert('STUDENT POINT DELETED!')
}

function average(id) {
    let sum = lessons_data[id].reduce((sum, c) => sum + (c.point * c.factor), 0) //I do it with one reduce later
    console.log(sum)
    let len = lessons_data[id].reduce((factors, c) => factors + Number(c.factor), 0)     //I do it with one reduce later
    console.log(len)
    alert(`Average is : ${sum / len}`)        // :-)
}

function list_of_students() {
    let student_points = {}
    // for (let student_id in student_data) {
    //     let {sum, len} = lessons_data.student_id.reduce((acc, c) => {
    //         acc.sum += c.point * c.factor;
    //         acc.len += c.factor;
    //         return acc;
    //     }, {sum: 0, len: 0});
    //     student_points.student_id = sum / len
    // }

    Object.keys(student_data).map((student_id) => {
        let {sum, len} = lessons_data[student_id].reduce((acc, c) => {
            acc.sum += c.point * c.factor;
            acc.len += Number(c.factor);
            return acc;
        }, {sum: 0, len: 0});
        student_points[student_id] = sum / len
    })
    const sortable = Object.entries(student_points).sort(([, a], [, b]) => b - a);
    let final_sort = sortable.map(([id, avg]) => `${student_data[id]['name']}: ${avg}`)
    alert(final_sort.join("\n"))
}

function find_fail(min_point) {
    let failed = Object.keys(student_data).filter((student_id) => {
        let {sum, len} = lessons_data[student_id].reduce((acc, c) => {
            acc.sum += c.point * c.factor;
            acc.len += Number(c.factor);
            return acc;
        }, {sum: 0, len: 0});
        let average = sum / len
        return average < min_point
    }).map(student_id => student_data[student_id].name);

    // let failed_students = []
    // failed.forEach((id) => {
    //     failed_students.push(student_data[id].name)
    // })
    // alert(failed_students)

     alert(failed)
}

function menu() {
    let options = [
        'new_user(student_template)',
        'edit_user(+prompt("id: "))',
        'delete_user(+prompt("id: "))',
        'add_lesson(lessons_template,+prompt("id: "))',
        'edit_lesson(+prompt("id: "))',
        'delete_lesson(+prompt("id: "))',
        'average(+prompt("id: "))',
        'list_of_students()',
        'find_fail(+prompt("put min point: "))',
    ]
    while (true) {
        let menu_list = ('1. CREATE USER\n2. EDIT USER\n3. DELETE USER\n' +
            '4. ADD LESSON\n5. EDIT LESSON\n6. DELETE LESSON\n' +
            '7. GET AVERAGE\n8. LIST OF STUDENT\n9. FIND FAILED STUDENT\n')
        let user_option = +prompt(menu_list)
        if (isNaN(user_option) || user_option > 9 || user_option < 1) {
            alert('WRONG INPUT')
            alert('FLATLIFE :-)')
            return
        }
        let callback = options[user_option - 1]
        // alert(callback)
        eval(callback)
    }
}

menu()