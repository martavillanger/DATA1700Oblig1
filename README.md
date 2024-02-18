# DATA1700Oblig1
Html file is set up to mimic the look of the assignment example, but in English. 
Made use of html ids to be used by javascript file.
Each input field in the html has a span tag in the color red with an id that javascript
can call upon to make the field visible with an error message if applicable. 
Used a table for the four last input fields for uniformity. 
There are two html buttons that call upon functions in the javascript file.
Under the subheader "All tickets" will be shown all gathered information from each ticket purchased.
The javascript file contains the following:
An empty array tickets.
A function called buyTicket that reads all user inputs into local variables.
There is a function to validate each input and display a red error message on the page next to each field.
As it stands, there is only shown an error message for one field at a time descending from the top. 
I was unable to display all applicable error messages at one time and will need to look into that further. 
When all input fields are correctly submitted they are added as elements into an object ticketOrder.
The object is then appended to the array of tickets and displayed under the "ticketArray" area on the page.
To format the display of all purchased tickets there is a function createTable that takes the whole array
as an input. 
Each time the "buy ticket" button is pressed a new table is created that replaces the last one. 
The function first creates a table, then goes through the array and creates a row for each object in the array
and a new cell in each row for every element in the object. 
The value of that element is then inserted into the cell to create a uniform table display.
A function emptyArray deletes all elements in the array when the button "Delete tickets" is pressed.
The validation functions use the same logic of checking the user input against a rule or regular expression.
Finally, there is a function resetInputs that clear the input fields on the page after pressing the buy ticket button.
