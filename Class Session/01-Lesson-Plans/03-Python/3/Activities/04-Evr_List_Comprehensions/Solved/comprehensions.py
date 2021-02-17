fish = "halibut"

# Loop through each letter in the string
# and push to an array
letters = []


print(letters)

# List comprehensions provide concise syntax for creating lists


print(letters)

# We can manipulate each element as we go
capital_letters = []
for letter in fish:
    capital_letters.append(letter.upper())

print(capital_letters)

# List Comprehension for the above

print(capital_letters)

# We can also add conditional logic (if statements) to a list comprehension
july_temperatures = [87, 85, 92, 79, 106]
hot_days = []
for temperature in july_temperatures:
    if temperature > 90:
        hot_days.append(temperature)
print(hot_days)

# List Comprehension with conditional

print(hot_days)
