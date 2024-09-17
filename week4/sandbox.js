let student_template = {
    'name': '',
    'lastname': "",
    'fathersname': "",
    'id': 0,
    'age': 0,
    'city': '',
    'phone_number': '',
    'address': ''
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
    let value = prompt('enter the new value: ')
    let user_data = student_data[id]
    try {
        user_data[key] = value
    } catch (err) {
        alert(err.message)
        return null
    }
    alert('STUDENT UPDATED!')
}

function delete_user(id) {
    let user_data = student_data[id]
    try {
        delete user_data[id]
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
    let out_lessons = []
    // for (let index in lessons){
    //     out_lessons.push(`${index}- ${lessons[index]} \n`)
    // }
    out_lessons = lessons.map((lesson, index) => `${index} - ${lesson} \n`);

    let user_index = prompt('\n'.join(out_lessons))
    lessons.id[user_index].point = prompt('new value of point: ')
    alert('STUDENT POINT UPDATED!')
}

function delete_lesson(id) {
    let lessons = lessons_data[id]
    let out_lessons = []
    // for (let index in lessons){
    //     out_lessons.push(`${index}- ${lessons[index]} \n`)
    // }
    out_lessons = lessons.map((lesson, index) => `${index} - ${lesson} \n`);

    let user_index = prompt('\n'.join(out_lessons))
    lessons_data.id.splice(user_index, 1)
    alert('STUDENT POINT DELETED!')
}

function make_average(id) {

}

function average(id) {
    let sum = lessons_data[id].reduce((sum, c) => sum + (c.point * c.factor), 0) //I do it with one reduce later
    let len = lessons_data[id].reduce((factors, c) => factors + c.factor, 0)     //I do it with one reduce later
    alert(`Average is : ${sum / len}`)                                          // :-)
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

    student_data.map((student_id) => {
        let {sum, len} = lessons_data[student_id].reduce((acc, c) => {
            acc.sum += c.point * c.factor;
            acc.len += c.factor;
            return acc;
        }, {sum: 0, len: 0});
        student_points[student_id] = sum / len
    })
    const sortable = Object.entries(student_points).sort(([, a], [, b]) => b - a);
    let final_sort = sortable.map((element) => `${element[0]['name']}: ${element[1]}`)
    alert('\n'.join(final_sort))
}

function find_fail(min_point) {
    let student_points = {}

    student_data.filter((student_id) => {
        let {sum, len} = lessons_data[student_id].reduce((acc, c) => {
            acc.sum += c.point * c.factor;
            acc.len += c.factor;
            return acc;
        }, {sum: 0, len: 0});
        let average = sum / len
        if (average < min_point) {
            student_points[student_id] = average
        }
    })
}

