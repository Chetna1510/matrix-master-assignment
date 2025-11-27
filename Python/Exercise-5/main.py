# 1: Accessing Tuple Elements
# Create a tuple with the values ("apple", "banana", "cherry", "date").

fruits = ("apple", "banana", "cherry", "date")
# Print the first item.
print(fruits[0])  # Output: apple

# Print the last item using a negative index.
print(fruits[-1])  # Output: date

# Print the second and third items using slicing.
print(fruits[1:3])  # Output: ('banana', 'cherry')

# 2: Tuple Operations
# Create two tuples:
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Combine them into a new tuple.
combined_tuple = tuple1 + tuple2
print("Combined tuple:", combined_tuple)  # Output: (1, 2, 3, 4, 5, 6)

# Multiply tuple1 by 2 and print the result.

multiply_tuple = tuple1 * 2
print("multiplied first tuple by 2: ", multiply_tuple)

# Multiply each element by 2
multiplied_elements = tuple(x * 2 for x in tuple1)

print("Tuple with multiplied elements:", multiplied_elements)


# 3: Tuple Methods & Unpacking
# Create a tuple with the values (10, 20, 30, 40, 50).
numbers = (10, 20, 30, 40, 50)

# Use tuple unpacking to assign the first two values to variables a and b, and the rest to a variable rest.
a, b, *rest = numbers

# Print a, b, and the rest.
print("a:", a)
print("b:", b)
print("rest:", rest)
# Count how many times 20 appears in the tuple.
count_20 = numbers.count(20)
print("20 appears:", count_20, "time(s)")

# Find the index of 40 in the tuple.
index_40 = numbers.index(40)
print("Index of 40:", index_40)
