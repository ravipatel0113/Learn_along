import os
import csv

udemy_csv = os.path.join("..", "Resources", "web_starter.csv")

# Lists to store data
title = []
price = []
subscribers = []
reviews = []
review_percent = []
length = []

# Use encoding for Windows
# with open(udemy_csv, newline='', encoding='utf-8') as csvfile:
# OR below one for MAC
# with open(udemy_csv, newline='') as csvfile: