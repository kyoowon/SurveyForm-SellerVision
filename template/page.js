
var total_list = []
var select_list = {}

function find_id(q)
{
  for(i in total_list)
  {
    if(total_list[i].q == q)
      return (total_list[i].id);
  }
  return null;
}


function check_answer(){
  if (total_list.length != 16){
    window.alert("모든 문항을 선택해주십시오.");
  }
  else{
    next_page(); 
  }
}

temp_list = [];

function mult_select(q, id) {
  var color = document.getElementById(id);
  if (color.getAttribute("value") != "no")
  {
    if (q % 2 != 0)
      color.style.backgroundColor = '#fafafa';
    else
      color.style.backgroundColor = '#181f39';
    document.getElementById(id).setAttribute("value","no");
    console.log('ok')
  }  
  else {
    color.style.backgroundColor= '#c1c1c1';
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
    var other_id = find_id(q);
    if (select_list.id != null)
    {
      if (q % 2 != 0)
        document.getElementById(select_list.id).style.backgroundColor = '#fafafa';
      else
        document.getElementById(select_list.id).style.backgroundColor = '#181f39';
    }
    if (other_id != null)
    {
      if (q % 2 != 0)
        document.getElementById(other_id).style.backgroundColor = '#fafafa';
      else
        document.getElementById(other_id).style.backgroundColor = '#181f39';
    }
    color.style.backgroundColor= '#c1c1c1';
    value = 'yes';
    select_list = {q, id, value};
}

function next_page() {
  for (var i in total_list)
  {
    if (total_list[i].q == select_list.q){
      total_list[i] = select_list;
      return ;
    }
  }
  if (select_list.id != null)
    total_list.push(select_list);
  select_list = {};
}

function submit_form(){
  for(i in total_list)
  {
    frist = total_list[i].id.indexOf("a");
    total_list[i].id =parseInt(total_list[i].id.slice(frist + 1, total_list[i].length));
  }
}

