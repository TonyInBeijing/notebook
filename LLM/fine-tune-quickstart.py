# 查看数据集方法
import pandas as pd
import random
import datasets
from IPython.display import display,HTML
def show_random_elements(dataset,num_examples=10):
    assert num_examples <= len(dataset), "Can't pick more elements than dataset"
    picks = []
    for _ in range(num_examples):
        pick = random.randint(0,len(dataset)-1)
        while pick in picks:
            pick = random.randint(0,len(dataset)-1)
        picks.append(pick)
    df = pd.DataFrame(dataset[picks])
    for column, typ in dataset.features.items():
        if isinstance(typ,datasets.ClassLabel):
            df[column] = df[column].transform(lambda i: typ.names[i])
    display(HTML(df.to_html()))

