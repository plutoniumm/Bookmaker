import pandas as pd
import os

print(os.getcwd())

data1 = pd.read_csv("./R2.csv")
data2 = pd.read_csv("./R2Imgs.csv")

print(data1.head())
print(data2.head())


output4 = pd.merge(data1, data2, on="OLID", how="outer")

output4.drop(["title", "len", "to", "pages"], axis=1, inplace=True)

print(
    output4.head()
)
output4.to_csv("R2Final.csv", index=False, na_rep="0")
