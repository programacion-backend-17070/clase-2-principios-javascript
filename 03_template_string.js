const user = { // object
    name: 'Eduardo Velazquez',
    nickname: 'lalomx',
    job: 'Fulstack Developer',
    location: 'Mexico'
}

const markup = `
 <div class="user">
    <h2>
        ${user.name}
    </h2>
    <p class="nickname">${user.nickname}</p>
    <p class="location">${user.location}</p>
 </div>
`;

console.log(markup)