This class will set equalHeight columns
This class has two methods to be used if a footer element is used or not

Usage:
Give the parent row an set ID and add the css class equalHeight to the columns

initialize by calling the class with the parent ID.
calling the method setColsSameHeight() will set a fixed height to the columns
This is best done in a function that is called  on load and resize events

If a footer element is used like a button it can be set to the bottom via the setColsSameHeightFooter() method.
The footer element requires the className 'articleFooter';
This method will auto initialize the setColsSameHeight();

recommented initialisation:
<script>
    //initialize
    const initEqualHeight = () =>  {
        if(document.getElementById("id_of_parent_row")){
            const equalHeightClassInit = new equalHeightClass("id_of_parent_row");
            equalHeightClassInit.setColsSameHeightFooter();
        }
    }
    window.addEventListener('load', initEqualHeight);
    window.addEventListener('resize', initEqualHeight);
</script>




