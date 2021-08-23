// function populatePrintTableOnLoad() {

//     eel.printTableData();

//     eel.expose(populateThePrintTable)
//     function populateThePrintTable(memberDataArray) {

//         console.log(memberDataArray);

//         memberDataArray.ForEach(function (member) {
//             document.getElementById('ul').innerHTML = `<li>${member.Name}</li>`
//         })



//         document.getElementById('print_table_body').innerHTML = ''

//         memberDataArray.forEach(function (memberData) {


//             markup = `<tr>
//               <th scope="row">${memberData.AppID}</th>
//               <td >${memberData.Name}</td>
//               <td >${memberData.Service}</td>
//               <td >${memberData.Mobile}</td>
//               <td >${memberData.Payment}</td>
//               <td >${memberData.Date}</td>
//           </tr>`

//             $("#myPrintTable tbody").prepend(markup);

//         })




//     }

// }

// window.onload = () => {

//     let button = document.getElementById('printshowData')
//     button.click();

// }