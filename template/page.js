function click_select(id, state, val)
{
  var pre_id = id;
  var answer = 0;
  var color = document.getElementById(id);
  if (state==1){
    if (color.value === 'yes')
    {
    document.getElementById(id).style.backgroundColor= '#fafafa';
    if(answer == val){
      answer=0
    }
    color.value ='no';
    }  
    else {
      if (answer != 0){
        document.getElementById(pre_id).style.backgroundColor= '#fafafa';
        document.getElementById(pre_id).color.value ='no';
      }
    document.getElementById(id).style.backgroundColor= '#c1c1c1';
    color.value = 'yes';
    answer = value;
    }
  }
  
}