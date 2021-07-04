const dataTable = document.getElementById('newTable');

function getTable() {
    const x = new XMLHttpRequest();
    x.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    x.send();
    x.addEventListener('load', () => {
        const data = JSON.parse(x.responseText);
        addfirstRow(x);
        data.forEach(addRow);
        console.log(data);

    });
}

const requiredFields = [
    'id',
    'email',
    'name',
    'body'
];


const btn = document.getElementById('butt');

btn.addEventListener('click', () => {
    getTable()
})


function addRow(data) {
    const row = dataTable.insertRow();
    requiredFields.forEach(cb => {
        const td = row.insertCell();
        td.innerText = data[cb];
    })
}

function addfirstRow(x) {
    const row = dataTable.insertRow();
    requiredFields.forEach(cb => {
        const td = row.insertCell();
        td.innerText = cb;
    })

}