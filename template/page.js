function click_select(id)
{
  var color = document.getElementById(id);
  if (color.value === 'yes')
  {
	document.getElementById(id).style.backgroundColor= '#fafafa';
	color.value ='no';
  }  
  else {
	document.getElementById(id).style.backgroundColor= '#c1c1c1';
	color.value = 'yes';
  }
}