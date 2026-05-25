// 1から5までループ
for (let i = 1; i <= 5; i++) {
    console.log("ループ回数: " + i);
  }

  function showText() {

    const text = document.getElementById("textbox").value;
  
    // 空欄チェック
    if (text === "") {
      alert("入力欄が空です。");
      return;
    }
  
    const result = document.getElementById("result");
  
    result.innerHTML = text;
  
    result.classList.toggle("highlight");
  
    const table = document.getElementById("textTable");
  
    const rowCount = table.rows.length - 1;
  
    if (rowCount >= 3) {
      table.deleteRow(1);
    }
  
    const row = table.insertRow();
  
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  
    number++;
  
    cell1.innerHTML = number;
    cell2.innerHTML = text;
  
    cell3.innerHTML =
      '<button onclick="deleteRow(this)">削除</button>';
  
    document.getElementById("textbox").value = "";
  
    // 3回追加したらボタン非表示
    if (number >= 3) {
      document.getElementById("showButton").style.display = "none";
    }
  }

  function deleteRow(button) {

    // 行取得
    const row = button.parentNode.parentNode;
  
    // 行削除
    row.remove();
  
    // カウント減少
    number--;
  
    // 3未満なら表示ボタンを再表示
    if (number < 3) {
      document.getElementById("showButton").style.display = "inline-block";
    }
  }

  function deleteRow(button) {

    // 行取得
    const row = button.parentNode.parentNode;
  
    // 行削除
    row.remove();
  
    // 件数を減らす
    addCount--;
  
    // 3件未満なら「表示」ボタンを再表示
    if (addCount < 3) {
      document.getElementById("showButton").style.display = "inline-block";
    }
  }