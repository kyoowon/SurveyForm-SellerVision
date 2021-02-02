var total_list = []
var select_list = {}

function find_id(q)
{
  for(lst in total_list)
  {
    if(lst[0] == q)
      return (lst);
  }
  return null;
}

function click_select(q, id) {
    var color = document.getElementById(id);
    if (color.value == 'yes')
    {
      if (q % 2 != 0)
        color.style.backgroundColor = '#fafafa';
      else
        color.style.backgroundColor = '#181f39';
      color.value ='no';
    }  
    else {
      if (select_list.id != null)
      {
        if (q % 2 != 0)
          document.getElementById(select_list.id).style.backgroundColor = '#fafafa';
        else
          document.getElementById(select_list.id).style.backgroundColor = '#181f39';
      }
      color.style.backgroundColor= '#c1c1c1';
      color.value = 'yes';
      select_list = {q, id};
  }
}

function next_page() {
  for (lst in total_list)
  {
    if (lst[0] == select_list.q){
      lst = select_list;
      return ;
    }
  }
  if (select_list.id != null)
    total_list.push(select_list);
  select_list = {};
}