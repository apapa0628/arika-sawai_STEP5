// 1から5までループ
for (let i = 1; i <= 5; i++) {
    console.log("ループ回数: " + i);
  }
  
  // 背景色配列
   const colors = ["lightblue", "lightgreen", "lightcoral"];

   let colorIndex = 0;

   // データ番号
   let number = 0;

   function refreshTable() {
    const table = document.getElementById("textTable");
  
    for (let i = 1; i < table.rows.length; i++) {
      table.rows[i].cells[0].innerHTML = i;
    }
  
    number = table.rows.length - 1;
    if (number >= 3) {
      document.getElementById("showButton").style.display = "none";
    } else {
      document.getElementById("showButton").style.display = "inline-block";
    }
  }
  
  function showText() {
    const text = document.getElementById("textbox").value;
  
    if (text === "") {
      alert("入力欄が空です。");
      return;
    }
  
    const result = document.getElementById("result");
    result.innerHTML = text;
    result.classList.toggle("highlight");
  
    const table = document.getElementById("textTable");
    if (table.rows.length - 1 >= 3) {
      table.deleteRow(1);
    }
  
    const row = table.insertRow();
    const cell1 = row.insertCell(0); 
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  
    cell2.innerHTML = text;
    cell3.innerHTML = '<button onclick="deleteRow(this)">削除</button>';
    refreshTable();
  
    document.getElementById("textbox").value = "";
  }
  
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();

    number--;

const result = document.getElementById("result");
result.innerHTML = "";
    
    refreshTable();
  }  
   // 背景色変更
   function changeBackground() {

     document.body.style.backgroundColor = colors[colorIndex];

     colorIndex++;

     // 循環
     if (colorIndex >= colors.length) {
       colorIndex = 0;
     }
   }