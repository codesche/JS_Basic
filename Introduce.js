// 나를 프로그래밍 언어로 표현하자면?
const minsung = {
    // key(property),  속성 : value (행동 메서드)
    name: {
        first: 'min-sung',
        last: 'ha',
    },
    age: 12,
    gender: 'male',
    introduce: function(guest) {
        return 'hello '  + guest + ' my name is minsung'
    },

    hobby: ['youtube', 'football']
}

console.log(minsung['name']['first']);
console.log(minsung.name.last);
console.log(minsung.age);
console.log(minsung.introduce('ha'));
