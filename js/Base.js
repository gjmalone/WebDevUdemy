function ToggleMenu()
{
	var toggled = true;
	var menuSections = document.getElementsByClassName("navbarCollapse");
	for(i=0; i<menuSections.length; i++)
	{
		ToggleClass(menuSections[i],'navbarShow');
	}

}
function HasClass(e,c)
{
	return !!e.className.match(new RegExp('[ ]{0,1}'+c));
}
function RemoveClass(e,c)
{
	if(HasClass(e,c))
	{
		var regex = new RegExp('[ ]{0,1}'+c);
		e.className = e.className.replace(regex,'');
	}
}
function ToggleClass(e,c)
{
	if(!HasClass(e,c))
	{
		e.className += " "+c;
	}
	else
	{
		var regex = new RegExp('[ ]{0,1}'+c);
		e.className = e.className.replace(regex,'');
	}
}