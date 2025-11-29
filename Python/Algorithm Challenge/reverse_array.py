# ------- Pseudocode -------
# create a function called reverse_array that takes an array as an argument
# check if the length of this array is 0. if so, the list is empty and we return a message
# use reverse() method or list slicing
# return the updated list

def reverse_array(arr):
    if len(arr) == 0:
        return "The list is empty"
    else:
        arr.reverse()
        return arr


# run the function
print(reverse_array([2, 1, 6, 4, -7]))

# run the function
# if the length is 0 => return "The list is empty"
# reverse the array with arr.reverse()
# return the updated array
