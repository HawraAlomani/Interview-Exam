# Task 1
"""
Given a list of names, create a running Python project that sorts it alphabetically,
Python has this functionality built-in, but see if you can do it without using sort()!
"""

# By using sort()
my_lst = ['d', 'b', 'a', 'c', 'f', 'h', 'g', 'e']
my_lst.sort()
print('using sort(): '+str(my_lst))

# without using sort()
# By using a sorting algorithm called Bubble sort
# ord() to get ASCII value ex. 'a'= 97 and 'b'= 98.
my_lst2 = ['d', 'b', 'a', 'c', 'f', 'h', 'g', 'e']
temp = ''
# Created a counter to analyze my solution (how many iterations, is it efficient?)
inner_counter = 0
outer_counter = 0
for element in range(len(my_lst2)): # access each element in the list
    for i in range(0, len(my_lst2) - element - 1): # iteration needs to compare elements n(n-1)/2
        if ord(my_lst2[i]) > ord(my_lst2[i + 1]):  # then needs to be swapped.
            temp = my_lst2[i]  # save the value of the current element
            my_lst2[i] = my_lst2[i + 1]  # swapping part 1, assigning next value to current value
            my_lst2[i + 1] = temp  # swapping part 2, assigning current value to the next value
        inner_counter += 1
    outer_counter += 1

print('without using sort(): '+str(my_lst2)) # printing the result / sorted list
print(str(inner_counter+outer_counter)+ ' iterations to get the sorted list using Bubble sort')