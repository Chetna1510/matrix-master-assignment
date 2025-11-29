# ------- Pseudocode -------
# create a function called longest_word() with a string as an argument
# split the string into words using split()
# create a variable longest = "" to store the longest word
# loop through each word in the list of words:
#    if the length of the word > length of longest:
#        update longest = word
# return longest

def longest_word(s):
    words = s.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest


# run the function
print(longest_word("I love programming in Python"))
print(longest_word("This is a test"))
print(longest_word("OpenAI is amazing"))

# run the function
# split string into words
# compare length of each word to current longest
# update longest if the word is longer
# return the longest word
