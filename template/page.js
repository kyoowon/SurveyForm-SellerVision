var total_list = []
var select_list = {}


function find_id(q)
{
  for(i in total_list)
  {
    if(total_list[i].q == q)
      return (i);
  }
  return null;
}

temp_list = [];

function mult_select(q, id) {
  var color = document.getElementById(id);
  if (color.getAttribute("value") != "no")
  {
    if (q % 2 != 1)
    {
      color.style.color = '#fafafa';
      color.style.textDecoration = 'none';

    }
    else
    {
      color.style.color = '#181f39';
      color.style.textDecoration = 'none';
    }
    document.getElementById(id).setAttribute("value","no");
  }  
  else {
    color.style.color = '#e44178';
    color.style.textDecoration = 'underline';
    color.setAttribute("value","yes");
  }
  var value = color.getAttribute("value");
  select_list = {q, id, value};
  for (var i in temp_list)
  {
    if (temp_list[i].id == select_list.id)
    {
      temp_list[i] = select_list;
      return ;
    }
  }
  temp_list.push(select_list);
  select_list = {};
}


function click_select(q, id) {
    var color = document.getElementById(id);
    var value = color.value;
    var idx = find_id(q);
    if (select_list.id != null)
    {
        document.getElementById(select_list.id).style.textDecoration = 'none';
        if (q % 2 == 1)
          document.getElementById(select_list.id).style.color = '#181f39';
        else
          document.getElementById(select_list.id).style.color = '#fafafa';
    }
    if (total_list[idx] != null)
    {
        document.getElementById(total_list[idx].id).style.textDecoration = 'none';
        if (total_list[idx].q % 2 == 1)
          document.getElementById(total_list[idx].id).style.color = '#979797';
        else
          document.getElementById(total_list[idx].id).style.color = '#979797';
    }
    color.style.textDecoration = 'underline';
    color.style.color = '#e44178';
    value = 'yes';
    select_list = {q, id, value};
}

function next_page() {
  for (var i in total_list)
  {
    if (total_list[i].q == select_list.q){
      total_list[i] = select_list;
      select_list = {};
      return ;
    }
  }
  if (select_list.id != null)
    total_list.push(select_list);
  select_list = {};
}

mult_list = []

function submit_form(){
  for(i in total_list)
  {
    frist = total_list[i].id.indexOf('a');
    total_list[i].id = parseInt(total_list[i].id.slice(frist + 1, total_list[i].length));
  }

  for(i in temp_list)
  {
    if(temp_list[i].value == 'yes')
    {
      frist = temp_list[i].id.indexOf('a');
      mult_list.push({q : temp_list[i].q, id : parseInt(temp_list[i].id.slice(frist + 1, temp_list[i].length))});
    }
  }

  var newForm = document.createElement('form');
  newForm.name = 'total_list'; 
  newForm.method = 'post'; 
  newForm.action = 'http://localhost:3000/report'; 

  for(var i in total_list){
    var qusestion_answer = document.createElement('input');
    qusestion_answer.setAttribute("type", "hidden");
    qusestion_answer.setAttribute("name", "total");
    qusestion_answer.setAttribute("value", total_list[i].id);
    newForm.appendChild(qusestion_answer);
  }

  for(var i in mult_list){
    var mult_answer = document.createElement('input');
    mult_answer.setAttribute("type", "hidden");
    mult_answer.setAttribute("name", "Q" + mult_list[i].q);
    mult_answer.setAttribute("value", mult_list[i].id);
    newForm.appendChild(mult_answer);
  }

  var name_value = document.getElementsByName('name')[0].value;
  var email_value = document.getElementsByName('email')[0].value;
  var product_value = document.getElementsByName('product')[0].value;
  var etc_value = document.getElementsByName('etc')[0].value;
  
  NAME = document.createElement('input');
  NAME.setAttribute("type", "hidden");
  NAME.setAttribute("name", "name");
  NAME.setAttribute("value", name_value);
  newForm.appendChild(NAME);

  EMAIL = document.createElement('input');
  EMAIL.setAttribute("type", "hidden");
  EMAIL.setAttribute("name", "email");
  EMAIL.setAttribute("value", email_value);
  newForm.appendChild(EMAIL);

  PRODUCT = document.createElement('input');
  PRODUCT.setAttribute("type", "hidden");
  PRODUCT.setAttribute("name", "product");
  PRODUCT.setAttribute("value", product_value);
  newForm.appendChild(PRODUCT);

  ETC = document.createElement('input');
  ETC.setAttribute("type", "hidden");
  ETC.setAttribute("name", "etc");
  ETC.setAttribute("value", etc_value);
  newForm.appendChild(ETC);


 document.body.appendChild(newForm);
 newForm.submit();
}

function change_next_color(nxt_d, nxt_l, id){
  if (select_list.id != null){
    document.getElementById(nxt_d).style.backgroundColor = "#e44178";
    document.getElementById(nxt_d).style.color = "#fff"
    document.getElementById(nxt_d).style.shadow = "#ff6b51"
    document.getElementById(nxt_l).setAttribute('for', 'pos' + id);
  }
}
function change_next_color_mult(nxt_d, nxt_l, id){
  
  for(i in temp_list){
    if(temp_list[i].value == 'yes' && temp_list[i].q == (id-1)){
      document.getElementById(nxt_d).style.backgroundColor = "#e44178";
      document.getElementById(nxt_d).style.color = "#fff"
      document.getElementById(nxt_d).style.shadow = "#ff6b51"
      document.getElementById(nxt_l).setAttribute('for', 'pos' + id);
      return
    }
  }
  document.getElementById(nxt_d).style.backgroundColor = "#ffffff";
  document.getElementById(nxt_d).style.color = "rgb(0, 0, 0)";
  document.getElementById(nxt_d).style.shadow = "#ffc7bd"
  document.getElementById(nxt_l).setAttribute('for', 'pos' + (id - 1));
  
}


//개인정보 동의 체크박스

function allCheck() {
  var chklist = document.getElementsByName("chk");
  for(i in chklist)
  chklist[i].setAttribute("checked", true);
}// 모두 체크하기

function oneCheck(a)
{
var allChkBox = $("[name=check1]");
var chkBoxName = $(a).attr("name");


if( $(a).prop("checked") )
{
  checkBoxLength = $("[name="+ chkBoxName +"]").length;
   //전체체크박스 수(모두동의하기 체크박스 제외)
  checkedLength = $("[name="+ chkBoxName +"]:checked").length;
  //체크된 체크박스 수 
  if( checkBoxLength == checkedLength ) {
      allChkBox.prop("checked", true);
      //전체체크박스수 == 체크된 체크박스 수 같다면 모두체크

  } else {
      allChkBox.prop("checked", false);
      
  }
}
else
{
  allChkBox.prop("checked", false);
}
}

$(function(){
$("[name=check1]").click(function(){
  allCheck(this);
  //모두동의하기 체크박스 클릭시
});
$("[name=check2]").each(function(){
  $(this).click(function(){
      oneCheck(this);
  });
});
});

