import pandas as pd

FILE = "R4"

data1 = pd.read_csv(f"./{FILE}.csv")  # read csv
order = data1["OLID"].values  # get order of OLID
data2 = pd.read_csv(f"./{FILE}Imgs.csv", sep=";")  # read images

output = pd.merge(data1, data2, on="OLID", how="outer")

output.drop(
    ["title", "Len", "To", "Pages"],  # drop useless headers
    axis=1, inplace=True, errors='ignore'
)

output.columns = output.columns.str.lower()  # lower case all headings
new_index = {'olid': 'OLID', 'sr': 'index',
             'book': 'name', 'coverid': 'cover'}
output.rename(columns=new_index, inplace=True)

output = output.set_index('OLID')
output = output.reindex(order)
output = output.reset_index()

if not 'index' in output.columns:
  output.insert(0, 'index', range(1, 1 + len(output)))

output.to_csv(f"{FILE}Final.csv", index=False, na_rep="0")
