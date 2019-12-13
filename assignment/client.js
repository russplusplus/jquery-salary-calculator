$(document).ready(onReady);

let employees = 0;
let totalSalary = 0;

function onReady(){
    console.log('jquery is runnin yo')

    $('#submitBtn').on('click', handleSubmit);
    $('#employeeTable').on('click', '.deleteBtn', deleteEntry);
}

function handleSubmit(){
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();

    console.log(firstName,lastName,id,title,annualSalary);

    $('#employeeTable').append(
        `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
            <td>
                <button class="deleteBtn btn btn-primary">Delete</button>
            </td>
        </tr>

        `
    );
    
    employees++;
    totalSalary += Number(annualSalary);
    console.log(employees);
    console.log(totalSalary);
    $('#total').empty();
    $('#total').append(`Total Monthly: $${totalSalary/12}`);

}

function deleteEntry(){
    $(this).closest('tr').remove();
}