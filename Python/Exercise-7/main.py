# 1. Find Common Elements in Two Lists
# Use sets to find the intersection (common elements) between two lists.

def common_elements(a, b):
    common_element = list(set(a).intersection(set(b)))
    return common_element


a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
print(common_elements(a, b))  # Output: [3, 4]


# 2. Remove Duplicates While Preserving Order
# You can use a set to track seen elements and build a new list without duplicates.


def remove_duplicates(seq):
    seen = set()        # To track seen elements
    result = []         # To store elements without duplicates
    for item in seq:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result


nums = [1, 2, 2, 3, 4, 3, 5]
print(remove_duplicates(nums))  # Output: [1, 2, 3, 4, 5]


# 3. Check if Two Sets are Disjoint(No Common Elements)
# This uses the isdisjoint() method, which returns True if sets have no elements in common.


def are_disjoint(set1, set2):
    return set1.isdisjoint(set2)


a = {1, 2, 3}
b = {4, 5, 6}
print(are_disjoint(a, b))  # Output: True
c = {3, 4}
print(are_disjoint(a, c))  # Output: False
