// Q11) Find average marks

let students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let result = {};

for(let key in students){

    let marks = Object.values(students[key]);

    let total = marks.reduce(function(sum, mark){
        return sum + mark;
    },0);

    result[key] = {
        average: total / marks.length
    };
}

console.log(result);