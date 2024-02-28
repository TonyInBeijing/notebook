# Tokenizer 进阶操作
import transformers
from transformers import AutoTokenizer
model_checkpoint = "distilbert-base-uncased"
batch_size = 16
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
#TODO: 以下断言确保我们的 Tokenizers 使用的是 FastTokenizer（Rust 实现，速度和功能性上有一定优势）。
assert isinstance(tokenizer, transformers.PretrainedTokenizerFast) # 您可以在大模型表上查看哪种类型的模型具有可用的快速标记器，哪种类型没有。

# 在问答预处理中的一个特定问题是如何处理非常长的文档。
# 在其他任务中，当文档的长度超过模型最大句子长度时，我们通常会截断它们，但在这里，删除上下文的一部分可能会导致我们丢失正在寻找的答案。
# 为了解决这个问题，我们允许数据集中的一个（长）示例生成多个输入特征，每个特征的长度都小于模型的最大长度（或我们设置的超参数）。

#TODO:超出最大长度的文本处理
max_length = 384
doc_stride = 128

# 下面，我们从训练集中找出一个超过最大长度（384）的文本：
for i, example in enumerate(datasets["train"]):
    if len(tokenizer(example["question"], example["context"])["input_ids"]) > 384:
        break
# 挑选出来超过384（最大长度）的数据样例
example = datasets["train"][i]

len = len(tokenizer(example["question"], example["context"])["input_ids"]) # 超出384的token长度

#TODO: 关于截断的策略：
    # - 直接截断超出部分: truncation=only_second
    # - 仅截断上下文（context），保留问题（question）：return_overflowing_tokens=True & 设置stride
tokenized_example = tokenizer(
    example["question"],
    example["context"],
    max_length=max_length,
    truncation="only_second",
    return_overflowing_tokens=True,
    stride=doc_stride
)

input_ids = [len(x) for x in tokenized_example["input_ids"]]