var total_list = []
var select_list = {}

function click_select(q, id) {
    var color = document.getElementById(id);
    if (color.value === 'yes')
    {
      document.getElementById(id).style.backgroundColor= '#fafafa';
      color.value ='no';
    }  
    else {
      document.getElementById(id).style.backgroundColor= '#c1c1c1';
      color.value = 'yes';
      select_list = {q, id};
  }
}

function next_page() {
  total_list.push(select_list);
}