import os
import sys

input_file=sys.argv[1]
if not os.path.exists(input_file):
    print("File not found")
    sys.exit(1)

# get name from x.txt
out_dir = os.path.splitext(input_file)[0]
os.makedirs(out_dir, exist_ok=True)

with open(input_file, 'r') as file:
    text = file.read()

# Split the text into chunks of 1000 words
words = text.split()
CHSIZE = 5000
chunks = [words[i:i+CHSIZE] for i in range(0, len(words), CHSIZE)]

# for each chunk run cli command
for i, chunk in enumerate(chunks):
    chunk_text = ' '.join(chunk)
    chunk_file = os.path.join(out_dir, f'{i}.txt')
    with open(chunk_file, 'w') as file:
        file.write(chunk_text)

print(f"Wrote Chunk {len(chunks)} chunks")