import json
import bibtexparser

# Open your BibTeX file (ensure it's named correctly, e.g., bibliography.bib)
with open('bibliography.bib', encoding='utf-8') as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

# Make sure the _data folder exists
import os
os.makedirs('_data', exist_ok=True)

# Write the BibTeX entries to a JSON file
with open('_data/publications.json', 'w', encoding='utf-8') as json_file:
    json.dump(bib_database.entries, json_file, indent=4)

print("Conversion complete! Check _data/publications.json")