"""1. Magic 8-ball
Write A magic 8-ball, when you ask a question, the program provides a random answer from a list. The code below contains a list of possible answers. Create a magic 8-ball program that asks a question, then gives a random answer.
"""
import random
# List of possible answers
answers = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely",
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
]

question = input("Ask the Magic 8-Ball a question: ")
answer = random.choice(answers)
print("answer:", answer)
print("Magic 8-Ball says:", answer)

"""2. FIFO
A first-in-first-out (FIFO) structure, also called a “queue,” is a list that gets new elements added at the end, while elements from the front are removed and processed. 
Write a program that processes a queue. 
In a loop, ask the user for input. 
If the user just presses the Enter key, the program ends. 
If the user enters anything else, except for a single question mark (?), the program considers what the user entered a new element and appends it to the queue. 
If the user enters a single question mark, the program pops the first element from the queue and displays it. 
You have to take into account that the user might type a question mark even if the queue is empty.
"""
queue = []
while True:
    user_input = input("Enter something (Enter to quit, ? to process): ")

    # End program if Enter is pressed with no text
    if user_input == "":
        print("Program Ended")
        break

    # If the user enters "?", process (pop) the first element
    elif user_input == "?":
        if queue:                     # Check if queue is not empty
            item = queue.pop(0)       # FIFO: remove the first element
            print("Processing:", item)
        else:
            print("The queue is empty. Nothing to process.")
    else:
        queue.append(user_input)
        print(f"Added '{user_input}' to the queue.")

"""3. Fibonacci
Write a Fibonacci sequence using Python. 
A Fibonacci sequence is an infinite series of numbers that are created by adding the last two numbers in the series. 
A series would start with the numbers 1 and 1 in place, followed by 1 (0+1). 2(1+1), 3(1+2), 5(3+2), etc.. 
"""
n = int(input("How many Fibonacci numbers would you like? "))


def fibonacci_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b


# Example usage:
fibonacci_iterative(n)
# Output: 0 1 1 2 3 5 8 13 21 34

"""4. Counting Letters
Write a program that counts the Number of Characters Occurring in a String. 

print(counting_number("an","banan")) # 2
After that, replace the duplicated characters with an empty string.
"""


def couting_letter(sub, text):
    return text.count(sub)


def replace_duplicates(sub, text):
    return text.replace(sub, "")


# Example usage
text = "banan"
substring = "an"

count = couting_letter(substring, text)
print(count)  # Output: 2

new_text = replace_duplicates(substring, text)
print(new_text)  # Output: 'b'

"""5. Palindrome
Given a string, write a Python function to check if it is a palindrome or not. 
A string is said to be a palindrome if the reverse of the string is the same as the string. 
For example, “radar” is a palindrome, but “radix” is not a palindrome.
"""


def is_palindrome(string):
    return string == string[::-1]


print(is_palindrome("madam"))   # True
print(is_palindrome("hello"))   # False
print(is_palindrome("radar"))   # True
print(is_palindrome("radix"))   # False


"""
6. Largest number 
Given a list of numbers, the task is to write a Python program to find the largest number in the given list.
"""

numbers = [23, 63, 10, 24, 50]

largest = max(numbers)
print("The largest number is:", largest)
