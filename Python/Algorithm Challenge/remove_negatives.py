# ------- Pseudocode -------
# create a function called remove_negatives() with array as an argument
# if array is empty, return a message
# loop through each element in the array
#    if element is negative, remove it from the array using remove()
# return the array

def remove_negatives(array):
    if len(array) == 0:
        return "This is empty array"
    for number in array:
        if number < 0:
            array.remove(number)
    return array


print(remove_negatives([1, -2, 4, 1]))

# second way


def remove_negatives(array):

    res = list(filter(lambda x: x > 0, array))
    return res


print(remove_negatives([1, -2, 4, 1]))

# --------------- T-Diagram---------------
# Run the function remove_negatives([1, -2, 4, 1])
# If the length is 0 => show message "This is empty array"
# Check first element = 1 < 0? No, then keep it
# Call remove_negatives([-2, 4, 1])
# Check first element = -2 < 0? Yes, then skip it
# Call remove_negatives([4, 1])
# Check first element = 4 < 0? No, then keep it
# Call remove_negatives([1])
# Check first element = 1 < 0? No, then keep it
# Call remove_negatives([]) => return []
# Return the final array [1, 4, 1]
