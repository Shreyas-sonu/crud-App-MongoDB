// let base_URL = "http://localhost:5000/api";
// let form = document.querySelector("form");

// form.addEventListener("submit", async e => {
//   e.preventDefault();
//   let emp_id = e.target[0].value;
//   let emp_name = e.target[1].value;
//   let emp_email = e.target[2].value;
//   let emp_phone = e.target[3].value;
//   let emp_exp = e.target[4].value;
//   let emp_edu = e.target[5].value;
//   let emp_gender = e.target[6].value;
//   let emp_city = e.target[7].value;
//   let emp_designation = e.target[8].value;
//   let emp_salary = e.target[9].value;
//   let emp_skills = e.target[10].value;

//   let payload = {
//     emp_id,
//     emp_name,
//     emp_email,
//     emp_phone,
//     emp_exp,
//     emp_edu,
//     emp_gender,
//     emp_city,
//     emp_designation,
//     emp_salary,
//     emp_skills,
//   };
//   await window.fetch(`http://localhost:5000/api/create-emp`, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// });

let fetchData = async () => {
  let data = await window.fetch(`http://localhost:5000/api/emp-all`);
  let { payload } = await data.json();
  let output = "";
  for (let emp of payload) {
    output += ` 
        <div data-id=${emp._id}>
            <h1>${emp.emp_name}</h1>
        </div>
    
      `;
  }
  document.querySelector("#template").innerHTML = output;
};
fetchData();
