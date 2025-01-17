from concurrent.futures import ThreadPoolExecutor
from base64 import b64encode as B64
from requests import get
from PIL import Image
from io import BytesIO
import pandas as pd
import json
import os

IMG = lambda cover: f'https://covers.openlibrary.org/b/id/{cover}-M.jpg'

csv_dir = '../src/routes/data/'
output_dir = '../static/cache/'
os.makedirs(output_dir, exist_ok=True)

HMAX = 200

errors = []

ct = 0
def process_image(image):
  global ct
  try:
    print(ct := ct + 1, end='\r')
    res = get(IMG(image))
    if res.status_code != 200:
      errors.append((image, "FetchError"))
      return None

    img = Image.open(BytesIO(res.content)).convert('RGB')
    width, height = img.size
    if height > HMAX:
      h_n, w_n = HMAX, int((HMAX / height) * width)
      img = img.resize((w_n, h_n))

    buffer = BytesIO()
    img.save(buffer, format='JPEG', optimize=True, quality=85)
    buffer.seek(0)
    img_base64 = B64(buffer.read()).decode('utf-8')

    return (image, img_base64)
  except Exception as e:
    errors.append((image, e))
    return None

for i in range(1, 5):
  csv_path = os.path.join(csv_dir, f'R{i}.csv')
  print(f"Processing {csv_path}...")
  images = pd.read_csv(csv_path)['cover']

  with ThreadPoolExecutor(max_workers=15) as executor:
    results = list(executor.map(process_image, images))

  base64_images = [img for img in results if img is not None]

  output_file = os.path.join(output_dir, f'R{i}.json')
  with open(output_file, 'w') as f:
    json.dump(dict(base64_images), f)

error_log = os.path.join(output_dir, 'errors.log')
with open(error_log, 'w') as f:
  for err in errors:
    f.write(f"{err}\n")
print(f"Errors logged to {error_log}.")
