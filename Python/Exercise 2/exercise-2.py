# Exercise-2

# Write a program that checks if a number is positive, negative, or zero.

number = float(input("Enter a number: "))

if number > 0:
    print("Number is positive")
elif number < 0:
    print("Number is negative")
else:
    print("Number is zero")

# Use a for loop to print numbers from 1 to 10.

for i in range(1, 11):
    print("Acending Order", i)

# Use a while loop to print numbers from 10 down to 1.

num = 10

while num >= 1:
    print("Descending Order", num)
    num -= 1

# Write a program that prints all even numbers from 1 to 20 using range().

for i in range(1, 20):
    if i % 2 == 0:
        print("Even Number:", i)

# Ask the user for a number. If it’s greater than 100, print "Big number!", otherwise print "Small number!".

user_input_number = input("Enter the number here:")
if int(user_input_number) > 100:
    print("Big number!")
else:
    print("Small Number!")
