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
      alert(this.responseText);
      //document.getElementById("createForm").dispatchEvent(new Event("submit"));
    }
  });

  xhr.open("POST", "http://localhost:2403/computers");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  onRead();
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

  var deleteButton = document.createElement("td");
  deleteButton.innerHTML =
    "<button class='btn'><i class='fa fa-trash'></i></button>";
  row.appendChild(deleteButton);

  return row;
}

(function() {
  document.getElementById("addComp").addEventListener("click", onCreate);
  document.getElementById("refresh").addEventListener("click", onRead);
  onRead();
})();
