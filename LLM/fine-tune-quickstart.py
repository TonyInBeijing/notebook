# 查看数据集方法
import pandas as pd
import random
import datasets
from IPython.display import display,HTML
def show_random_elements(dataset,num_examples=10):
    assert num_examples <= len(dataset), "Can't pick more elements than dataset"
    picks = []
    #TODO: 取10条不同数据
    for _ in range(num_examples):
        pick = random.randint(0,len(dataset)-1)
        while pick in picks:
            pick = random.randint(0,len(dataset)-1)
        picks.append(pick)
    #TODO: 将数据转换成 panda 的数据表格
    df = pd.DataFrame(dataset[picks])
    for column, typ in dataset.features.items():
        if isinstance(typ,datasets.ClassLabel):
            df[column] = df[column].transform(lambda i: typ.names[i])
    display(HTML(df.to_html()))

# 大模型微调步骤

##TODO:1.下载数据集

from datasets import load_dataset

dataset = load_dataset("yelp_review_full") # yelp 评论数据集

##TODO:2.预处理数据集
# 下载数据集到本地后，使用 Tokenizer 来处理文本，对于长度不等的输入数据，可以使用填充（padding）和截断（truncation）策略来处理。
# Datasets 的 map 方法，支持一次性在整个数据集上应用预处理函数。

from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased") #加载需要微调的模型的 tokenizer

def tokenize_function(examples):
    return tokenizer(examples["text"],padding="max_length",truncation=True)

tokenize_datasets = dataset.map(tokenize_function,batched=True)

##TODO:3.数据抽样（1000条）
### shuffle() 方法打乱数据顺序
small_train_dataset = tokenize_datasets["train"].shuffle(seed=42).select(range(1000))
samll_eval_dataset = tokenize_datasets["test"].shuffle(seed=42).select(range(1000))

##TODO:4.加载预训练模型
from transformers import AutoModelForSequenceClassification
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased")

##TODO:5.设置训练超参数
# 完整配置参数与默认值：https://huggingface.co/docs/transformers/v4.36.1/en/main_classes/trainer#transformers.TrainingArguments
from transformers import TrainingArguments

model_dir = "/model/bert-base-cased-finetuned-yelp" #设置模型输出路径

training_args = TrainingArguments(output_dir=model_dir,
                                  per_device_train_batch_size=16, #训练步长
                                  num_train_epochs=5, #训练次数
                                  logging_steps=100 # 每100次训练打印一次日志
                                  )
##TODO:6.设置评估指标
# 完整评估指标：https://huggingface.co/evaluate-metric
import numpy as np
import evaluate
metric = evaluate.load("accuracy")

def compute_metrics(eval_pred):
    logits,labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)

## 训练过程指标监控
from transformers import TrainingArguments,Trainer
training_args = TrainingArguments(
    output_dir=model_dir,
    evaluation_strategy="epoch",
    per_device_train_batch_size= 16,
    num_train_epochs= 5,
    logging_steps= 30
)

##TODO:7.开始训练
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=samll_eval_dataset,
    compute_metrics=compute_metrics
)

trainer.train()

##TODO:8.验证准确率
small_test_dataset = tokenize_datasets["test"].shuffle(seed=64).select(1000)
trainer.evaluate(small_test_dataset)

##TODO:9.保存模型和训练状态
trainer.save_pretrained(model_dir)
trainer.save_state()

