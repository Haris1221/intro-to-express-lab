const students = [
    {name: 'John', Pass: true},
    {name: 'Haris', Pass: false},
    {name: 'Andrew', Pass: false}
];

module.exports = {
    getAll: function(){
        return students
    },
    getOne: function (one){
        return students[one]
    }
}