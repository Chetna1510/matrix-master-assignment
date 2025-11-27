# 1. Building Dictionaries from a List
# The code below contains a list of words.
# Build a dictionary that contains all these words as keys, and their quantities as values.
# Print the words with their quantities.

fruits = ["apple", "durian", "banana", "durian", "apple", "cherry",
          "cherry", "mango", "apple", "apple", "cherry", "durian", "banana",
          "apple", "apple", "apple", "apple", "banana", "apple"]

fruits_quantities = {}
for fruit in fruits:
    fruits_quantities[fruit] = fruits_quantities.get(fruit, 0) + 1

# output - {'apple': 9, 'durian': 3, 'banana': 3, 'cherry': 3, 'mango': 1}
print(fruits_quantities)

# 2. Building Dictionaries from a String
# The code block below contains a string that is a list of words, separated by commas.
# Build a dictionary that contains all these words as keys, and how often they occur as values. Then print the words with their quantities.

text = "apple,durian,banana,durian,apple,cherry,cherry,mango," + \
    "apple,apple,cherry,durian,banana,apple,apple,apple," + \
    "apple,banana,apple"

wordlist = text.split(",")  # Split the string into a list of words

word_counts = {}
for word in wordlist:
    word_counts[word] = word_counts.get(word, 0) + 1

# Print words with their quantities
for word, count in word_counts.items():
    print(f"{word}: {count}")

    # output: apple: 9
    # durian: 3
    # banana: 3
    # cherry: 3
    # mango: 1

# 3. Translating
# The code block below contains a very small dictionary that contains the translations of English words to Dutch.
# Write a program that uses this dictionary to create a word-for -word translation of the given sentence.
# A word for which you cannot find a translation, you can leave “as is .”
# The dictionary is supposed to be used case-insensitively, but your translation may consist of all lower case words.
# It is nice if you leave punctuation in the translation, but if you take it out, that is acceptable(as leaving punctuation in is quite a bit of work, and does not really have anything to do with dictionaries – besides, leaving punctuation in is much easier to do once you have learned about regular expressions).

english_dutch = {"last": "laatst", "week": "week", "the": "de",
                 "royal": "koninklijk", "festival": "feest", "hall": "hal", "saw":
                 "zaag", "first": "eerst", "performance": "optreden", "of": "van",
                 "a": "een", "new": "nieuw", "symphony": "symphonie", "by": "bij",
                 "one": "een", "world": "wereld", "leading": "leidend", "modern":
                 "modern", "composer": "componist", "composers": "componisten",
                 "two": "twee", "shed": "schuur", "sheds": "schuren"}

sentence = "Last week The Royal Festival Hall saw the first \
performance of a new symphony by one of the world's leading \
modern composers, Arthur \"Two-Sheds\" Jackson."
# Split sentence into words
words = sentence.split()

# Translate each word
translated_words = []
for word in words:
    # Convert to lowercase for dictionary lookup
    word_lower = word.lower()

    # Check if word is in dictionary
    if word_lower in english_dutch:
        translated_words.append(english_dutch[word_lower])
    else:
        translated_words.append(word)

# Join the translated words back together
translation = " ".join(translated_words)

print(translation)
# output: laatst week de koninklijk feest hal zaag de eerst optreden van een nieuw symphonie bij een van de world's leidend modern composers, Arthur "Two-Sheds" Jackson.
