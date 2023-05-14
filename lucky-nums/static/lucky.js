let nameInput = $("#name")
let emailInput = $("#email")
let colorInput = $("#color")
let yearInput = $("#year")
const resultDiv = $("#lucky-results")
let wef=1;
/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault()
    console.log("sdssdfsdfsdfsd")
    const res = await axios.post("http://127.0.0.1:5000/api/get-lucky-num",
    {
        "name": nameInput.val(),
        "email": emailInput.val(),
        "color": colorInput.val(),
        "year": yearInput.val()
    })
    if(res.status == 201)
    {
        resultDiv.text(
            `Your lucky number is ${res.data.num.num} (${res.data.num.fact}).\n
            Your birth year (${res.data.year.fact}) fact is ${res.data.year.num}.
            `
        )
        $("#name-err").text("")
        $("#year-err").text("")
        $("#email-err").text("")
        $("#color-err").text("")
    }
    else
    {
        $("#name-err").text(res.data.name)
        $("#year-err").text(res.data.year)
        $("#email-err").text(res.data.email)
        $("#color-err").text(res.data.color)
    }
    console.log(res)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
}


$("#lucky-form").on("submit", processForm);
