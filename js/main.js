
{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
      document.getElementById(clickedItem.dataset.pass).classList.add('active');
    });
  });
}

{
  function checkForm(id){
    var textValue = document.getElementById(id);
      var str = textValue.value;
      while(str.match(/[^A-Z^a-z\d\-]/))
      {
          str=str.replace(/[^A-Z^a-z\d\-]/,"");
      }
      textValue.value=str;
  }
}

{
  function pass_clear(){
    var clear;
    clear = document.getElementById('text_top');
    clear.value='';
    
    clear = document.getElementById('text_bottom');
    clear.value='';

    clear = document.getElementById('text_length');
    clear.value='1';

    clear = document.getElementsByName('text_kind');
    clear[0].checked = true;

    clear = document.getElementsByName('num_kind');
    clear[0].checked = true;
  }
}

{
  function name_clear(){
    var clear;
      clear = document.getElementById('name');
      clear.value='';

      clear = document.getElementsByName('name_position');
      clear[0].checked = true;

    clear = document.getElementsByName('name_type');
    clear[0].checked = true;
  }
}

{
  function change_button(){
    const menuItems = document.querySelectorAll('.menu li a');
    console.log(menuItems);
    if(menuItems[0].className == "active"){
      create_pass();
    }else{
      create_name();
    }
  }
}

{
  function create_pass(){
    var pass_length, text_kinds, text_kinds_len, text_kind_value, num_kinds, num_kinds_len, num_kind_value, create_text_kind, create_num_kind, unit, unit_len, create, top, bottom;
  
    pass_length = document.getElementById('text_length').value;
    text_kinds = document.getElementsByName('text_kind');
    num_kinds = document.getElementsByName('num_kind');
    top = document.getElementById('text_top').value;
    bottom = document.getElementById('text_bottom').value;
    text_kinds_len = text_kinds.length;
    text_kind_value = '';
    for (var i = 0; i < text_kinds_len; i++){
      if (text_kinds.item(i).checked){
        text_kind_value = text_kinds.item(i).value;
      }
    }

    num_kinds_len = num_kinds.length;
    num_kind_value = '';
    for (i = 0; i < num_kinds_len; i++){
      if (num_kinds.item(i).checked){
        num_kind_value = num_kinds.item(i).value;
      }
    }
    // console.log(pass_length, text_value, num_value);

    // ????????????????????????????????????????????????
    if(text_kind_value == 2){
      create_text_kind = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }else if(text_kind_value == 1){
      create_text_kind = "abcdefghijklmnopqrstuvwxyz";
    }else {
      create_text_kind = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(num_kind_value == 1){
      create_num_kind = "0123456789"
    }else{
      create_num_kind = "";
    }

    unit = create_text_kind + create_num_kind;
    unit_len = unit.length;
    create = "";
    for(i=0; i<pass_length; i++){
      create += unit[Math.floor(Math.random()*unit_len)];
    }
    if(top != ''){
      create = top + create;
    }
    if(bottom != ''){
      create = create + bottom;
    }
    document.getElementById('ans').value = create;
  }
}

{
  function create_name(){
    var pos, idx, word, idx1, result, word_type, arr ,checkValue, checkValue1;
    checkValue = document.getElementsByName('name_position'); //??????????????? 0:????????????, 1:????????????, 2:????????????
    for (var i = 0; i < 3; i++){
      if (checkValue.item(i).checked){
        pos = i;
      }
    }
    checkValue1 = document.getElementsByName('name_type'); //??????????????? 0:????????????, 1:???????????????, 2:??????????????????, 3:????????????, 4:??????
    for (var i = 0; i < 5; i++){
      if (checkValue1.item(i).checked){
        word_type = i;
      }
    }
    word = document.getElementById('name').value; //??????????????????
    idx = Math.floor( Math.random() * 101 ); //idx1???0???100?????????????????????????????????
    idx1 = Math.floor( Math.random() * 301 ); //idx1???0???300?????????????????????????????????
    idx2 = Math.floor( Math.random() * 272 );
    result = '';
    if((pos == 2 || pos == 0) && word_type == 0){ // ??????????????????
      arr = a1;
      arr1 = a6;
    }
    if((pos == 2 || pos == 0) && word_type == 1){ // ???????????????
      arr = a2;
      arr1 = a6;
    }
    if((pos == 2 || pos == 0) && word_type == 2){ // ??????????????????
      arr = a3;
      arr1 = a6;
    }
    if((pos == 2 || pos == 0) && word_type == 3){ // ????????????
      arr = a4;
      arr1 = a6;
    }
    if((pos == 2 || pos == 0) && word_type == 4){ // ??????
      arr = a5;
      arr1 = a6;
    }
    if(pos == 1){ // ????????????
      arr1 = a6;
    }
    
    if(pos == 2 && word_type != 0){ // ???????????? ??????????????????
      result = arr[idx] + String(word);
    }else if(pos == 2 && word_type == 0){ // ???????????? ??????????????????
      result = arr[idx1] + String(word);
    }else if(pos == 1){ // ????????????
      result = String(word) + arr1[idx2];
    }else if(pos == 0 && word_type != 0){ // ?????????????????? ??????????????????
      result = arr[idx] + arr1[idx2];
    }else if(pos == 0 && word_type == 0){ // ?????????????????? ??????????????????
      result = arr[idx1] + arr1[idx2];
    }else{
      result = '[Error] : ????????????????????????';
    }
    document.getElementById('ans').value = result;
  }
}
// {
//   function ranking(){
//     _d = new Date().getTime(); //???????????????????????????????????????????????????
//     $.get("1.php?_d=" + _d, function(data){
//     var a = data.split("\n"); //??????????????????
//     var table = '<table border=1 cellspacing=0 cellpadding=2 style="background-color: lightsteelblue">';
//     table += '<tr><td colspan="4" align="center" style="font-weight: bold; font-style: italic; background-color: darkslategray; color: white;">ranking</td></tr><tr><td>??????</td><td>??????</td><td>??????</td><td>??????</td></tr>';
//     for(i=0;i<a.length-1;i++){
//     var b = a[i].split(","); //?????????????????????
//     table += '<tr><td><a href="10play.php?r=' + i + '">' + (i+1) + "</a></td><td>" + b[2] +
//    "</td><td>"
//     + b[1] + "</td><td>" + b[0] + "</td></tr>";
//     }
//     table += "</table>";
//     document.getElementById("ranking").innerHTML = table;
//    });
//    } 
   
// }
