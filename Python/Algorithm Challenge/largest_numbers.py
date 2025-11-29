# ------- Pseudocode -------
# create a function called largest_numbers() with an array of arrays as an argument
# create an empty list called result to store the largest numbers
# loop through each sub-array in the main array:
#    find the maximum number in the sub-array using max()
#    append the maximum number to result
# return result

def largest_numbers(arr):
    result = []
    for sub_array in arr:
        max_num = max(sub_array)
        result.append(max_num)
    return result


# run the function
test_array = [[13, 27, 18, 26], [32, 35, 37, 39],
              [1000, 1001, 857, 1], [5, 9, 2, 7]]
print(largest_numbers(test_array))

# run the function
# initialize empty list result
# loop through each sub-array:
#    find max(sub_array)
#    append max to result
# return result
