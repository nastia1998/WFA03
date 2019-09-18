function onCreate(ev) {
  ev.preventDefault();

  var data = JSON.stringify({
    manufacturer: String(document.getElementById("manufacturer").value),
    processor: String(document.getElementById("processor").value),
    hardDiskSize: String(document.getElementById("hardDisk").value),
    numOfProcessorCores: String(document.getElementById("numOfCores").value)
  });

  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
    }
  });

  xhr.open("POST", "http://localhost:2403/computers");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  onRead();
  $("#myModal").modal("hide");
}

function onRead() {
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      result = JSON.parse(this.response);
      var tbody = document.getElementById("tbody");
      tbody.innerHTML = "";
      result.map(function(nthComp) {
        tbody.appendChild(parseCompToTableRow(nthComp));
      });

      var table = document.getElementById("tbody").parentElement;
      table.replaceChild(tbody, document.getElementById("tbody"));
      tbody.id = "tbody";
    }
  });

  xhr.open("GET", "http://localhost:2403/computers");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}

function parseCompToTableRow(Comp) {
  var row = document.createElement("tr");

  row.addEventListener("dblclick", openUpdateModal);

  id = document.createElement("th");
  id.innerText = Comp["id"];
  row.appendChild(id);

  manufacturer = document.createElement("td");
  manufacturer.innerText = Comp["manufacturer"];
  row.appendChild(manufacturer);

  processor = document.createElement("td");
  processor.innerText = Comp["processor"];
  row.appendChild(processor);

  hardDiskSize = document.createElement("td");
  hardDiskSize.innerText = Comp["hardDiskSize"];
  row.appendChild(hardDiskSize);

  numOfProcessorCores = document.createElement("td");
  numOfProcessorCores.innerText = Comp["numOfProcessorCores"];
  row.appendChild(numOfProcessorCores);

  var deleteTd = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.id = id.innerHTML;
  deleteBtn.className = "btn";
  deleteBtn.innerHTML = "<i class='fa fa-trash '></i>";
  deleteBtn.addEventListener("click", onDelete);
  deleteTd.appendChild(deleteBtn);
  row.appendChild(deleteTd);

  return row;
}

function openUpdateModal(ev) {
  $("#updateModal").modal();
  document.getElementById("updComp").value = ev.target.closest(
    "tr"
  ).childNodes[0].innerHTML;
  document.getElementById("updManufacturer").value = ev.target.closest(
    "tr"
  ).childNodes[1].innerHTML;
  document.getElementById("updProcessor").value = ev.target.closest(
    "tr"
  ).childNodes[2].innerHTML;
  document.getElementById("updHardDisk").value = ev.target.closest(
    "tr"
  ).childNodes[3].innerHTML;
  document.getElementById("updNumOfCores").value = ev.target.closest(
    "tr"
  ).childNodes[4].innerHTML;
}

function onUpdate(ev) {
  ev.preventDefault();
  console.log(ev.target.value);

  var data = JSON.stringify({
    manufacturer: String(document.getElementById("updManufacturer").value),
    processor: String(document.getElementById("updProcessor").value),
    hardDiskSize: String(document.getElementById("updHardDisk").value),
    numOfProcessorCores: String(document.getElementById("updNumOfCores").value)
  });
  console.log(data);
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
    }
  });

  xhr.open("PUT", "http://localhost:2403/computers/" + ev.target.value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
  onRead();
  $("#updateModal").modal("hide");
  location.reload();
}

function onDelete(ev) {
  console.log("delete");
  ev.preventDefault();
  var compID = ev.target.closest("button").id;
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
    }
  });

  xhr.open("DELETE", "http://localhost:2403/computers/" + compID);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
  onRead();
  location.reload();
}

(function() {
  document.getElementById("addComp").addEventListener("click", onCreate);
  document.getElementById("updComp").addEventListener("click", onUpdate);
  document.getElementById("refresh").addEventListener("click", onRead);
  onRead();
})();
