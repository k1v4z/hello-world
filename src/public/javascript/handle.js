
document.querySelectorAll('.btnDelete').forEach((button) => {
    button.addEventListener('click', async () => {
        if (confirm('Are you sure to delete this user ?')) {
            await fetch(`http://localhost:8080/api/v1/delete/users/${button.dataset.id}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    button.closest("tr").remove();
                })
        } else {
            //nothing
        }
    })
});

function addUser() {
    document.querySelector('.btnAdd').addEventListener('click', async () => {
        const email = document.getElementsByName("email")[0].value;
        const name = document.getElementsByName("name")[0].value;
        const city = document.getElementsByName("city")[0].value;

        await fetch(`http://localhost:8080/api/v1/create?email=${email}&name=${name}&city=${city}`, {
            method: "POST"
        })
            .then(response => response.json())
            .then((data) => {
                alert("Add succeed");
            })
    });
}

addUser();



