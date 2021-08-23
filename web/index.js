
// Function for populating Table on click
function populateTableOnLoad() {




  eel.showData();
  eel.expose(populateTheTable)
  function populateTheTable(memberDataArray) {


    if (memberDataArray.length == 0) {
      document.getElementById('deleteAll').innerHTML = ``
    }
    else {
      document.getElementById('deleteAll').innerHTML = `<button type="button" class="btn btn-outline-danger mx-3" onclick="deleteAll()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
          </path>
          <path fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
          </path>
      </svg>
      Delete All
  </button>`
    }

    document.getElementById('table_body').innerHTML = ''

    document.getElementById('app_id').value = ''
    document.getElementById('name').value = ''
    document.getElementById('service').value = ''
    document.getElementById('mobile').value = ''


    memberDataArray.forEach(function (memberData) {


      markup = `<tr >
          <th scope="row">${memberData.AppID}</th>
          <td >${memberData.Name}</td>
          <td >${memberData.Service}</td>
          <td >${memberData.Mobile}</td>
          <td >${memberData.Payment}</td>
          <td >${memberData.Date}</td>
          <td class="d-flex justify-content-around">
              <button class="svg__button" id="${memberData.AppID}" onclick="editMember(this.id)"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path
                          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg></button>
              <button onclick="deleteMember(this.id)" id="${memberData.AppID}" class="svg__button"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg></button>

          </td>
      </tr>`

      $("#myTable tbody").prepend(markup);

    })
  }

}

// Auto click show button

window.onload = () => {

  let button = document.getElementById('showData')
  button.click();

}




// Function for adding member
function addMember() {

  let app_id = document.getElementById('app_id').value;
  let name = document.getElementById('name').value;
  let service = document.getElementById('service').value;
  let mobile = document.getElementById('mobile').value;
  let date = document.getElementById('date').value;
  let payment = $("input[type='radio'][name='add']:checked").val();
  date.replace(/\s+/g, ' ').trim()
  if (app_id == '', name == '', date == '', service == '') {
    msgToUser('All fields are required', 'danger');
    return false;
  }
  else {

    let memberData = {
      app_id: app_id,
      name: name,
      service: service,
      mobile: mobile,
      date: date,
      payment: payment
    }


    eel.memberInfo(memberData)


    eel.expose(populateTable)
    function populateTable(memberDataArray) {

      if (memberDataArray.length == 0) {
        document.getElementById('deleteAll').innerHTML = ``
      }
      else {
        document.getElementById('deleteAll').innerHTML = `<button type="button" class="btn btn-outline-danger mx-3" onclick="deleteAll()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
            </path>
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
            </path>
        </svg>
        Delete All
    </button>`
      }

      memberDataArray.forEach(function (memberData) {


        markup = `<tr>
          <th scope="row">${memberData.AppID}</th>
          <td >${memberData.Name}</td>
          <td >${memberData.Service}</td>
          <td >${memberData.Mobile}</td>
          <td >${memberData.Payment}</td>
          <td >${memberData.Date}</td>
          <td class="d-flex justify-content-around">
              <button class="svg__button" id="${memberData.AppID}" onclick="editMember(this.id)"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path
                          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg></button>
              <button onclick="deleteMember(this.id)" id="${memberData.AppID}" class="svg__button"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg></button>

          </td>
      </tr>`

        $("#myTable tbody").prepend(markup);

      })


      document.getElementById('app_id').value = ''
      document.getElementById('name').value = ''
      document.getElementById('service').value = ''
      document.getElementById('mobile').value = ''



    }

    msgToUser('Member added successfully', 'success')

  }
}


// Show msg function 

function msgToUser(msg, Bclass) {
  document.getElementById('msgToUser').innerHTML = ` <h4 class="text-${Bclass}">${msg}</h4>`

  setTimeout(function () {
    document.getElementById('msgToUser').innerHTML = ``
  }, 2500)
}

// Delete a member

function deleteMember(id) {

  eel.deleteData(id)
  eel.showData()
  msgToUser('Member deleted successfully', 'success')

}


// Edit member info

function editMember(id) {
  eel.editData()

  eel.expose(fillFields)
  function fillFields(memberDataArray) {

    memberDataArray.forEach((member) => {

      if (member.AppID == id) {
        let memberToEdit = member

        let app_id = document.getElementById('app_id');
        let name = document.getElementById('name');
        let service = document.getElementById('service');
        let mobile = document.getElementById('mobile');
        let date = document.getElementById('date');
        // let payment = $("input[type='radio'][name='add']:checked")

        app_id.value = ''
        name.value = ''
        service.value = ''
        mobile.value = ''
        date.value = ''


        let app_id_main_div = document.getElementById('app_id_div')
        app_id_main_div.innerHTML = `<input class="form-control" type="number" id="app_id"
        placeholder="Application ID" value="${memberToEdit.AppID}" required disabled>`
        // app_id.value = memberToEdit.AppID
        name.value = memberToEdit.Name
        service.value = memberToEdit.Service
        mobile.value = memberToEdit.Mobile
        date.value = memberToEdit.Date

        let checkboxValue = memberToEdit.Payment

        if (checkboxValue == 'Paid') {
          document.getElementById("paid").checked = true;
          document.getElementById("unpaid").checked = false;
        }
        else if (checkboxValue == 'Unpaid') {
          document.getElementById("unpaid").checked = true;
          document.getElementById("paid").checked = false;
        }



        let member_button = document.getElementById('member-button')
        member_button.innerHTML = `<button class="add__member__button"  onclick="editThisMember(this.id)"><svg
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z">
        </path>
    </svg>
    Edit Member
</div></button>`
      }




    })
  }
}



// Fro editMember
function editThisMember(memberToEdit) {

  let app_id = document.getElementById('app_id').value;
  let name = document.getElementById('name').value;
  let service = document.getElementById('service').value;
  let mobile = document.getElementById('mobile').value;
  let date = document.getElementById('date').value;
  let payment = $("input[type='radio'][name='add']:checked").val();


  if (app_id == '', name == '', date == '', service == '') {
    msgToUser('All fields are required', 'danger');
    return false;
  }
  else {

    let memberData = {
      app_id: app_id,
      name: name,
      service: service,
      mobile: mobile,
      date: date,
      payment: payment
    }

    eel.editThisMember(memberData)

    let member_button = document.getElementById('member-button')
    member_button.innerHTML = `<button class="add__member__button" onclick="addMember()"><svg
        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z">
        </path>
    </svg>
    Add a member
</div></button>`

    let app_id_main_div = document.getElementById('app_id_div')
    app_id_main_div.innerHTML = ` <input class="form-control" type="number" id="app_id"
    placeholder="Application ID" required>`



    msgToUser('Member Edited Successfully', 'success')

  }




}






// Hanle Print Function

function printPage() {

  // Handle error on print page
  eel.expose(errorOnPrintPage)
  function errorOnPrintPage(msg, Bclass) {

    document.getElementById('errorOnPrintPage').innerHTML = `<h4 class=${Bclass}>${msg}</h4> `
  }

  try {


    let fromdate = document.getElementById('fromdate').value
    let todate = document.getElementById('todate').value

    let dateDict = {
      fromdate: fromdate,
      todate: todate
    }


    eel.getDataByDate(dateDict)
    eel.expose(datePopulate)
    function datePopulate(memberDataArray) {
      document.getElementById('print_table_body').innerHTML = ''


      memberDataArray.forEach(function (memberData) {


        markup = `<tr >
            <th scope="row">${memberData.AppID}</th>
            <td >${memberData.Name}</td>
            <td >${memberData.Service}</td>
            <td >${memberData.Mobile}</td>
            <td >${memberData.Payment}</td>
            <td >${memberData.Date}</td>
        </tr>`

        $("#printTable tbody").prepend(markup);

      })
    }

  } catch (error) {
    eel.printTableData()

    eel.expose(populateThePrintTable)
    function populateThePrintTable(memberDataArray) {

      document.getElementById('print_table_body').innerHTML = ''


      memberDataArray.forEach(function (memberData) {


        markup = `<tr style="page-break-before: always">
            <th scope="row">${memberData.AppID}</th>
            <td >${memberData.Name}</td>
            <td >${memberData.Service}</td>
            <td >${memberData.Mobile}</td>
            <td >${memberData.Payment}</td>
            <td >${memberData.Date}</td>
        </tr>`

        $("#printTable tbody").prepend(markup);

      })
    }
  }



}

// Actual print function on print modal
function printNow() {



  var originalContents = document.body.innerHTML;
  var printReport = document.getElementById('print_div').innerHTML;
  document.body.innerHTML = printReport;
  window.print();
  document.body.innerHTML = originalContents;
  document.location.reload()


}


// Handeling Radio buttons 

$('input[type=radio][name=radiodate]').change(function () {
  if (this.value == 'all') {
    document.getElementById('date_container').innerHTML = ''
  }
  else if (this.value == 'choose') {
    document.getElementById('date_container').innerHTML = `<div>
    <input class="form-control" id="fromdate" name="date" type"text" value="" placeholder="From Date"
        required>
  </div>
  <div>
    <input class="form-control" id="todate" name="date" type="text" placeholder="To Date" required>
  </div>`





  }
});

function deleteAll() {
  try {
    eel.deleteAll()
    msgToUser('Data deleted successfully', 'success')
  } catch (error) {
    msgToUser('Cannot deleted data', 'danger')

  }
}