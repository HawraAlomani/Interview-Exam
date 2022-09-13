# Task 2
"""
Create a running Python project that can take two dates as input, and then
calculate the amount of time between them.
"""
from datetime import datetime

# Asking the user to enter two dates with the following format (dd/mm/yyyy)
# Styling the printed message with ANSI escape code
print('\033[0;37;40m Welcome.. \n Let\'s calculate the amount of time between two dates \n')
print('\033[1;37;40m Note: make sure to enter your date as dd/mm/yyyy')

# specifying our date format
date_format = "%d/%m/%Y"

date1 = str(input('\033[0;35;40m Please enter the first date:\n'))  # user input date 1

# checking if it's a valid format for date 1
date1_format = False
while not date1_format:  # loop until get the valid format from user
    try:
        date1_format = bool(
            datetime.strptime(date1, date_format))  # output True if match the format, and stops the loop
        date1 = datetime.strptime(date1, date_format)  # save the input variable as an object with day,month,year
    except ValueError:
        date1_format = False
        print('\033[0;31;40m The first date does not follow the format!')
        date1 = str(input('\033[0;35;40m Please enter again the first date:\n'))

date2 = str(input('\033[0;35;40m Please enter the second date:\n'))  # user input date 2

# checking if it's a valid format for date 2
date2_format = False
while not date2_format:  # loop until get the valid format from user
    try:
        date2_format = bool(
            datetime.strptime(date2, date_format))  # output True if match the format, and stops the loop
        date2 = datetime.strptime(date2, date_format)  # save the input variable as an object with day,month,year
    except ValueError:
        date2_format = False
        print('\033[0;31;40m The second date does not follow the format!')
        date2 = str(input('\033[0;35;40m Please enter again the second date:\n'))

# abs() to convert the negative number to positive
# in some cases negative values may appear due to subtraction.
print(
    '\033[0;30;00m' + str(abs(date1.year - date2.year)) + " Years, " + str(abs(date1.month - date2.month)) + " Months, "
    + str(abs(date1.day - date2.day)) + " Days")
