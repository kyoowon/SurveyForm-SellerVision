
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


function check_answer_count(id){
  next_page(); 
  // if (total_list.length != 13){
  //   document.getElementById(id).setAttribute('for', 'pos1');
  //   window.alert("모든 문항을 선택해주십시오.");
  // }
  // else{
    document.getElementById(id).setAttribute('for', 'pos16');
  // }
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
    console.log('ok')
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

function submit_form(){
  var el;
  var add;
  for(i in total_list)
  {
    frist = total_list[i].id.indexOf("a");
    total_list[i].id = parseInt(total_list[i].id.slice(frist + 1, total_list[i].length));
    
    // el = document.createElement("input");
    // el.type="hidden"
    // el.name="test"
    // el.value=total_list[i].id;
    // document.forms.appendChild(el);
  }
  exports.test=total_list[i].id;
  // document.forms.submit();
}

function change_next_color(id){
  if (select_list.id != null){
    document.getElementById(id).style.backgroundColor = "#e44178";
    document.getElementById(id).style.color = "#fff"
    document.getElementById(id).style.shadow = "#ff6b51"
  }
  // else{
  //   document.getElementById(id).style.backgroundColor = "#e44178";
  //   document.getElementById(id).style.color = "#fff"
  //   document.getElementById(id).style.shadow = "#ff6b51"
  // }

}

