# Task 3
"""
Create a running Python project to check if all digits of a number divide it; given a
number n, find whether all digits of n divide it or not.
"""
is_number = False
# Ask the user to write a number
user_input = input('Please enter a number (integer): ')
# iteration stops when the entered input is a digit
while not is_number:
    digit_list = []  # empty list
    answer = 'Yes'  # default value is Yes
    if user_input.isdigit():  # if valid number, then process

        for digit in user_input:  # iterate over each digit in the number
            if int(digit) == 0:  # divide by zero equals undefined
                print('No')
                answer = 'No'  # toggle answer value
                break
            if int(user_input) % int(digit) == 0:  # check if it is dividable
                digit_list.append(digit)  # append each digit to the list
                continue

        if answer == 'Yes':  # only print for yes answer
            print('Yes')  # output to inform the user
            for index, digit in enumerate(digit_list):
                if index == len(digit_list)-1:  # to check if it is the last digit
                    print(user_input + ' % ' + digit + ' == 0')  # print without comma
                else:
                    print(user_input + ' % ' + digit + ' == 0,', end = ' ')

        is_number = True  # to break the loop

    else:  # if not a valid number, then enter again
        user_input = input('Oops! Please enter a valid number (integer): ')
