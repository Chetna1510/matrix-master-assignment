"""1. Multiplication

Create a function that gets a number as a parameter, and then prints the multiplication table for that number from 1 to 10. E.g., when the parameter is 12, the first line printed is “1 x 12 = 12” and the last line printed is “10 x 12 = 120.”
"""


import random


def multiplication_table(number):
    for i in range(1, 11):
        result = i * number
        print(f"{i} * {number} = {result}")


multiplication_table(12)

"""
2. Sum of two strings

Write a function that takes two strings as parameters. The function returns the number of characters that the strings have in common. Each character counts only once, e.g., the strings "bee" and "peer" only have one character in common (the letter “e”). You can consider capitals different from lowercase letters. Note: the function should return the number of characters that the strings have in common, and not print it. To test the function, you can print the result in your main program.

"""


def sum_table(str1, str2):
    # Convert both strings into sets to remove duplicates
    set1 = set(str1)
    set2 = set(str2)

    # Find the intersection of the two sets
    common = set1.intersection(set2)

    # Return the number of common characters
    return len(common)


result = sum_table("peer", "beer")
print(result)

"""
3. Guessing a number

Write a guessing number function that holds a random number between 1 and 10 and get a parameter number. The return for that function will be :

"Too big" if the parameter number is bigger than the held number.

"Too small" if the parameter number is smaller than the held number.

"You are SUPER" if the parameter number is the same as the held number.

Enter the parameter number via the terminal with the help of the input method.
"""


the_main_number = random.randint(1, 100)

print(the_main_number)

guess = 0
attempts = 0

while guess != the_main_number:
    user_number = input("Write a number between 1 and 100: ")
    guess = int(user_number)
    attempts = attempts + 1

    if guess < the_main_number:
        print("Try a higher number")
    elif guess > the_main_number:
        print("Try a smaller one")
    else:
        print("You are SUPER")

print("Your attempts are: ", attempts)
